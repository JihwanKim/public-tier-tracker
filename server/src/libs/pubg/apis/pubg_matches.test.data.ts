import {
  PubgAPIMatchIncluded,
  PubgAPIMatchInfo
} from "@libs/pubg/pubg_api_types";

const TestPubgAPIMatchesDetail: PubgAPIMatchInfo = {
  "type": "match",
  "id": "cd6f982a-36de-49e5-bca8-88d4da69f174",
  "attributes": {
    "duration": 1901,
    "stats": null,
    "titleId": "bluehole-pubg",
    "isCustomMatch": false,
    "matchType": "competitive",
    "seasonState": "progress",
    "createdAt": "2022-02-26T12:15:05Z",
    "gameMode": "squad",
    "shardId": "kakao",
    "tags": null,
    "mapName": "Baltic_Main"
  },
  "relationships": {
    "rosters": {
      "data": [
        {
          "type": "roster",
          "id": "4cf48922-6a58-41a6-b446-52aa5d35bfcc"
        },
        {
          "type": "roster",
          "id": "265ce149-4943-4b20-a568-df4fcc2cde82"
        },
        {
          "type": "roster",
          "id": "d517e687-bb61-423b-ac7d-7ad9c04e8064"
        },
        {
          "type": "roster",
          "id": "b1072b26-660b-4405-85a4-595a0dc2bc2d"
        },
        {
          "type": "roster",
          "id": "7d137ad3-f229-456c-b8b9-b5efc9ee52b8"
        },
        {
          "type": "roster",
          "id": "635c0231-a823-49b5-acc2-f2290e568a75"
        },
        {
          "type": "roster",
          "id": "b27b3625-16c2-4a35-a27e-ea31f6b8f740"
        },
        {
          "type": "roster",
          "id": "2987dc68-2a6a-4205-8786-081ab7a8789f"
        },
        {
          "type": "roster",
          "id": "e0310a80-ed8b-4066-9249-cf16f3653442"
        },
        {
          "type": "roster",
          "id": "e39b0b25-8f49-48e1-9ec4-877829f3eba7"
        },
        {
          "type": "roster",
          "id": "2162a15a-2769-4ebd-819b-d56b15663cf5"
        },
        {
          "type": "roster",
          "id": "563dedc4-b183-4dfa-ba24-d36a75820e03"
        },
        {
          "type": "roster",
          "id": "7643839b-7795-4444-bb92-cf730345fc23"
        },
        {
          "type": "roster",
          "id": "e15fef18-e191-4d30-bd7e-86ee70836bbc"
        },
        {
          "type": "roster",
          "id": "6343d3b8-665c-484e-ae17-1c869cb03107"
        },
        {
          "type": "roster",
          "id": "d6a8d4fd-9c29-4208-9951-2e9eb79df581"
        }
      ]
    },
    "assets": {
      "data": [
        {
          "type": "asset",
          "id": "6ad40b22-9702-11ec-baa7-32a91f48da22"
        }
      ]
    }
  },
  "links": {
    "self": "https://api.pubg.com/shards/kakao/matches/cd6f982a-36de-49e5-bca8-88d4da69f174",
    "schema": ""
  }
};
const TestPubgMatchesIncluded: PubgAPIMatchIncluded = [
  {
    "type": "participant",
    "id": "75d09d44-0c36-498a-bc5b-812adc37e529",
    "attributes": {
      "stats": {
        "DBNOs": 2,
        "assists": 0,
        "boosts": 7,
        "damageDealt": 407.0483,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 1,
        "killPlace": 14,
        "killStreaks": 1,
        "kills": 2,
        "longestKill": 114.76889,
        "name": "Limmadam",
        "playerId": "account.b2a1493893cf4b4ab9c127d387ca4bca",
        "revives": 0,
        "rideDistance": 585.4309,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1318,
        "vehicleDestroys": 0,
        "walkDistance": 1731.3011,
        "weaponsAcquired": 7,
        "winPlace": 9
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "30d6fe50-6aa3-4969-be16-cc7f148f96df",
    "attributes": {
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 6,
        "damageDealt": 0,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 2,
        "killPlace": 55,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "3iDiotS_HOON",
        "playerId": "account.a0f0de2053c54623938b24d8ea51ffed",
        "revives": 0,
        "rideDistance": 2172.1917,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 896,
        "vehicleDestroys": 0,
        "walkDistance": 1217.853,
        "weaponsAcquired": 5,
        "winPlace": 14
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "roster",
    "id": "2162a15a-2769-4ebd-819b-d56b15663cf5",
    "attributes": {
      "stats": {
        "rank": 8,
        "teamId": 11
      },
      "won": "false",
      "shardId": "kakao"
    },
    "relationships": {
      "team": {
        "data": null
      },
      "participants": {
        "data": [
          {
            "type": "participant",
            "id": "b801904b-e627-4cf3-b68d-995631d09da7"
          },
          {
            "type": "participant",
            "id": "4689ce2b-af5d-4623-98bb-6d800e38e597"
          },
          {
            "type": "participant",
            "id": "a181e612-6d61-4baf-b2bb-d930bad4df00"
          }
        ]
      }
    }
  },
  {
    "type": "roster",
    "id": "e15fef18-e191-4d30-bd7e-86ee70836bbc",
    "attributes": {
      "won": "false",
      "shardId": "kakao",
      "stats": {
        "rank": 11,
        "teamId": 4
      }
    },
    "relationships": {
      "team": {
        "data": null
      },
      "participants": {
        "data": [
          {
            "type": "participant",
            "id": "c1cf72bf-7fef-4563-99ec-962c53f17226"
          },
          {
            "type": "participant",
            "id": "f86998b4-78d9-42ff-839d-f784244bf8bc"
          },
          {
            "type": "participant",
            "id": "041d0a00-258a-47bf-b276-2a1b69d0a50f"
          },
          {
            "type": "participant",
            "id": "ca5e929f-df65-4c5e-9003-364ab4a3bb38"
          }
        ]
      }
    }
  },
  {
    "type": "participant",
    "id": "89ac0c31-1365-4669-85b8-f4ff5d3d90d1",
    "attributes": {
      "shardId": "kakao",
      "stats": {
        "DBNOs": 2,
        "assists": 0,
        "boosts": 0,
        "damageDealt": 132.66328,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 0,
        "killPlace": 15,
        "killStreaks": 1,
        "kills": 2,
        "longestKill": 4.228054,
        "name": "Z100_Seojin_S",
        "playerId": "account.f77ac91973f84f0b8a6d5dbd6684c45c",
        "revives": 0,
        "rideDistance": 0,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 251,
        "vehicleDestroys": 0,
        "walkDistance": 26.095627,
        "weaponsAcquired": 2,
        "winPlace": 13
      },
      "actor": ""
    }
  },
  {
    "type": "participant",
    "id": "55c87f74-ce1e-4764-86e7-293e84400091",
    "attributes": {
      "shardId": "kakao",
      "stats": {
        "DBNOs": 1,
        "assists": 1,
        "boosts": 7,
        "damageDealt": 313.4188,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 10,
        "killPlace": 44,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "01_avi",
        "playerId": "account.0d6bf6f15b7a4a9faf9a879541dc07e8",
        "revives": 0,
        "rideDistance": 0,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1318,
        "vehicleDestroys": 0,
        "walkDistance": 2438.7793,
        "weaponsAcquired": 5,
        "winPlace": 9
      },
      "actor": ""
    }
  },
  {
    "type": "participant",
    "id": "041d0a00-258a-47bf-b276-2a1b69d0a50f",
    "attributes": {
      "stats": {
        "DBNOs": 2,
        "assists": 0,
        "boosts": 4,
        "damageDealt": 330.1386,
        "deathType": "byplayer",
        "headshotKills": 1,
        "heals": 8,
        "killPlace": 25,
        "killStreaks": 1,
        "kills": 1,
        "longestKill": 68.321754,
        "name": "miniman97",
        "playerId": "account.e467fdb6d6954c0396e9d05e4dc8417d",
        "revives": 0,
        "rideDistance": 1901.6769,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1102,
        "vehicleDestroys": 0,
        "walkDistance": 1706.6245,
        "weaponsAcquired": 5,
        "winPlace": 11
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "roster",
    "id": "e0310a80-ed8b-4066-9249-cf16f3653442",
    "attributes": {
      "stats": {
        "rank": 5,
        "teamId": 9
      },
      "won": "false",
      "shardId": "kakao"
    },
    "relationships": {
      "team": {
        "data": null
      },
      "participants": {
        "data": [
          {
            "type": "participant",
            "id": "734bc6c0-3dbd-4ceb-940c-d905e4fad284"
          },
          {
            "type": "participant",
            "id": "f0755014-1840-4a4e-8ea8-29e094d49d6f"
          },
          {
            "type": "participant",
            "id": "cab51559-afa2-4773-ba7b-9c8b20a04527"
          },
          {
            "type": "participant",
            "id": "a6803c8c-bee7-4b11-afbf-d25eb75042b8"
          }
        ]
      }
    }
  },
  {
    "type": "participant",
    "id": "620db7ca-c2c4-41ad-9dba-277a7b380981",
    "attributes": {
      "shardId": "kakao",
      "stats": {
        "DBNOs": 3,
        "assists": 1,
        "boosts": 12,
        "damageDealt": 708.1986,
        "deathType": "alive",
        "headshotKills": 1,
        "heals": 5,
        "killPlace": 4,
        "killStreaks": 1,
        "kills": 4,
        "longestKill": 117.52538,
        "name": "qkrwhddus",
        "playerId": "account.2e163b5fb2eb43158d675424278495d3",
        "revives": 0,
        "rideDistance": 663.60736,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1901,
        "vehicleDestroys": 1,
        "walkDistance": 2492.8162,
        "weaponsAcquired": 6,
        "winPlace": 1
      },
      "actor": ""
    }
  },
  {
    "type": "participant",
    "id": "4370612c-a7b1-4c0d-bfb6-b9f1475bd989",
    "attributes": {
      "actor": "",
      "shardId": "kakao",
      "stats": {
        "DBNOs": 2,
        "assists": 1,
        "boosts": 10,
        "damageDealt": 533.2733,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 6,
        "killPlace": 9,
        "killStreaks": 1,
        "kills": 2,
        "longestKill": 187.393,
        "name": "Gupodong-seal",
        "playerId": "account.477a170f9a1d4f34acfca7256a84eee7",
        "revives": 0,
        "rideDistance": 8336.014,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1893,
        "vehicleDestroys": 0,
        "walkDistance": 1262.2336,
        "weaponsAcquired": 5,
        "winPlace": 2
      }
    }
  },
  {
    "type": "participant",
    "id": "aa360677-7fd8-4ded-8fa8-0b60692d3c92",
    "attributes": {
      "stats": {
        "DBNOs": 2,
        "assists": 1,
        "boosts": 10,
        "damageDealt": 598.61676,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 5,
        "killPlace": 21,
        "killStreaks": 1,
        "kills": 1,
        "longestKill": 105.02124,
        "name": "blind_dogs",
        "playerId": "account.ccb03e7081d049df9f3a02bc0522a879",
        "revives": 0,
        "rideDistance": 9045.383,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1783,
        "vehicleDestroys": 0,
        "walkDistance": 1418.7421,
        "weaponsAcquired": 5,
        "winPlace": 2
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "19fe025f-1ece-4f87-9cc0-4daaac1eb646",
    "attributes": {
      "actor": "",
      "shardId": "kakao",
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 5,
        "damageDealt": 91.26413,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 2,
        "killPlace": 41,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "13831803",
        "playerId": "account.d8763ab618554ad6b6169cc31fbb1e6b",
        "revives": 2,
        "rideDistance": 2285.5085,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1457,
        "vehicleDestroys": 0,
        "walkDistance": 1143.6644,
        "weaponsAcquired": 4,
        "winPlace": 7
      }
    }
  },
  {
    "type": "participant",
    "id": "b3eea71b-9c13-4af3-b871-d40b4f387c80",
    "attributes": {
      "stats": {
        "DBNOs": 0,
        "assists": 1,
        "boosts": 3,
        "damageDealt": 105.86439,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 1,
        "killPlace": 37,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "DONDON__",
        "playerId": "account.38273cb7d45b4350acc711a648f2d8e6",
        "revives": 0,
        "rideDistance": 4350.621,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1159,
        "vehicleDestroys": 0,
        "walkDistance": 1145.812,
        "weaponsAcquired": 7,
        "winPlace": 6
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "3fcac166-057a-4386-bef3-98b7c70433dc",
    "attributes": {
      "stats": {
        "DBNOs": 1,
        "assists": 0,
        "boosts": 3,
        "damageDealt": 79.00001,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 0,
        "killPlace": 53,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "Quack-3-",
        "playerId": "account.80db69f9b77b4ab8a8339d5d5e635c2d",
        "revives": 0,
        "rideDistance": 3300.1812,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 967,
        "vehicleDestroys": 0,
        "walkDistance": 987.4524,
        "weaponsAcquired": 5,
        "winPlace": 14
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "b4db0670-81fc-46dc-9e9e-331af962e6e2",
    "attributes": {
      "shardId": "kakao",
      "stats": {
        "DBNOs": 1,
        "assists": 1,
        "boosts": 7,
        "damageDealt": 314.6906,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 6,
        "killPlace": 29,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "ssongssong22",
        "playerId": "account.5c770fe1750f49c587f973e6e1a71977",
        "revives": 0,
        "rideDistance": 1545.5312,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1474,
        "vehicleDestroys": 0,
        "walkDistance": 1395.5703,
        "weaponsAcquired": 5,
        "winPlace": 3
      },
      "actor": ""
    }
  },
  {
    "type": "participant",
    "id": "f12ce343-b214-434b-b5c7-0b5e3128955a",
    "attributes": {
      "stats": {
        "DBNOs": 2,
        "assists": 1,
        "boosts": 5,
        "damageDealt": 197.53769,
        "deathType": "byplayer",
        "headshotKills": 1,
        "heals": 3,
        "killPlace": 16,
        "killStreaks": 1,
        "kills": 2,
        "longestKill": 35.243576,
        "name": "M8453",
        "playerId": "account.437df697828c49cc8f73da4bbcb0790e",
        "revives": 0,
        "rideDistance": 0,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 716,
        "vehicleDestroys": 0,
        "walkDistance": 1235.7284,
        "weaponsAcquired": 2,
        "winPlace": 15
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "1c131d28-afb2-4bf1-b9aa-3c0defb49eb4",
    "attributes": {
      "actor": "",
      "shardId": "kakao",
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 0,
        "damageDealt": 0,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 0,
        "killPlace": 59,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "AXIS_YJ",
        "playerId": "account.39c32f440ce642d6aebdee48519e36e5",
        "revives": 0,
        "rideDistance": 0,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 179,
        "vehicleDestroys": 0,
        "walkDistance": 94.99795,
        "weaponsAcquired": 2,
        "winPlace": 16
      }
    }
  },
  {
    "type": "roster",
    "id": "b1072b26-660b-4405-85a4-595a0dc2bc2d",
    "attributes": {
      "stats": {
        "rank": 16,
        "teamId": 8
      },
      "won": "false",
      "shardId": "kakao"
    },
    "relationships": {
      "participants": {
        "data": [
          {
            "type": "participant",
            "id": "1c131d28-afb2-4bf1-b9aa-3c0defb49eb4"
          },
          {
            "type": "participant",
            "id": "ec69e33a-5055-4eeb-91d1-4b47b619eba4"
          },
          {
            "type": "participant",
            "id": "98921271-a72d-4d98-b80d-d74fd4ce2830"
          },
          {
            "type": "participant",
            "id": "f08cba61-bd82-4bdd-962c-1af9d1cffeb5"
          }
        ]
      },
      "team": {
        "data": null
      }
    }
  },
  {
    "type": "roster",
    "id": "e39b0b25-8f49-48e1-9ec4-877829f3eba7",
    "attributes": {
      "stats": {
        "rank": 9,
        "teamId": 7
      },
      "won": "false",
      "shardId": "kakao"
    },
    "relationships": {
      "team": {
        "data": null
      },
      "participants": {
        "data": [
          {
            "type": "participant",
            "id": "920db41c-6a8d-4f26-9cf7-5c4bbe991a05"
          },
          {
            "type": "participant",
            "id": "55c87f74-ce1e-4764-86e7-293e84400091"
          },
          {
            "type": "participant",
            "id": "75d09d44-0c36-498a-bc5b-812adc37e529"
          },
          {
            "type": "participant",
            "id": "dd0c64b6-eabd-40bc-b277-0edaadeb1564"
          }
        ]
      }
    }
  },
  {
    "type": "participant",
    "id": "d6c66ef6-528c-4fc7-aaf9-21db87be757a",
    "attributes": {
      "shardId": "kakao",
      "stats": {
        "DBNOs": 1,
        "assists": 1,
        "boosts": 2,
        "damageDealt": 23.04734,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 1,
        "killPlace": 27,
        "killStreaks": 1,
        "kills": 1,
        "longestKill": 6.587548,
        "name": "Bullzay90",
        "playerId": "account.1d7e4157d20b4aada55af98ab67840d9",
        "revives": 1,
        "rideDistance": 0,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 783,
        "vehicleDestroys": 0,
        "walkDistance": 1120.1497,
        "weaponsAcquired": 5,
        "winPlace": 15
      },
      "actor": ""
    }
  },
  {
    "type": "participant",
    "id": "7320018a-9423-436c-8482-d5900d8e51dd",
    "attributes": {
      "stats": {
        "DBNOs": 2,
        "assists": 1,
        "boosts": 14,
        "damageDealt": 450.8932,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 4,
        "killPlace": 19,
        "killStreaks": 1,
        "kills": 1,
        "longestKill": 75.850266,
        "name": "obbayasaIidora",
        "playerId": "account.179f5bacb72d4303a52b6e86b7067359",
        "revives": 1,
        "rideDistance": 8561.971,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1897,
        "vehicleDestroys": 0,
        "walkDistance": 1784.5033,
        "weaponsAcquired": 4,
        "winPlace": 2
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "9e2fa640-8007-48f5-943d-095f1c1e243a",
    "attributes": {
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 0,
        "damageDealt": 112.11673,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 0,
        "killPlace": 61,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "mmmm_-K",
        "playerId": "account.8b4f9ef8873549c4a2e6e9a85332655b",
        "revives": 0,
        "rideDistance": 0,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 173,
        "vehicleDestroys": 0,
        "walkDistance": 40.468414,
        "weaponsAcquired": 3,
        "winPlace": 16
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "roster",
    "id": "4cf48922-6a58-41a6-b446-52aa5d35bfcc",
    "attributes": {
      "stats": {
        "rank": 15,
        "teamId": 13
      },
      "won": "false",
      "shardId": "kakao"
    },
    "relationships": {
      "team": {
        "data": null
      },
      "participants": {
        "data": [
          {
            "type": "participant",
            "id": "d6c66ef6-528c-4fc7-aaf9-21db87be757a"
          },
          {
            "type": "participant",
            "id": "f6b835b6-8671-448b-ab8a-318914f135ad"
          },
          {
            "type": "participant",
            "id": "f12ce343-b214-434b-b5c7-0b5e3128955a"
          },
          {
            "type": "participant",
            "id": "130567f1-d630-41be-b253-c6be7bc26e05"
          }
        ]
      }
    }
  },
  {
    "type": "participant",
    "id": "f08cba61-bd82-4bdd-962c-1af9d1cffeb5",
    "attributes": {
      "actor": "",
      "shardId": "kakao",
      "stats": {
        "DBNOs": 2,
        "assists": 1,
        "boosts": 1,
        "damageDealt": 194.86922,
        "deathType": "byplayer",
        "headshotKills": 1,
        "heals": 0,
        "killPlace": 7,
        "killStreaks": 2,
        "kills": 3,
        "longestKill": 9.985218,
        "name": "AXIS_0xBigh",
        "playerId": "account.34789c69a0e045c3a4f776cac48f1f76",
        "revives": 0,
        "rideDistance": 0,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 255,
        "vehicleDestroys": 0,
        "walkDistance": 102.220116,
        "weaponsAcquired": 2,
        "winPlace": 16
      }
    }
  },
  {
    "type": "participant",
    "id": "734bc6c0-3dbd-4ceb-940c-d905e4fad284",
    "attributes": {
      "actor": "",
      "shardId": "kakao",
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 4,
        "damageDealt": 211.60555,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 0,
        "killPlace": 35,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "AZA_See",
        "playerId": "account.57acbe84495f4febad11d0ef2e01de6d",
        "revives": 0,
        "rideDistance": 3417.1748,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1516,
        "vehicleDestroys": 0,
        "walkDistance": 1211.131,
        "weaponsAcquired": 7,
        "winPlace": 5
      }
    }
  },
  {
    "type": "participant",
    "id": "0f7359ca-3f23-4bd9-8714-135428b65305",
    "attributes": {
      "actor": "",
      "shardId": "kakao",
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 5,
        "damageDealt": 33.93174,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 2,
        "killPlace": 39,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "gkimi",
        "playerId": "account.ca1142427cd348ebae0bbe959689bb94",
        "revives": 0,
        "rideDistance": 4076.9753,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1097,
        "vehicleDestroys": 0,
        "walkDistance": 1446.8102,
        "weaponsAcquired": 4,
        "winPlace": 6
      }
    }
  },
  {
    "type": "roster",
    "id": "635c0231-a823-49b5-acc2-f2290e568a75",
    "attributes": {
      "won": "false",
      "shardId": "kakao",
      "stats": {
        "rank": 4,
        "teamId": 10
      }
    },
    "relationships": {
      "team": {
        "data": null
      },
      "participants": {
        "data": [
          {
            "type": "participant",
            "id": "272b2110-7911-4f23-8a5c-55f75616bffc"
          },
          {
            "type": "participant",
            "id": "983a297f-d679-4b55-9128-65738f8fdf09"
          },
          {
            "type": "participant",
            "id": "5cbefb67-0b93-498f-875f-82e81afdfbe9"
          },
          {
            "type": "participant",
            "id": "46b695cd-2727-42ab-9713-f07f64ecb4b7"
          }
        ]
      }
    }
  },
  {
    "type": "roster",
    "id": "b27b3625-16c2-4a35-a27e-ea31f6b8f740",
    "attributes": {
      "stats": {
        "rank": 1,
        "teamId": 14
      },
      "won": "true",
      "shardId": "kakao"
    },
    "relationships": {
      "team": {
        "data": null
      },
      "participants": {
        "data": [
          {
            "type": "participant",
            "id": "4e0f9059-6bef-49ef-bee6-aaebbed6b328"
          },
          {
            "type": "participant",
            "id": "6c768efd-a612-454e-a6d0-a44886e5bd2e"
          },
          {
            "type": "participant",
            "id": "b47b8853-2efe-4a4a-8420-5aa257b1954d"
          },
          {
            "type": "participant",
            "id": "620db7ca-c2c4-41ad-9dba-277a7b380981"
          }
        ]
      }
    }
  },
  {
    "type": "roster",
    "id": "6343d3b8-665c-484e-ae17-1c869cb03107",
    "attributes": {
      "stats": {
        "rank": 10,
        "teamId": 1
      },
      "won": "false",
      "shardId": "kakao"
    },
    "relationships": {
      "team": {
        "data": null
      },
      "participants": {
        "data": [
          {
            "type": "participant",
            "id": "9e2fa640-8007-48f5-943d-095f1c1e243a"
          },
          {
            "type": "participant",
            "id": "1ea889b5-04f1-44cc-b279-636ec4c7e78e"
          },
          {
            "type": "participant",
            "id": "9b142ba5-7809-4224-a358-c1873a28970b"
          },
          {
            "type": "participant",
            "id": "017612c6-785f-49ac-9445-037c356b70ea"
          }
        ]
      }
    }
  },
  {
    "type": "participant",
    "id": "8f2ad88a-9419-4fa6-8fae-aa38e2f01eee",
    "attributes": {
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 3,
        "damageDealt": 209.2675,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 3,
        "killPlace": 40,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "Wendy_Revel",
        "playerId": "account.090a4f4bd2e04c488a0a8338948adad7",
        "revives": 0,
        "rideDistance": 3558.6616,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1457,
        "vehicleDestroys": 0,
        "walkDistance": 843.158,
        "weaponsAcquired": 3,
        "winPlace": 7
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "983a297f-d679-4b55-9128-65738f8fdf09",
    "attributes": {
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 7,
        "damageDealt": 57.988083,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 1,
        "killPlace": 32,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "FLR_6crush9",
        "playerId": "account.0082e413fbbd4c788df5f9bae654bf46",
        "revives": 1,
        "rideDistance": 4328.45,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1511,
        "vehicleDestroys": 0,
        "walkDistance": 1327.288,
        "weaponsAcquired": 7,
        "winPlace": 4
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "5ef84508-1684-4dcb-a1ab-6980351eb007",
    "attributes": {
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 3,
        "damageDealt": 0,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 0,
        "killPlace": 51,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "jongheee",
        "playerId": "account.a6bdcf1a59c5450db62607e5e5957ff7",
        "revives": 0,
        "rideDistance": 0,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 434,
        "vehicleDestroys": 0,
        "walkDistance": 529.8081,
        "weaponsAcquired": 6,
        "winPlace": 13
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "b801904b-e627-4cf3-b68d-995631d09da7",
    "attributes": {
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 4,
        "damageDealt": 0,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 1,
        "killPlace": 43,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "Hell_justice",
        "playerId": "account.98492230f9204ee48d3f85d014a112e5",
        "revives": 0,
        "rideDistance": 3001.156,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 929,
        "vehicleDestroys": 0,
        "walkDistance": 858.26404,
        "weaponsAcquired": 4,
        "winPlace": 8
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "db92ffe9-1cc6-4214-a095-1ac256b2abb6",
    "attributes": {
      "stats": {
        "DBNOs": 0,
        "assists": 1,
        "boosts": 3,
        "damageDealt": 153.00139,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 1,
        "killPlace": 54,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "GOODBAM-_-",
        "playerId": "account.d177237c65084c678a7e8ffa485d4dfd",
        "revives": 1,
        "rideDistance": 2580.8157,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 967,
        "vehicleDestroys": 0,
        "walkDistance": 1299.1113,
        "weaponsAcquired": 6,
        "winPlace": 14
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "1ea889b5-04f1-44cc-b279-636ec4c7e78e",
    "attributes": {
      "stats": {
        "DBNOs": 1,
        "assists": 0,
        "boosts": 6,
        "damageDealt": 210.37753,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 0,
        "killPlace": 24,
        "killStreaks": 1,
        "kills": 1,
        "longestKill": 25.031397,
        "name": "HardCarry95",
        "playerId": "account.8d3f5d273f5947f09c1b892f5f3cf7bd",
        "revives": 0,
        "rideDistance": 1853.7614,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1109,
        "vehicleDestroys": 0,
        "walkDistance": 2077.936,
        "weaponsAcquired": 6,
        "winPlace": 10
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "c71893e8-728b-43d2-bbe9-bd705a3a3b12",
    "attributes": {
      "stats": {
        "DBNOs": 2,
        "assists": 3,
        "boosts": 7,
        "damageDealt": 926.5548,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 4,
        "killPlace": 10,
        "killStreaks": 1,
        "kills": 2,
        "longestKill": 140.84416,
        "name": "Ak1rarara-",
        "playerId": "account.21bdf14437a84c438b51b009fde399d4",
        "revives": 2,
        "rideDistance": 1528.9827,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1680,
        "vehicleDestroys": 0,
        "walkDistance": 2379.1729,
        "weaponsAcquired": 5,
        "winPlace": 3
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "roster",
    "id": "d6a8d4fd-9c29-4208-9951-2e9eb79df581",
    "attributes": {
      "won": "false",
      "shardId": "kakao",
      "stats": {
        "rank": 3,
        "teamId": 3
      }
    },
    "relationships": {
      "team": {
        "data": null
      },
      "participants": {
        "data": [
          {
            "type": "participant",
            "id": "c71893e8-728b-43d2-bbe9-bd705a3a3b12"
          },
          {
            "type": "participant",
            "id": "64b30ad2-09ce-45de-80af-64329aca0e78"
          },
          {
            "type": "participant",
            "id": "b4db0670-81fc-46dc-9e9e-331af962e6e2"
          },
          {
            "type": "participant",
            "id": "a41e6a94-2f49-456f-a0c7-5481359ac305"
          }
        ]
      }
    }
  },
  {
    "type": "asset",
    "id": "6ad40b22-9702-11ec-baa7-32a91f48da22",
    "attributes": {
      "description": "",
      "createdAt": "2022-02-26T12:48:37Z",
      "URL": "https://telemetry-cdn.pubg.com/bluehole-pubg/kakao/2022/02/26/12/48/6ad40b22-9702-11ec-baa7-32a91f48da22-telemetry.json",
      "name": "telemetry"
    }
  },
  {
    "type": "participant",
    "id": "f6b835b6-8671-448b-ab8a-318914f135ad",
    "attributes": {
      "stats": {
        "DBNOs": 0,
        "assists": 1,
        "boosts": 2,
        "damageDealt": 215.49496,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 3,
        "killPlace": 57,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "hxxx-__-",
        "playerId": "account.17bb85ae22d74a338754ba9b9cfeb799",
        "revives": 0,
        "rideDistance": 0,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 783,
        "vehicleDestroys": 0,
        "walkDistance": 1467.2986,
        "weaponsAcquired": 5,
        "winPlace": 15
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "ec69e33a-5055-4eeb-91d1-4b47b619eba4",
    "attributes": {
      "stats": {
        "DBNOs": 1,
        "assists": 0,
        "boosts": 0,
        "damageDealt": 100,
        "deathType": "byplayer",
        "headshotKills": 1,
        "heals": 0,
        "killPlace": 28,
        "killStreaks": 1,
        "kills": 1,
        "longestKill": 7.1446867,
        "name": "AXIS_WIP",
        "playerId": "account.9cf94a73ce544a309094b694835ce5d1",
        "revives": 0,
        "rideDistance": 0,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 144,
        "vehicleDestroys": 0,
        "walkDistance": 80.0068,
        "weaponsAcquired": 2,
        "winPlace": 16
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "98921271-a72d-4d98-b80d-d74fd4ce2830",
    "attributes": {
      "stats": {
        "DBNOs": 3,
        "assists": 0,
        "boosts": 2,
        "damageDealt": 255.21996,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 0,
        "killPlace": 8,
        "killStreaks": 2,
        "kills": 3,
        "longestKill": 7.4165387,
        "name": "AXIS_SOMI",
        "playerId": "account.99709067ef074f3bbcbcadda547abad4",
        "revives": 0,
        "rideDistance": 0,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 253,
        "vehicleDestroys": 0,
        "walkDistance": 180.69746,
        "weaponsAcquired": 4,
        "winPlace": 16
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "272b2110-7911-4f23-8a5c-55f75616bffc",
    "attributes": {
      "stats": {
        "DBNOs": 1,
        "assists": 0,
        "boosts": 5,
        "damageDealt": 371.72964,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 7,
        "killPlace": 31,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "FLR_EUGBAK",
        "playerId": "account.b3b2c68a7bff4ac594bdf01b5e86db7d",
        "revives": 1,
        "rideDistance": 4143.0234,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1587,
        "vehicleDestroys": 0,
        "walkDistance": 1453.027,
        "weaponsAcquired": 4,
        "winPlace": 4
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "b47b8853-2efe-4a4a-8420-5aa257b1954d",
    "attributes": {
      "stats": {
        "DBNOs": 2,
        "assists": 0,
        "boosts": 17,
        "damageDealt": 559.89154,
        "deathType": "alive",
        "headshotKills": 1,
        "heals": 4,
        "killPlace": 5,
        "killStreaks": 1,
        "kills": 3,
        "longestKill": 233.4899,
        "name": "asd4854",
        "playerId": "account.1074bbc7478c47fe95596118a39bd144",
        "revives": 0,
        "rideDistance": 2101.725,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1901,
        "vehicleDestroys": 0,
        "walkDistance": 2654.5916,
        "weaponsAcquired": 7,
        "winPlace": 1
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "cab51559-afa2-4773-ba7b-9c8b20a04527",
    "attributes": {
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 7,
        "damageDealt": 94.26184,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 3,
        "killPlace": 36,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "AZA_LEON",
        "playerId": "account.694c03142b5945fdbb3ef49fe034fa55",
        "revives": 0,
        "rideDistance": 6298.5723,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1256,
        "vehicleDestroys": 0,
        "walkDistance": 929.036,
        "weaponsAcquired": 8,
        "winPlace": 5
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "5cbefb67-0b93-498f-875f-82e81afdfbe9",
    "attributes": {
      "stats": {
        "DBNOs": 3,
        "assists": 0,
        "boosts": 8,
        "damageDealt": 368.28915,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 2,
        "killPlace": 33,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "FLR_BALANCE",
        "playerId": "account.9c3d3689fe544683b009de2416717f45",
        "revives": 0,
        "rideDistance": 4162.795,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1435,
        "vehicleDestroys": 0,
        "walkDistance": 1880.6322,
        "weaponsAcquired": 5,
        "winPlace": 4
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "46b695cd-2727-42ab-9713-f07f64ecb4b7",
    "attributes": {
      "stats": {
        "DBNOs": 2,
        "assists": 0,
        "boosts": 7,
        "damageDealt": 466.71884,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 6,
        "killPlace": 11,
        "killStreaks": 1,
        "kills": 2,
        "longestKill": 195.24734,
        "name": "FLR_sexking",
        "playerId": "account.67af985f972f48f28243af7ef865c965",
        "revives": 1,
        "rideDistance": 4270.533,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1587,
        "vehicleDestroys": 0,
        "walkDistance": 2047.9075,
        "weaponsAcquired": 3,
        "winPlace": 4
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "6c768efd-a612-454e-a6d0-a44886e5bd2e",
    "attributes": {
      "actor": "",
      "shardId": "kakao",
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 4,
        "damageDealt": 91.94638,
        "deathType": "alive",
        "headshotKills": 0,
        "heals": 3,
        "killPlace": 17,
        "killStreaks": 1,
        "kills": 1,
        "longestKill": 16.263487,
        "name": "roseAs",
        "playerId": "account.a550c6bfb82e46709cdc6bc715825670",
        "revives": 3,
        "rideDistance": 1668.2783,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1901,
        "vehicleDestroys": 0,
        "walkDistance": 2288.9727,
        "weaponsAcquired": 7,
        "winPlace": 1
      }
    }
  },
  {
    "type": "participant",
    "id": "920db41c-6a8d-4f26-9cf7-5c4bbe991a05",
    "attributes": {
      "stats": {
        "DBNOs": 2,
        "assists": 0,
        "boosts": 6,
        "damageDealt": 259.36618,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 9,
        "killPlace": 46,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "OOTD_SexyGuy",
        "playerId": "account.29582e224736461c874beeb29e0db56e",
        "revives": 1,
        "rideDistance": 1315.9072,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1318,
        "vehicleDestroys": 0,
        "walkDistance": 1381.0889,
        "weaponsAcquired": 5,
        "winPlace": 9
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "3d76108a-4ea8-4feb-81e8-e18c5a0b279b",
    "attributes": {
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 0,
        "damageDealt": 58.91,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 0,
        "killPlace": 63,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "xaesic",
        "playerId": "account.f1071b4a0bd14b689ae5b015401caf36",
        "revives": 0,
        "rideDistance": 0,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 117,
        "vehicleDestroys": 0,
        "walkDistance": 4.264769,
        "weaponsAcquired": 1,
        "winPlace": 16
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "4689ce2b-af5d-4623-98bb-6d800e38e597",
    "attributes": {
      "stats": {
        "DBNOs": 4,
        "assists": 0,
        "boosts": 6,
        "damageDealt": 438.45776,
        "deathType": "byplayer",
        "headshotKills": 1,
        "heals": 6,
        "killPlace": 2,
        "killStreaks": 2,
        "kills": 5,
        "longestKill": 60.50626,
        "name": "Warrior__-",
        "playerId": "account.ae90fbc5291445a5a8ea6eab0ed85a06",
        "revives": 1,
        "rideDistance": 2481.9395,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1351,
        "vehicleDestroys": 0,
        "walkDistance": 2027.3087,
        "weaponsAcquired": 6,
        "winPlace": 8
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "c1cf72bf-7fef-4563-99ec-962c53f17226",
    "attributes": {
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 1,
        "damageDealt": 0,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 1,
        "killPlace": 47,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "WJ971106",
        "playerId": "account.1a7223b028a14cb8bfa4c56c8f36db25",
        "revives": 0,
        "rideDistance": 157.03229,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 623,
        "vehicleDestroys": 0,
        "walkDistance": 1196.9009,
        "weaponsAcquired": 2,
        "winPlace": 11
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "roster",
    "id": "2987dc68-2a6a-4205-8786-081ab7a8789f",
    "attributes": {
      "shardId": "kakao",
      "stats": {
        "rank": 13,
        "teamId": 5
      },
      "won": "false"
    },
    "relationships": {
      "team": {
        "data": null
      },
      "participants": {
        "data": [
          {
            "type": "participant",
            "id": "5ef84508-1684-4dcb-a1ab-6980351eb007"
          },
          {
            "type": "participant",
            "id": "0bd9b7fd-26e9-4082-ae17-d5b25e3aadb2"
          },
          {
            "type": "participant",
            "id": "0aee050f-5bbd-4bef-921a-5ade9b3e1270"
          },
          {
            "type": "participant",
            "id": "89ac0c31-1365-4669-85b8-f4ff5d3d90d1"
          }
        ]
      }
    }
  },
  {
    "type": "roster",
    "id": "563dedc4-b183-4dfa-ba24-d36a75820e03",
    "attributes": {
      "shardId": "kakao",
      "stats": {
        "rank": 6,
        "teamId": 16
      },
      "won": "false"
    },
    "relationships": {
      "team": {
        "data": null
      },
      "participants": {
        "data": [
          {
            "type": "participant",
            "id": "19de8732-3c36-462e-bc2e-6d11965e17d3"
          },
          {
            "type": "participant",
            "id": "cd0998f0-f14b-4361-adf0-8ad69148ee26"
          },
          {
            "type": "participant",
            "id": "b3eea71b-9c13-4af3-b871-d40b4f387c80"
          },
          {
            "type": "participant",
            "id": "0f7359ca-3f23-4bd9-8714-135428b65305"
          }
        ]
      }
    }
  },
  {
    "type": "participant",
    "id": "130567f1-d630-41be-b253-c6be7bc26e05",
    "attributes": {
      "stats": {
        "DBNOs": 0,
        "assists": 1,
        "boosts": 4,
        "damageDealt": 73.71,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 1,
        "killPlace": 56,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "HAKKK___",
        "playerId": "account.7fabe9e6df1b4ebf8c45f4538f8b96af",
        "revives": 0,
        "rideDistance": 0,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 783,
        "vehicleDestroys": 0,
        "walkDistance": 1267.1776,
        "weaponsAcquired": 6,
        "winPlace": 15
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "71f019c5-5b34-40b0-8792-a3d1e758c92c",
    "attributes": {
      "stats": {
        "DBNOs": 3,
        "assists": 0,
        "boosts": 6,
        "damageDealt": 682.04395,
        "deathType": "byplayer",
        "headshotKills": 1,
        "heals": 7,
        "killPlace": 3,
        "killStreaks": 3,
        "kills": 5,
        "longestKill": 26.103813,
        "name": "SllllllllllS_",
        "playerId": "account.6ceee75249bb4e3a8410dad6b003a698",
        "revives": 0,
        "rideDistance": 1382.9847,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1095,
        "vehicleDestroys": 0,
        "walkDistance": 1394.4181,
        "weaponsAcquired": 6,
        "winPlace": 12
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "aaceec32-04be-4054-bb85-11e5556c9c60",
    "attributes": {
      "shardId": "kakao",
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 2,
        "damageDealt": 129.44244,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 0,
        "killPlace": 50,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "parktan1",
        "playerId": "account.1354027006734031b32a3a6c4c53d43a",
        "revives": 0,
        "rideDistance": 0,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 260,
        "vehicleDestroys": 0,
        "walkDistance": 177.88142,
        "weaponsAcquired": 5,
        "winPlace": 12
      },
      "actor": ""
    }
  },
  {
    "type": "participant",
    "id": "f0755014-1840-4a4e-8ea8-29e094d49d6f",
    "attributes": {
      "actor": "",
      "shardId": "kakao",
      "stats": {
        "DBNOs": 1,
        "assists": 0,
        "boosts": 6,
        "damageDealt": 109.298584,
        "deathType": "byplayer",
        "headshotKills": 1,
        "heals": 0,
        "killPlace": 22,
        "killStreaks": 1,
        "kills": 1,
        "longestKill": 203.21991,
        "name": "AZA_DOG",
        "playerId": "account.952dee440b3540b68bf7ed44f5c038df",
        "revives": 0,
        "rideDistance": 5876.944,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1516,
        "vehicleDestroys": 0,
        "walkDistance": 1376.42,
        "weaponsAcquired": 5,
        "winPlace": 5
      }
    }
  },
  {
    "type": "participant",
    "id": "a6803c8c-bee7-4b11-afbf-d25eb75042b8",
    "attributes": {
      "stats": {
        "DBNOs": 1,
        "assists": 0,
        "boosts": 9,
        "damageDealt": 234.46312,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 0,
        "killPlace": 34,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "AZA_Dobby",
        "playerId": "account.29bfb40184ce4c3996be22b22dcffe32",
        "revives": 0,
        "rideDistance": 5021.438,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1516,
        "vehicleDestroys": 0,
        "walkDistance": 1180.1581,
        "weaponsAcquired": 6,
        "winPlace": 5
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "19de8732-3c36-462e-bc2e-6d11965e17d3",
    "attributes": {
      "shardId": "kakao",
      "stats": {
        "DBNOs": 1,
        "assists": 0,
        "boosts": 5,
        "damageDealt": 310.2116,
        "deathType": "byplayer",
        "headshotKills": 1,
        "heals": 6,
        "killPlace": 12,
        "killStreaks": 1,
        "kills": 2,
        "longestKill": 26.775742,
        "name": "Mrzzu_-",
        "playerId": "account.5130d7e0152d4aeabb7e47fc07b425e2",
        "revives": 0,
        "rideDistance": 4613.6016,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1516,
        "vehicleDestroys": 0,
        "walkDistance": 2201.2126,
        "weaponsAcquired": 4,
        "winPlace": 6
      },
      "actor": ""
    }
  },
  {
    "type": "participant",
    "id": "a41e6a94-2f49-456f-a0c7-5481359ac305",
    "attributes": {
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 10,
        "damageDealt": 190.1712,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 4,
        "killPlace": 30,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "Ja1118",
        "playerId": "account.0dbaa4d1d4314296ab995c3e31ed0942",
        "revives": 0,
        "rideDistance": 1417.3623,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1269,
        "vehicleDestroys": 0,
        "walkDistance": 2073.6672,
        "weaponsAcquired": 6,
        "winPlace": 3
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "872c14d8-eb4e-4770-b980-9eb21895366a",
    "attributes": {
      "stats": {
        "DBNOs": 1,
        "assists": 0,
        "boosts": 2,
        "damageDealt": 174.98233,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 0,
        "killPlace": 49,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "wpgh5714",
        "playerId": "account.dec67496915c419092f7561244b9da45",
        "revives": 0,
        "rideDistance": 0,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 531,
        "vehicleDestroys": 0,
        "walkDistance": 548.6022,
        "weaponsAcquired": 5,
        "winPlace": 12
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "4e0f9059-6bef-49ef-bee6-aaebbed6b328",
    "attributes": {
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 7,
        "damageDealt": 164.70078,
        "deathType": "alive",
        "headshotKills": 0,
        "heals": 4,
        "killPlace": 18,
        "killStreaks": 1,
        "kills": 1,
        "longestKill": 53.109756,
        "name": "ESN_BEO-__-",
        "playerId": "account.4162dfcd1547465a98e19cb8ba11e62a",
        "revives": 1,
        "rideDistance": 3084.5767,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1901,
        "vehicleDestroys": 0,
        "walkDistance": 2138.32,
        "weaponsAcquired": 5,
        "winPlace": 1
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "dd0c64b6-eabd-40bc-b277-0edaadeb1564",
    "attributes": {
      "stats": {
        "DBNOs": 1,
        "assists": 0,
        "boosts": 7,
        "damageDealt": 339.69852,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 0,
        "killPlace": 45,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "DAEGWON988",
        "playerId": "account.3e57e7aeed254140806bc24a6e0bfde9",
        "revives": 0,
        "rideDistance": 0,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1318,
        "vehicleDestroys": 0,
        "walkDistance": 2187.3113,
        "weaponsAcquired": 4,
        "winPlace": 9
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "f86998b4-78d9-42ff-839d-f784244bf8bc",
    "attributes": {
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 0,
        "damageDealt": 33.99046,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 0,
        "killPlace": 58,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "SEXY_SOJUTHANOS",
        "playerId": "account.4ca5af1eb8d24632ac721fd29a5b75e6",
        "revives": 0,
        "rideDistance": 0,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 88,
        "vehicleDestroys": 0,
        "walkDistance": 10.281839,
        "weaponsAcquired": 1,
        "winPlace": 15
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "ca5e929f-df65-4c5e-9003-364ab4a3bb38",
    "attributes": {
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 0,
        "damageDealt": 0,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 0,
        "killPlace": 48,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "AFTV_MMO",
        "playerId": "account.d7205bd1b0a64193a10d65d8b39718bd",
        "revives": 0,
        "rideDistance": 0,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 96,
        "vehicleDestroys": 0,
        "walkDistance": 33.613926,
        "weaponsAcquired": 0,
        "winPlace": 11
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "roster",
    "id": "d517e687-bb61-423b-ac7d-7ad9c04e8064",
    "attributes": {
      "stats": {
        "rank": 12,
        "teamId": 2
      },
      "won": "false",
      "shardId": "kakao"
    },
    "relationships": {
      "team": {
        "data": null
      },
      "participants": {
        "data": [
          {
            "type": "participant",
            "id": "71f019c5-5b34-40b0-8792-a3d1e758c92c"
          },
          {
            "type": "participant",
            "id": "3d76108a-4ea8-4feb-81e8-e18c5a0b279b"
          },
          {
            "type": "participant",
            "id": "872c14d8-eb4e-4770-b980-9eb21895366a"
          },
          {
            "type": "participant",
            "id": "aaceec32-04be-4054-bb85-11e5556c9c60"
          }
        ]
      }
    }
  },
  {
    "type": "roster",
    "id": "7d137ad3-f229-456c-b8b9-b5efc9ee52b8",
    "attributes": {
      "stats": {
        "rank": 7,
        "teamId": 6
      },
      "won": "false",
      "shardId": "kakao"
    },
    "relationships": {
      "participants": {
        "data": [
          {
            "type": "participant",
            "id": "5d575432-2e4e-4e84-a960-691fef7d6ab3"
          },
          {
            "type": "participant",
            "id": "8f2ad88a-9419-4fa6-8fae-aa38e2f01eee"
          },
          {
            "type": "participant",
            "id": "49b8b073-abcf-4047-9048-2f29885cd345"
          },
          {
            "type": "participant",
            "id": "19fe025f-1ece-4f87-9cc0-4daaac1eb646"
          }
        ]
      },
      "team": {
        "data": null
      }
    }
  },
  {
    "type": "participant",
    "id": "5d575432-2e4e-4e84-a960-691fef7d6ab3",
    "attributes": {
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 6,
        "damageDealt": 83.48887,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 7,
        "killPlace": 42,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "JOY_Revel",
        "playerId": "account.01733267b5d94e55bffb98106a7c3014",
        "revives": 0,
        "rideDistance": 1859.6743,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1427,
        "vehicleDestroys": 1,
        "walkDistance": 1464.8035,
        "weaponsAcquired": 5,
        "winPlace": 7
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "0bd9b7fd-26e9-4082-ae17-d5b25e3aadb2",
    "attributes": {
      "actor": "",
      "shardId": "kakao",
      "stats": {
        "DBNOs": 1,
        "assists": 1,
        "boosts": 0,
        "damageDealt": 100.00001,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 0,
        "killPlace": 52,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "Z100_HwangDo_Y",
        "playerId": "account.0e0eeecdec9543438c5423e0dcbd7a68",
        "revives": 0,
        "rideDistance": 0,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 87,
        "vehicleDestroys": 0,
        "walkDistance": 2.338219,
        "weaponsAcquired": 0,
        "winPlace": 13
      }
    }
  },
  {
    "type": "participant",
    "id": "0aee050f-5bbd-4bef-921a-5ade9b3e1270",
    "attributes": {
      "stats": {
        "DBNOs": 2,
        "assists": 1,
        "boosts": 7,
        "damageDealt": 406.78052,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 0,
        "killPlace": 6,
        "killStreaks": 2,
        "kills": 3,
        "longestKill": 66.29596,
        "name": "kimuchijo-a",
        "playerId": "account.2c4c5922356b4ee9a4fa28287d830c73",
        "revives": 0,
        "rideDistance": 2818.2825,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1089,
        "vehicleDestroys": 0,
        "walkDistance": 1371.4714,
        "weaponsAcquired": 7,
        "winPlace": 13
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "cd0998f0-f14b-4361-adf0-8ad69148ee26",
    "attributes": {
      "shardId": "kakao",
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 5,
        "damageDealt": 121.124146,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 2,
        "killPlace": 38,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "Mrzzu_",
        "playerId": "account.604eb5c9e325430395596dc385dffcfb",
        "revives": 0,
        "rideDistance": 5845.3813,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1153,
        "vehicleDestroys": 0,
        "walkDistance": 1267.3118,
        "weaponsAcquired": 4,
        "winPlace": 6
      },
      "actor": ""
    }
  },
  {
    "type": "participant",
    "id": "017612c6-785f-49ac-9445-037c356b70ea",
    "attributes": {
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 0,
        "damageDealt": 54.243,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 0,
        "killPlace": 60,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "chi1231239",
        "playerId": "account.f684304deada4313b4ac6924918371f0",
        "revives": 0,
        "rideDistance": 0,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 175,
        "vehicleDestroys": 0,
        "walkDistance": 67.551186,
        "weaponsAcquired": 2,
        "winPlace": 16
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "27b37e2c-457b-4286-9b07-4feb9ba8ddca",
    "attributes": {
      "actor": "",
      "shardId": "kakao",
      "stats": {
        "DBNOs": 2,
        "assists": 0,
        "boosts": 7,
        "damageDealt": 211.91483,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 6,
        "killPlace": 20,
        "killStreaks": 1,
        "kills": 1,
        "longestKill": 244.07945,
        "name": "test1234",
        "playerId": "account.test1234",
        "revives": 0,
        "rideDistance": 8647.9,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1882,
        "vehicleDestroys": 0,
        "walkDistance": 878.89825,
        "weaponsAcquired": 5,
        "winPlace": 2
      }
    }
  },
  {
    "type": "participant",
    "id": "49b8b073-abcf-4047-9048-2f29885cd345",
    "attributes": {
      "shardId": "kakao",
      "stats": {
        "DBNOs": 1,
        "assists": 0,
        "boosts": 7,
        "damageDealt": 50.694942,
        "deathType": "byplayer",
        "headshotKills": 1,
        "heals": 7,
        "killPlace": 23,
        "killStreaks": 1,
        "kills": 1,
        "longestKill": 201.60428,
        "name": "Irene_Revel",
        "playerId": "account.48e63dd6e4e84784950b27e73ba5421d",
        "revives": 1,
        "rideDistance": 3786.0322,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1440,
        "vehicleDestroys": 0,
        "walkDistance": 1294.6957,
        "weaponsAcquired": 9,
        "winPlace": 7
      },
      "actor": ""
    }
  },
  {
    "type": "participant",
    "id": "a181e612-6d61-4baf-b2bb-d930bad4df00",
    "attributes": {
      "actor": "",
      "shardId": "kakao",
      "stats": {
        "DBNOs": 2,
        "assists": 3,
        "boosts": 7,
        "damageDealt": 733.47046,
        "deathType": "byplayer",
        "headshotKills": 1,
        "heals": 3,
        "killPlace": 13,
        "killStreaks": 1,
        "kills": 2,
        "longestKill": 37.331924,
        "name": "BlaCk_RetrievEr",
        "playerId": "account.b468a0f443024b6182834987a4d11e23",
        "revives": 0,
        "rideDistance": 2637.7722,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1351,
        "vehicleDestroys": 0,
        "walkDistance": 1899.4727,
        "weaponsAcquired": 5,
        "winPlace": 8
      }
    }
  },
  {
    "type": "participant",
    "id": "fd55f42b-1f59-4b22-8655-9621f51c54a2",
    "attributes": {
      "stats": {
        "DBNOs": 1,
        "assists": 0,
        "boosts": 5,
        "damageDealt": 333.26385,
        "deathType": "byplayer",
        "headshotKills": 1,
        "heals": 1,
        "killPlace": 26,
        "killStreaks": 1,
        "kills": 1,
        "longestKill": 10.225283,
        "name": "3iDiotS_BAEK",
        "playerId": "account.236ca9a20e15467a9f6f8d73098cb599",
        "revives": 0,
        "rideDistance": 3523.2336,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 967,
        "vehicleDestroys": 0,
        "walkDistance": 998.0726,
        "weaponsAcquired": 5,
        "winPlace": 14
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "9b142ba5-7809-4224-a358-c1873a28970b",
    "attributes": {
      "stats": {
        "DBNOs": 0,
        "assists": 0,
        "boosts": 0,
        "damageDealt": 0,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 0,
        "killPlace": 62,
        "killStreaks": 0,
        "kills": 0,
        "longestKill": 0,
        "name": "AXIS_KING",
        "playerId": "account.a275fbea609b4462bba7005c0b4ffb9f",
        "revives": 0,
        "rideDistance": 0,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 130,
        "vehicleDestroys": 0,
        "walkDistance": 53.60122,
        "weaponsAcquired": 1,
        "winPlace": 16
      },
      "actor": "",
      "shardId": "kakao"
    }
  },
  {
    "type": "participant",
    "id": "64b30ad2-09ce-45de-80af-64329aca0e78",
    "attributes": {
      "actor": "",
      "shardId": "kakao",
      "stats": {
        "DBNOs": 4,
        "assists": 0,
        "boosts": 12,
        "damageDealt": 670.34515,
        "deathType": "byplayer",
        "headshotKills": 0,
        "heals": 6,
        "killPlace": 1,
        "killStreaks": 2,
        "kills": 5,
        "longestKill": 77.894554,
        "name": "MAN_DOO_S",
        "playerId": "account.43e8aabc8a8846f9aed53070146f1e13",
        "revives": 3,
        "rideDistance": 1441.3882,
        "roadKills": 0,
        "swimDistance": 0,
        "teamKills": 0,
        "timeSurvived": 1657,
        "vehicleDestroys": 0,
        "walkDistance": 2229.4717,
        "weaponsAcquired": 4,
        "winPlace": 3
      }
    }
  },
  {
    "type": "roster",
    "id": "265ce149-4943-4b20-a568-df4fcc2cde82",
    "attributes": {
      "stats": {
        "rank": 2,
        "teamId": 12
      },
      "won": "false",
      "shardId": "kakao"
    },
    "relationships": {
      "team": {
        "data": null
      },
      "participants": {
        "data": [
          {
            "type": "participant",
            "id": "aa360677-7fd8-4ded-8fa8-0b60692d3c92"
          },
          {
            "type": "participant",
            "id": "4370612c-a7b1-4c0d-bfb6-b9f1475bd989"
          },
          {
            "type": "participant",
            "id": "7320018a-9423-436c-8482-d5900d8e51dd"
          },
          {
            "type": "participant",
            "id": "27b37e2c-457b-4286-9b07-4feb9ba8ddca"
          }
        ]
      }
    }
  },
  {
    "type": "roster",
    "id": "7643839b-7795-4444-bb92-cf730345fc23",
    "attributes": {
      "shardId": "kakao",
      "stats": {
        "rank": 14,
        "teamId": 15
      },
      "won": "false"
    },
    "relationships": {
      "team": {
        "data": null
      },
      "participants": {
        "data": [
          {
            "type": "participant",
            "id": "3fcac166-057a-4386-bef3-98b7c70433dc"
          },
          {
            "type": "participant",
            "id": "30d6fe50-6aa3-4969-be16-cc7f148f96df"
          },
          {
            "type": "participant",
            "id": "db92ffe9-1cc6-4214-a095-1ac256b2abb6"
          },
          {
            "type": "participant",
            "id": "fd55f42b-1f59-4b22-8655-9621f51c54a2"
          }
        ]
      }
    }
  }
]
export {TestPubgMatchesIncluded, TestPubgAPIMatchesDetail}
