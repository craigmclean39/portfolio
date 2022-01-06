import * as d3 from 'd3';
import { useRef, useEffect, useState } from 'react';
import geoJson from '../data/mapdata.json';
import { Hop } from '../types/trace';
import { FeatureCollection } from '../types/d3Types';
import { geoJsonFilter } from '../utilities/geoJsonUtils';

export interface MapProps {
  traceData: Hop[];
}

const Map: React.FC<MapProps> = ({ traceData }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [pathElements, setPathElements] = useState(null);
  const [geoJsonReady, setGeoJsonReady] = useState(false);
  const width = 500;
  const height = 500;

  let projection: any = useRef(
    d3.geoMercator().fitSize([width, height], geoJson as any)
  );
  let pathGenerator: any = useRef(d3.geoPath().projection(projection));

  // The geoJSON file takes a while to load, even though it is a local file, it's quite large
  // this useEffect will kickoff the convertGeoJsonToPaths function after we are sure
  // that the json file is loaded
  useEffect(() => {
    async function fetchMapData() {
      await fetch('../data/mapdata.json');
      setGeoJsonReady(true);
    }

    fetchMapData();
  }, []);

  useEffect(() => {
    if (geoJsonReady && traceData.length > 0) {
      covertGeoJsonToPaths();
    }
  }, [traceData, geoJsonReady]);

  const covertGeoJsonToPaths = () => {
    console.log(traceData);
    // When calling the fitSize function on the projection, we need a collection of features,
    // this is the format that the function expects
    let featureCollection = {
      type: 'FeatureCollection',
      features: [],
    } as FeatureCollection;

    // Here we can filter features based on any info, then add them to the feature collection
    // This will allow us to fit only the filtered features in the map
    // Currently filtering based on countries present in our trace hop data
    const propertyValues = traceData.map((hop) => {
      return hop.country;
    });

    const filteredFeatures = geoJsonFilter(geoJson, [
      { propertyName: 'iso_a2', propertyValues: propertyValues },
    ]);

    filteredFeatures.forEach((feature: any) =>
      featureCollection.features.push(feature)
    );

    // create new project and pathGenerator based on the features in the featureCollection
    projection.current = d3
      .geoAlbers()
      .fitSize([width, height], featureCollection as any);
    pathGenerator.current = d3.geoPath().projection(projection.current);

    // create the individual paths
    const paths = filteredFeatures.map((d: any, index: number) => {
      console.log(d);
      return (
        <path
          key={'path' + index}
          d={pathGenerator.current(d as any)}
          fill='#dedede'
          stroke='black'
        />
      );
    });

    setPathElements(paths as any);
  };

  const handleClick = (e: any) => {
    console.log(e);
    console.log(svgRef.current?.getBoundingClientRect());

    const boundingRect = svgRef.current?.getBoundingClientRect();
    let svgX = e.clientX;
    let svgY = e.clientY;

    if (boundingRect) {
      svgX = svgX - boundingRect.left;
      svgY = svgY - boundingRect.top;
    }

    let latlong = projection.current.invert([svgX, svgY]);
    console.log(latlong);
  };

  return (
    <>
      <svg
        width={500}
        height={500}
        ref={svgRef}
        onClick={(e) => handleClick(e)}>
        <g>{pathElements}</g>
      </svg>
    </>
  );
};

export default Map;
