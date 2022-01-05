import * as d3 from 'd3';
import { useRef, useEffect, useState } from 'react';
import geoJson from '../data/mapdata.json';

const Map = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [pathElements, setPathElements] = useState(null);
  const width = 500;
  const height = 500;

  let projection: any = d3
    .geoMercator()
    .fitSize([width, height], geoJson as any);
  let pathGenerator: any = d3.geoPath().projection(projection);

  useEffect(() => {
    async function fetchMapData() {
      await fetch('../data/mapdata.json');
      covertGeoJsonToPaths();
    }

    fetchMapData();
  });

  const covertGeoJsonToPaths = () => {
    const paths = geoJson.features.map((d, idx) => {
      return (
        <path
          key={'path' + idx}
          d={pathGenerator(d as any)}
          fill='#dedede'
          stroke='black'
        />
      );
    });

    setPathElements(paths as any);
  };

  return (
    <>
      <svg width={500} height={500} ref={svgRef}>
        <g>{pathElements}</g>
      </svg>
    </>
  );
};

export default Map;
