import type { Datasource } from "./DataSource";
import type { Rank } from "./Rank";
import type { Timezone } from "./TimeZone";

export interface Properties {
  datasource: Datasource;
  country: string;
  country_code: string;
  region?: string;
  state: string;
  city?: string;
  village?: string;
  county?: string;
  suburb?: string;
  postcode?: string;
  state_code?: string;
  county_code?: string;
  iso3166_2: string;
  iso3166_2_sublevel?: string;
  lon: number;
  lat: number;
  name?: string;
  ref?: string;
  result_type: string;
  formatted: string;
  address_line1: string;
  address_line2: string;
  category: string;
  timezone: Timezone;
  plus_code: string;
  plus_code_short?: string;
  rank: Rank;
  place_id: string;
}