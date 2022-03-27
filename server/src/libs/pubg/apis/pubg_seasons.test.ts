import {FnFailResult, FnOkResult} from "@libs/flow/fn_result";
import * as requester from "@libs/pubg/apis/common/pubg_requester";
import {
  CommonError,
  CommonSuccess
} from "@libs/pubg/apis/common/pubg_requester";
import {
  PubgAPIPlayer,
  PubgAPIRankStat,
  PubgAPISeasonDetail,
  PubgAPIErrorForNotFound,
  PubgAPISeasonStats
} from "@libs/pubg/pubg_api_types";
import {
  getRankSeasonInfo,
  getSeasonInfo,
  getSeasons
} from "@libs/pubg/apis/pubg_seasons";

jest.mock("@libs/pubg/apis/common/pubg_requester")


describe('Pubg getSeasons Test', () => {
  const sucData: Array<PubgAPISeasonDetail> = [
    {
      "type": "season",
      "id": "division.bro.official.2017-beta",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.2017-pre1",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.2017-pre2",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.2017-pre3",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.2017-pre4",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.2017-pre5",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.2017-pre6",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.2017-pre7",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.2017-pre8",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.2017-pre9",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.2018-01",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.2018-02",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.2018-03",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.2018-04",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.2018-05",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.2018-06",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.2018-07",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.2018-08",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.2018-09",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.pc-2018-01",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.pc-2018-02",
      "attributes": {
        "isOffseason": false,
        "isCurrentSeason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.pc-2018-03",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.pc-2018-04",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.pc-2018-05",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.pc-2018-06",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.pc-2018-07",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.pc-2018-08",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.pc-2018-09",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.pc-2018-10",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.pc-2018-11",
      "attributes": {
        "isOffseason": false,
        "isCurrentSeason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.pc-2018-12",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.pc-2018-13",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.pc-2018-14",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.pc-2018-15",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.pc-2018-16",
      "attributes": {
        "isOffseason": false,
        "isCurrentSeason": true
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.console-03",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.console-04",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.console-05",
      "attributes": {
        "isOffseason": false,
        "isCurrentSeason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.console-06",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.console-07",
      "attributes": {
        "isOffseason": false,
        "isCurrentSeason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.console-08",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.console-09",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.console-10",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.console-11",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.console-12",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.console-13",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.console-14",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.console-15",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    },
    {
      "type": "season",
      "id": "division.bro.official.console-16",
      "attributes": {
        "isCurrentSeason": false,
        "isOffseason": false
      }
    }
  ];
  const requireSucMock: CommonSuccess<Array<PubgAPISeasonDetail>> = {
    "data": sucData,
    "links": {
      "self": "https://api.pubg.com/shards/kakao/seasons"
    },
    "meta": {}
  }
  const requireFailMock: CommonError<PubgAPIErrorForNotFound> = {
    "errors": [
      {
        "title": "Not Found",
      }
    ]
  }
  it('success', async () => {
    const mockMyFunction = requester.get as jest.Mock;
    mockMyFunction.mockReturnValueOnce(new FnOkResult(requireSucMock));
    const result = await getSeasons('kakao');

    expect((result as FnOkResult<PubgAPIPlayer>).data).toEqual(sucData);
  });
  it('fail', async () => {
    const mockMyFunction = requester.get as jest.Mock;
    mockMyFunction.mockReturnValueOnce(new FnFailResult(requireFailMock));
    const result = await getSeasons('kakao');

    const expectedResult = 'Not Found';
    expect((result as FnFailResult<PubgAPIErrorForNotFound>).data.title).toEqual(expectedResult);
  });
});

describe('Pubg Season Info Test', () => {
  const season = 'division.bro.official.pc-2018-15';
  const sucData: PubgAPISeasonStats = {
    "type": "playerSeason",
    "attributes": {
      "gameModeStats": {
        "duo": {
          "assists": 0,
          "boosts": 1,
          "dBNOs": 1,
          "dailyKills": 0,
          "dailyWins": 0,
          "damageDealt": 22.68,
          "days": 1,
          "headshotKills": 0,
          "heals": 0,
          "killPoints": 0,
          "kills": 0,
          "longestKill": 0,
          "longestTimeSurvived": 745,
          "losses": 1,
          "maxKillStreaks": 0,
          "mostSurvivalTime": 745,
          "rankPoints": 0,
          "rankPointsTitle": "",
          "revives": 0,
          "rideDistance": 922.7416,
          "roadKills": 0,
          "roundMostKills": 0,
          "roundsPlayed": 1,
          "suicides": 0,
          "swimDistance": 0,
          "teamKills": 1,
          "timeSurvived": 745,
          "top10s": 0,
          "vehicleDestroys": 0,
          "walkDistance": 766.96704,
          "weaponsAcquired": 7,
          "weeklyKills": 0,
          "weeklyWins": 0,
          "winPoints": 0,
          "wins": 0
        },
        "duo-fpp": {
          "assists": 0,
          "boosts": 0,
          "dBNOs": 0,
          "dailyKills": 0,
          "dailyWins": 0,
          "damageDealt": 0,
          "days": 0,
          "headshotKills": 0,
          "heals": 0,
          "killPoints": 0,
          "kills": 0,
          "longestKill": 0,
          "longestTimeSurvived": 0,
          "losses": 0,
          "maxKillStreaks": 0,
          "mostSurvivalTime": 0,
          "rankPoints": 0,
          "rankPointsTitle": "",
          "revives": 0,
          "rideDistance": 0,
          "roadKills": 0,
          "roundMostKills": 0,
          "roundsPlayed": 0,
          "suicides": 0,
          "swimDistance": 0,
          "teamKills": 0,
          "timeSurvived": 0,
          "top10s": 0,
          "vehicleDestroys": 0,
          "walkDistance": 0,
          "weaponsAcquired": 0,
          "weeklyKills": 0,
          "weeklyWins": 0,
          "winPoints": 0,
          "wins": 0
        },
        "solo": {
          "assists": 0,
          "boosts": 0,
          "dBNOs": 0,
          "dailyKills": 0,
          "dailyWins": 0,
          "damageDealt": 0,
          "days": 0,
          "headshotKills": 0,
          "heals": 0,
          "killPoints": 0,
          "kills": 0,
          "longestKill": 0,
          "longestTimeSurvived": 0,
          "losses": 0,
          "maxKillStreaks": 0,
          "mostSurvivalTime": 0,
          "rankPoints": 0,
          "rankPointsTitle": "",
          "revives": 0,
          "rideDistance": 0,
          "roadKills": 0,
          "roundMostKills": 0,
          "roundsPlayed": 0,
          "suicides": 0,
          "swimDistance": 0,
          "teamKills": 0,
          "timeSurvived": 0,
          "top10s": 0,
          "vehicleDestroys": 0,
          "walkDistance": 0,
          "weaponsAcquired": 0,
          "weeklyKills": 0,
          "weeklyWins": 0,
          "winPoints": 0,
          "wins": 0
        },
        "solo-fpp": {
          "assists": 0,
          "boosts": 0,
          "dBNOs": 0,
          "dailyKills": 0,
          "dailyWins": 0,
          "damageDealt": 0,
          "days": 0,
          "headshotKills": 0,
          "heals": 0,
          "killPoints": 0,
          "kills": 0,
          "longestKill": 0,
          "longestTimeSurvived": 0,
          "losses": 0,
          "maxKillStreaks": 0,
          "mostSurvivalTime": 0,
          "rankPoints": 0,
          "rankPointsTitle": "",
          "revives": 0,
          "rideDistance": 0,
          "roadKills": 0,
          "roundMostKills": 0,
          "roundsPlayed": 0,
          "suicides": 0,
          "swimDistance": 0,
          "teamKills": 0,
          "timeSurvived": 0,
          "top10s": 0,
          "vehicleDestroys": 0,
          "walkDistance": 0,
          "weaponsAcquired": 0,
          "weeklyKills": 0,
          "weeklyWins": 0,
          "winPoints": 0,
          "wins": 0
        },
        "squad": {
          "assists": 0,
          "boosts": 0,
          "dBNOs": 1,
          "dailyKills": 2,
          "dailyWins": 0,
          "damageDealt": 254.10458,
          "days": 1,
          "headshotKills": 0,
          "heals": 1,
          "killPoints": 0,
          "kills": 2,
          "longestKill": 6.425433,
          "longestTimeSurvived": 185,
          "losses": 1,
          "maxKillStreaks": 2,
          "mostSurvivalTime": 185,
          "rankPoints": 0,
          "rankPointsTitle": "",
          "revives": 0,
          "rideDistance": 0,
          "roadKills": 0,
          "roundMostKills": 2,
          "roundsPlayed": 1,
          "suicides": 0,
          "swimDistance": 0,
          "teamKills": 0,
          "timeSurvived": 185,
          "top10s": 0,
          "vehicleDestroys": 0,
          "walkDistance": 118.03107,
          "weaponsAcquired": 4,
          "weeklyKills": 2,
          "weeklyWins": 0,
          "winPoints": 0,
          "wins": 0
        },
        "squad-fpp": {
          "assists": 0,
          "boosts": 0,
          "dBNOs": 0,
          "dailyKills": 0,
          "dailyWins": 0,
          "damageDealt": 0,
          "days": 0,
          "headshotKills": 0,
          "heals": 0,
          "killPoints": 0,
          "kills": 0,
          "longestKill": 0,
          "longestTimeSurvived": 0,
          "losses": 0,
          "maxKillStreaks": 0,
          "mostSurvivalTime": 0,
          "rankPoints": 0,
          "rankPointsTitle": "",
          "revives": 0,
          "rideDistance": 0,
          "roadKills": 0,
          "roundMostKills": 0,
          "roundsPlayed": 0,
          "suicides": 0,
          "swimDistance": 0,
          "teamKills": 0,
          "timeSurvived": 0,
          "top10s": 0,
          "vehicleDestroys": 0,
          "walkDistance": 0,
          "weaponsAcquired": 0,
          "weeklyKills": 0,
          "weeklyWins": 0,
          "winPoints": 0,
          "wins": 0
        }
      },
      "bestRankPoint": 0
    },
    "relationships": {
      "matchesDuoFPP": {
        "data": []
      },
      "matchesSquad": {
        "data": []
      },
      "matchesSquadFPP": {
        "data": []
      },
      "season": {
        "data": {
          "type": "season",
          "id": "division.bro.official.pc-2018-15"
        }
      },
      "player": {
        "data": {
          "type": "player",
          "id": "account.test1234"
        }
      },
      "matchesSolo": {
        "data": []
      },
      "matchesSoloFPP": {
        "data": []
      },
      "matchesDuo": {
        "data": []
      }
    }
  };
  const requireSucMock: CommonSuccess<PubgAPISeasonStats> = {
    "data": sucData,
    "links": {
      "self": "https://api.pubg.com/shards/kakao/players/account.3d028c8349404afcb594e5abe6136476/seasons/division.bro.official.pc-2018-15/ranked"
    },
    "meta": {}
  }
  const requireFailMock: CommonError<PubgAPIErrorForNotFound> = {
    "errors": [
      {
        "title": "Not Found",
      }
    ]
  }
  it('success', async () => {
    const mockMyFunction = requester.get as jest.Mock;
    mockMyFunction.mockReturnValueOnce(new FnOkResult(requireSucMock));
    const result = await getSeasonInfo('kakao', 'my_user1234', season);

    expect((result as FnOkResult<PubgAPIPlayer>).data).toEqual(sucData);
  });
  it('fail', async () => {
    const mockMyFunction = requester.get as jest.Mock;
    mockMyFunction.mockReturnValueOnce(new FnFailResult(requireFailMock));
    const result = await getSeasonInfo('kakao', 'my_user1234', season);

    const expectedResult = 'Not Found';
    expect((result as FnFailResult<PubgAPIErrorForNotFound>).data.title).toEqual(expectedResult);
  });
});

describe('Pubg Rank Info Test', () => {
  const season = 'division.bro.official.pc-2018-15';
  const sucData: PubgAPIRankStat = {
    "type": "rankedplayerstats",
    "attributes": {
      "rankedGameModeStats": {
        "squad": {
          "currentTier": {
            "tier": "Platinum",
            "subTier": "5"
          },
          "currentRankPoint": 2530,
          "bestTier": {
            "tier": "Platinum",
            "subTier": "4"
          },
          "bestRankPoint": 2643,
          "roundsPlayed": 119,
          "avgRank": 7.8739495,
          "avgSurvivalTime": 0,
          "top10Ratio": 0.7647059,
          "winRatio": 0.025210084,
          "assists": 37,
          "wins": 3,
          "kda": 1.0438596,
          "kdr": 0,
          "kills": 82,
          "deaths": 114,
          "roundMostKills": 0,
          "longestKill": 0,
          "headshotKills": 0,
          "headshotKillRatio": 0,
          "damageDealt": 19592.324,
          "dBNOs": 81,
          "reviveRatio": 0,
          "revives": 0,
          "heals": 0,
          "boosts": 0,
          "weaponsAcquired": 0,
          "teamKills": 0,
          "playTime": 0,
          "killStreak": 0
        }
      }
    },
    "relationships": {
      "player": {
        "data": {
          "type": "player",
          "id": "account.test1234"
        }
      },
      "season": {
        "data": {
          "type": "season",
          "id": "division.bro.official.pc-2018-15"
        }
      }
    }
  };
  const requireSucMock: CommonSuccess<PubgAPIRankStat> = {
    "data": sucData,
    "links": {
      "self": "https://api.pubg.com/shards/kakao/players/account.3d028c8349404afcb594e5abe6136476/seasons/division.bro.official.pc-2018-15/ranked"
    },
    "meta": {}
  }
  const requireFailMock: CommonError<PubgAPIErrorForNotFound> = {
    "errors": [
      {
        "title": "Not Found",
      }
    ]
  }
  it('success', async () => {
    const mockMyFunction = requester.get as jest.Mock;
    mockMyFunction.mockReturnValueOnce(new FnOkResult(requireSucMock));
    const result = await getRankSeasonInfo('kakao', 'my_user1234', season);

    expect((result as FnOkResult<PubgAPIPlayer>).data).toEqual(sucData);
  });
  it('fail', async () => {
    const mockMyFunction = requester.get as jest.Mock;
    mockMyFunction.mockReturnValueOnce(new FnFailResult(requireFailMock));
    const result = await getRankSeasonInfo('kakao', 'my_user1234', season);

    const expectedResult = 'Not Found';
    expect((result as FnFailResult<PubgAPIErrorForNotFound>).data.title).toEqual(expectedResult);
  });
});

