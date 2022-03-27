import {PubgAPIPlatform} from "@libs/pubg/pubg_api_types";

export function getAllPlatforms(): PubgAPIPlatform[] {
  return ['steam', 'kakao', 'psn', 'stadia', 'xbox'];
}