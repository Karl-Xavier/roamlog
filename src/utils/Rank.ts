export interface Rank {
  importance: number;
  confidence: number;
  confidence_city_level?: number;
  match_type: string;
}