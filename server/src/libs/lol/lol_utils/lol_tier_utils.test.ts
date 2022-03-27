import {Map} from 'immutable';
import {tierCompare} from "@libs/lol/lol_utils/lol_tier_utils";

describe('Test tierCompare', () => {
  const beforeTierInfo = Map({
                               "leagueId": "da1407fb-6c5c-40fc-aad7-b2c292749a1b",
                               "queueType": "RANKED_SOLO_5x5",
                               "tier": "SILVER",
                               "rank": "IV",
                               "summonerId": "hdkjashdjahkjdkjashd",
                               "summonerName": "test",
                               "leaguePoints": 26,
                               "wins": 22,
                               "losses": 24,
                               "veteran": false,
                               "inactive": false,
                               "freshBlood": false,
                               "hotStreak": false
                             })

  it('before not exist', () => {
    // Invoke helloFromLambdaHandler()
    const result = tierCompare(undefined, beforeTierInfo);
    const expectedResult = true;
    expect(result).toEqual(expectedResult);
  });
  it('tier same', () => {
    // Invoke helloFromLambdaHandler()
    const result = tierCompare(beforeTierInfo, beforeTierInfo);
    const expectedResult = false;
    expect(result).toEqual(expectedResult);
  });
  it('tier down', () => {
    // Invoke helloFromLambdaHandler()
    const result = tierCompare(beforeTierInfo, beforeTierInfo);
    const expectedResult = false;
    expect(result).toEqual(expectedResult);
  });
  it('league points up', () => {
    // Invoke helloFromLambdaHandler()
    const result = tierCompare(beforeTierInfo, beforeTierInfo.set("leaguePoints", beforeTierInfo.get('leaguePoints') as number + 1));
    const expectedResult = true;
    expect(result).toEqual(expectedResult);
  });
  it('rank up', () => {
    // Invoke helloFromLambdaHandler()
    const result = tierCompare(beforeTierInfo, beforeTierInfo.set("rank", "III"));
    const expectedResult = true;
    expect(result).toEqual(expectedResult);
  });
  it('tier up', () => {
    // Invoke helloFromLambdaHandler()
    const result = tierCompare(beforeTierInfo, beforeTierInfo.set("tier", "GOLD"));
    const expectedResult = true;
    expect(result).toEqual(expectedResult);
  });
});

describe('Test tierToPoint', () => {
  // it('tierToPoint', () => {
  //   // Invoke helloFromLambdaHandler()
  //   const result = tierCompare(beforeTierInfo, beforeTierInfo.set("tier", "GOLD"));
  //   const expectedResult = true;
  //   expect(result).toEqual(expectedResult);
  // });
});
