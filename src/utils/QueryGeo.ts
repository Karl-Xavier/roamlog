export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Query {
  text: string;
  parsed: {
    city: string;
    expected_type: string;
  };
}