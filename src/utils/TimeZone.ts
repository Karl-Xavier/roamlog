export interface Timezone {
  name: string;
  name_alt?: string;
  offset_STD: string;
  offset_STD_seconds: number;
  offset_DST: string;
  offset_DST_seconds: number;
  abbreviation_STD: string;
  abbreviation_DST: string;
}