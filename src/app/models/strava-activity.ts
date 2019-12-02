import { StravaMap } from './strava-map';
import { StravaEffort } from './strava-effort';

export class StravaActivity {
  achievement_count: number;
  athlete: { id: number, resource_state: number };
  athlete_count: number;
  available_zones: [];
  average_cadence: number;
  average_heartrate: number;
  average_speed: number;
  average_watts: number;
  best_efforts: StravaEffort[];
  calories: number;
  comment_count: number;
  commute: boolean;
  description: string;
  device_name: string;
  device_watts: number;
  display_hide_heartrate_option: boolean;
  distance: number;
  elapsed_time: number;
  elev_high: number;
  elev_low: number;
  embed_token: string;
  end_latlng: number[];
  external_id: string;
  flagged: boolean;
  from_accepted_tag: boolean;
  gear_id: number;
  has_heartrate: boolean;
  has_kudoed: boolean;
  heartrate_opt_out: boolean;
  id: number;
  kilojoules: number;
  kudos_count: number;
  laps: [];
  location_city: string;
  location_country: string;
  location_state: string;
  manual: boolean;
  map: StravaMap;
  max_heartrate: number;
  max_speed: number;
  max_watts: number;
  moving_time: number;
  name: string;
  perceived_exertion: number;
  photo_count: number;
  photos: { primary: any, count: number };
  pr_count: number;
  prefer_perceived_exertion: boolean;
  private: boolean;
  resource_state: number;
  segment_efforts: [];
  similar_activities: {
    effort_count: number,
    average_speed: number,
    min_average_speed: number,
    mid_average_speed: number,
    max_average_speed: number
  };
  splits_metric: [];
  splits_standard: [];
  start_date: string;
  start_date_local: string;
  start_latitude: number;
  start_latlng: number[];
  start_longitude: number;
  timezone: string;
  total_elevation_gain: number;
  total_photo_count: number;
  trainer: boolean;
  type: string;
  upload_id: number;
  upload_id_str: string;
  utc_offset: number;
  visibility: string;
  weighted_average_watts: string;
  workout_type: number;
}
