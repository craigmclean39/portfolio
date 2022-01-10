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

export interface CountryProperties {
  name: string;
  iso_a2: string;
}

export interface Country {
  _id: string;
  type: string;
  properties: CountryProperties;
  geometry: Polygon | MultiPolygon;
}

export interface FeatureCollection {
  _id: string;
  type: string;
  features: [];
}
