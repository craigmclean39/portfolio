export interface Polygon {
  _id: string;
  type: string;
  coordinates: [[[Number]]];
}

export interface MultiPolygon {
  _id: string;
  type: string;
  coordinates: [[[[Number]]]];
}

export interface Country {
  _id: string;
  name: string;
  iso_a2: string;
  geometry: Polygon | MultiPolygon;
}
