import type { Properties } from "./PropertiesInterface";
import type { Geometry, Query } from "./QueryGeo";

// types/GeoResponse.ts
export interface GeoResponse {
  type: string;
  features: Feature[];
  query: Query;
}

interface Feature {
  type: string;
  properties: Properties;
  geometry: Geometry;
  bbox: number[];
}





