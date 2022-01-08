import * as d3 from 'd3';
import { useRef, useEffect, useState } from 'react';
import { FeatureCollection } from '../types/d3Types';
import '../css/map.css';
import { Country } from '../types/geoTypes';

export interface MapProps {
  countryData: Country[];
}

const Map: React.FC<MapProps> = ({ countryData }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [pathElements, setPathElements] = useState(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  /* let projection: any = useRef(
    d3.geoMercator().fitSize([width, height], geoJson as any)
  );
  let pathGenerator: any = useRef(d3.geoPath().projection(projection)); */

  const projection: any = useRef(null);
  const pathGenerator: any = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      const boundingRect = svgRef.current?.getBoundingClientRect();
      setWidth(boundingRect?.width);
      setHeight(boundingRect?.height);
    }
  }, [svgRef]);

  useEffect(() => {
    if (countryData.length > 0) {
      let featureCollection = {
        type: 'FeatureCollection',
        features: [],
      } as FeatureCollection;

      countryData.forEach((country) => {
        featureCollection.features.push(country);
      });

      projection.current = d3
        .geoAlbers()
        .fitSize([width, height], featureCollection as any);
      pathGenerator.current = d3.geoPath().projection(projection.current);

      const paths = featureCollection.features.map((d: any, index: number) => {
        return (
          <path
            key={'path' + index}
            d={pathGenerator.current(d.geometry)}
            fill='var(--map-bg-color)'
            stroke='var(--map-border-color)'
          />
        );
      });

      setPathElements(paths as any);
    }
  }, [countryData, width, height]);

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
    <div className='map-container'>
      <svg className='trace-map' ref={svgRef} onClick={(e) => handleClick(e)}>
        <g>{pathElements}</g>
      </svg>
    </div>
  );
};

export default Map;
