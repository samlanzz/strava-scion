import { StravaActivity } from './strava-activity';
import { StravaAthlete } from './strava-athlete';

export class StravaEffort {
  achievements: [];
  activity: StravaActivity;
  athlete: StravaAthlete;
  distance: number;
  elapsed_time: number;
  end_index: number;
  id: number;
  moving_time: number;
  name: string;
  pr_rank: number;
  resource_state: number;
  start_date: string;
  start_date_local: string;
  start_index: number;
}
