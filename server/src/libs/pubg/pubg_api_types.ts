export type PubgAPIModeStat = {
  assists: number,
  boosts: number,
  dBNOs: number,
  dailyKills: number,
  dailyWins: number,
  damageDealt: number,
  days: number,
  headshotKills: number,
  heals: number,
  killPoints: number,
  kills: number,
  longestKill: number,
  longestTimeSurvived: number,
  losses: number,
  maxKillStreaks: number,
  mostSurvivalTime: number,
  rankPoints: number,
  rankPointsTitle: string,
  revives: number,
  rideDistance: number,
  roadKills: number,
  roundMostKills: number,
  roundsPlayed: number,
  suicides: number,
  swimDistance: number,
  teamKills: number,
  timeSurvived: number,
  top10s: number,
  vehicleDestroys: number,
  walkDistance: number,
  weaponsAcquired: number,
  weeklyKills: number,
  weeklyWins: number,
  winPoints: number,
  wins: number
};

export type PubgAPISimpleMatchInfo = {
  type: 'match' | 'custom',
  id: string
};

export type PubgAPISeasonStats = {
  type: string,
  attributes: {
    gameModeStats: {
      solo: PubgAPIModeStat,
      'solo-fpp': PubgAPIModeStat,
      duo: PubgAPIModeStat,
      'duo-fpp': PubgAPIModeStat,
      squad: PubgAPIModeStat,
      'squad-fpp': PubgAPIModeStat,
    },
    bestRankPoint: number
  },
  relationships: {
    matchesDuo: {
      data: Array<PubgAPISimpleMatchInfo>
    },
    matchesDuoFPP: {
      data: Array<PubgAPISimpleMatchInfo>
    },
    matchesSquad: {
      data: Array<PubgAPISimpleMatchInfo>
    },
    matchesSquadFPP: {
      data: Array<PubgAPISimpleMatchInfo>
    },
    season: {
      data: {
        type: string,
        id: string
      }
    },
    player: {
      data: {
        type: string,
        id: string
      }
    },
    matchesSolo: {
      data: Array<PubgAPISimpleMatchInfo>
    },
    matchesSoloFPP: {
      data: Array<PubgAPISimpleMatchInfo>
    }
  }
}

export type PubgAPISeason =
  'division.bro.official.2017-beta'
  | 'division.bro.official.2017-pre1'
  | 'division.bro.official.2017-pre2'
  | 'division.bro.official.2017-pre3'
  | 'division.bro.official.2017-pre4'
  | 'division.bro.official.2017-pre5'
  | 'division.bro.official.2017-pre6'
  | 'division.bro.official.2017-pre7'
  | 'division.bro.official.2017-pre8'
  | 'division.bro.official.2017-pre9'
  | 'division.bro.official.2018-01'
  | 'division.bro.official.2018-02'
  | 'division.bro.official.2018-03'
  | 'division.bro.official.2018-04'
  | 'division.bro.official.2018-05'
  | 'division.bro.official.2018-06'
  | 'division.bro.official.2018-07'
  | 'division.bro.official.2018-08'
  | 'division.bro.official.2018-09'
  | 'division.bro.official.pc-2018-01'
  | 'division.bro.official.pc-2018-02'
  | 'division.bro.official.pc-2018-03'
  | 'division.bro.official.pc-2018-04'
  | 'division.bro.official.pc-2018-05'
  | 'division.bro.official.pc-2018-06'
  | 'division.bro.official.pc-2018-07'
  | 'division.bro.official.pc-2018-08'
  | 'division.bro.official.pc-2018-09'
  | 'division.bro.official.pc-2018-10'
  | 'division.bro.official.pc-2018-11'
  | 'division.bro.official.pc-2018-12'
  | 'division.bro.official.pc-2018-13'
  | 'division.bro.official.pc-2018-14'
  | 'division.bro.official.pc-2018-15'
  | 'division.bro.official.pc-2018-16'
  | 'division.bro.official.console-03'
  | 'division.bro.official.console-04'
  | 'division.bro.official.console-05'
  | 'division.bro.official.console-06'
  | 'division.bro.official.console-07'
  | 'division.bro.official.console-08'
  | 'division.bro.official.console-09'
  | 'division.bro.official.console-10'
  | 'division.bro.official.console-11'
  | 'division.bro.official.console-12'
  | 'division.bro.official.console-13'
  | 'division.bro.official.console-14'
  | 'division.bro.official.console-15'
  | 'division.bro.official.console-16'

export type PubgAPINewSeason = string

export type PubgAPIGameModeStats = {
  // minimum: 0 / Number of enemy players this player damaged that were killed by teammates
  assists: number,
  // minimum: 0 / Number of boost items used
  boosts: number,
  // minimum: 0 / Number of enemy players knocked
  dBNOs: number,
  // minimum: 0 / Number of kills during the most recent day played.
  dailyKills: number,
  // minimum: 0 / Total damage dealt. Note: Self inflicted damage is subtracted
  damageDealt: number,
  // minimum: 0 / dailyWins
  days: number,
  // minimum: 0 / Number of enemy players killed with headshots
  headshotKills: number,
  // minimum: 0 / Number of healing items used
  heals: number,
  // deprecated: true / N/A
  killPoints: number,
  // minimum: 0 / Number of enemy players killed
  kills: number,
  // minimum: 0 / longestTimeSurvived
  longestKill: number,
  // minimum: 0 / Number of matches lost
  losses: number,
  // minimum: 0 / mostSurvivalTime
  maxKillStreaks: number,
  // minimum: 0 / deprecated: true
  rankPoints: number,
  // deprecated: true / Rank title in the form title-level
  rankPointsTitle: string,
  // minimum: 0 / Number of times this player revived teammates
  revives: number,
  // minimum: 0 / Total distance traveled in vehicles measured in meters
  rideDistance: number,
  // minimum: 0 / Number of kills while in a vehicle
  roadKills: number,
  // minimum: 0 / Highest number of kills in a single match
  roundMostKills: number,
  // minimum: 0 / Number of matches played
  roundsPlayed: number,
  // minimum: 0 / Number of self-inflicted deaths
  suicides: number,
  // minimum: 0 / Total distance traveled while swimming measured in meters
  swimDistance: number,
  // minimum: 0 / Number of times this player killed a teammate
  teamKills: number,
  // minimum: 0 / Total time survived
  timeSurvived: number,
  // minimum: 0 / Number of times this player made it to the top 10 in a match
  top10s: number,
  // minimum: 0 / Number of vehicles destroyed
  vehicleDestroys: number,
  // minimum: 0 / Total distance traveled on foot measured in meters
  walkDistance: number,
  // minimum: 0 / Number of weapons picked up
  weaponsAcquired: number,
  // minimum: 0 / Number of kills during the most recent week played
  weeklyKills: number,
  // minimum: 0 / Number of wins during the most recent week played.
  weeklyWins: number,
  // deprecated: true / N/A
  winPoints: number,
  // minimum: 0 / Number of matches won
  wins: number,
}

export type PubgAPIRankedGameModeStats = {
  // minimum: 0 / Player's current rank points
  currentRankPoint: number,
  // minimum: 0 / Player's highest rank points
  bestRankPoint: number,
  currentTier: {
    //  Player's current ranked
    tier: string,
    //  Player's current ranked subtier
    subTier: string,
  }
  bestTier: {
    //  Player's highest ranked
    tier: string,
    //  Player's highest ranked subtier
    subTier: string,
    // minimum: 0 / Number of matches played
  }
  roundsPlayed: number,
  // minimum: 0 / Average rank
  avgRank: number,
  // minimum: 0 / deprecated: true
  avgSurvivalTime: number,
  // minimum: 0 / Ratio of number of times this player made it to the top 10 in a match / times didn't make it to top 10
  top10Ratio: number,
  // minimum: 0 / Ratio of number of matches won / matches didn't win
  winRatio: number,
  // minimum: 0 / Number of enemy players this player damaged that were killed by teammates
  assists: number,
  // minimum: 0 / Number of matches won
  wins: number,
  // minimum: 0 / Kill death assist ratio
  kda: number,
  // minimum: 0 / deprecated: true
  kdr: number,
  // minimum: 0 / Number of enemy players killed
  kills: number,
  // minimum: 0 / Number of player deaths
  deaths: number,
  // minimum: 0 / deprecated: true
  roundMostKills: number,
  // minimum: 0 / deprecated: true
  longestKill: number,
  // minimum: 0 / deprecated: true
  headshotKills: number,
  // minimum: 0 / deprecated: true
  headshotKillRatio: number,
  // minimum: 0 / Total damage dealt. Note: Self inflicted damage is subtracted
  damageDealt: number,
  // minimum: 0 / Number of enemy players knocked
  dBNOs: number,
  // minimum: 0 / deprecated: true
  reviveRatio: number,
  // minimum: 0 / deprecated: true
  revives: number,
  // minimum: 0 / deprecated: true
  heals: number,
  // minimum: 0 / deprecated: true
  boosts: number,
  // minimum: 0 / deprecated: true
  weaponsAcquired: number,
  // minimum: 0 / deprecated: true
  teamKills: number,
  // minimum: 0 / deprecated: true
  playTime: number,
  // minimum: 0 / deprecated: true
  killStreak: number,
}

export type PubgAPIPlatform = 'steam' | 'kakao' | 'psn' | 'stadia' | 'xbox' | 'test'

export type PubgAPIGameMode =
  'solo' //- 1 player per team, third person perspective
  | 'solo-fpp' // - 1 player per team, first person perspective
  | 'duo' // - up to 2 people per team, third person perspective
  | 'duo-fpp' // - up to 2 people per team, first person perspective
  | 'squad' // - more than 2 people per team, third person perspective
  | 'squad-fpp' // - more than 2 people per team, first person perspective

export type PubgAPIPlatformRegion =
  'pc-as' // - 아시아
  | 'pc-eu' // - 유럽
  | 'pc-jp' // - 일본
  | 'pc-kakao' // - 카카오
  | 'pc-krjp' // - 한국
  | 'pc-na' // - 북미
  | 'pc-oc' // - 오세아니아
  | 'pc-ru' // - 러시아
  | 'pc-sa' // - 중남미
  | 'pc-sea' // - 동남아시아
  | 'pc-tournament' // - 토너먼트
  | 'psn-as' // - 아시아
  | 'psn-eu' // - 유럽
  | 'psn-na' // - 북미
  | 'psn-oc' // - 오세아니아
  | 'xbox-as' // - 아시아
  | 'Xbox-eu' //  - 유럽
  | 'xbox-na' // - 북미
  | 'Xbox-oc' //  - 오세아니아
  | 'xbox-sa' // - 남아메리카

export type PubgAPIPlayer = {
  type: string,
  id: string,
  attributes: {
    titleId: string,
    shardId: PubgAPIPlatform,
    patchVersion: string,
    name: string,
    stats: unknown | null
  },
  relationships: {
    assets: {
      data: unknown[]
    },
    matches: {
      data: Array<PubgAPISimpleMatchInfo>
    }
  },
  links: {
    schema: string,
    self: string
  }
}

export type PubgAPIPlayerSearchError = {
  title: 'Not Found',
  detail: 'No Players Found Matching Criteria'
}

export type PubgAPIErrorForNotFound = {
  title: 'Not Found'
}

export type PubgAPISeasonDetail = {
  type: string,
  id: string,
  attributes: {
    isOffseason: boolean,
    isCurrentSeason: boolean
  }
}

export type PubgAPITier =
  'Bronze'
  | 'Silver'
  | 'Gold'
  | 'Platinum'
  | 'Diamond'
  | 'Master'
  | 'Grandmaster'

export type PubgAPISubTier = '1' | '2' | '3' | '4' | '5'

export type PubgAPITierDetail = {
  tier: PubgAPITier,
  subTier: PubgAPISubTier
}

export type PubgAPIRankDetailPerMode = {
  currentTier: PubgAPITierDetail,
  currentRankPoint: number,
  bestTier: PubgAPITierDetail,
  bestRankPoint: number,
  roundsPlayed: number,
  avgRank: number,
  avgSurvivalTime: number,
  top10Ratio: number,
  winRatio: number,
  assists: number,
  wins: number,
  kda: number,
  kdr: number,
  kills: number,
  deaths: number,
  roundMostKills: number,
  longestKill: number,
  headshotKills: number,
  headshotKillRatio: number,
  damageDealt: number,
  dBNOs: number,
  reviveRatio: number,
  revives: number,
  heals: number,
  boosts: number,
  weaponsAcquired: number,
  teamKills: number,
  playTime: number,
  killStreak: number
}

export type PubgAPIRankStat = {
  type: 'rankedplayerstats',
  attributes: {
    rankedGameModeStats: {
      squad: PubgAPIRankDetailPerMode
    }
  },
  relationships: {
    player: {
      data: {
        type: 'player',
        id: string
      }
    },
    season: {
      data: {
        type: 'season',
        id: PubgAPISeason
      }
    }
  }
};

export type PubgAPIMatchParticipants = {
  type: 'participant',
  id: string,
  attributes: {
    stats: {
      DBNOs: number,
      assists: number,
      boosts: number,
      damageDealt: number,
      deathType: string,
      headshotKills: number,
      heals: number,
      killPlace: number,
      killStreaks: number,
      kills: number,
      longestKill: number,
      name: string,
      playerId: string,
      revives: number,
      rideDistance: number,
      roadKills: number,
      swimDistance: number,
      teamKills: number,
      timeSurvived: number,
      vehicleDestroys: number,
      walkDistance: number,
      weaponsAcquired: number,
      winPlace: number
    },
    actor: string,
    shardId: string
  }
};

export type PubgAPIMatchSimpleParticipants = {
  type: string,
  id: string,
};

export type PubgAPIMatchRoster = {
  type: 'roster',
  id: string,
  attributes: {
    stats: {
      rank: number,
      teamId: number
    },
    won: 'true' | 'false',
    shardId: string
  },
  relationships: {
    team: {
      data: null
    },
    participants: {
      data: Array<PubgAPIMatchSimpleParticipants>
    }
  }
};

export type PubgAPIMatchSimpleRoster = {
  type: string,
  id: string
};

export type PubgAPIMatchAssets = {
  type: 'asset',
  id: string,
  attributes: {
    description: string,
    createdAt: string,
    URL: string,
    name: 'telemetry'
  }
}

export type PubgAPIMatchIncluded = Array<PubgAPIMatchParticipants | PubgAPIMatchRoster | PubgAPIMatchAssets>

export type PubgAPIMatchInfo = {
  type: string,
  id: string,
  attributes: {
    duration: number,
    stats: null,
    titleId: string,
    isCustomMatch: boolean,
    matchType: string,
    seasonState: string,
    createdAt: string,
    gameMode: PubgAPIGameMode,
    shardId: string,
    tags: null,
    mapName: string
  },
  relationships: {
    rosters: {
      data: Array<PubgAPIMatchSimpleRoster>,
    },
    assets: {
      data: [
        {
          type: string,
          id: string
        }
      ]
    }
  },
  links: {
    self: string,
    schema: string
  }
};

export type PubgAPICustomMatchInfo = {
  matchInfo: PubgAPIMatchInfo,
  included: PubgAPIMatchIncluded
}

export type PubgAPIMasteryForWeaponsPerWeapon = {
  XPTotal: number,
  LevelCurrent: number,
  TierCurrent: number,
  StatsTotal: {
    MostDefeatsInAGame: number,
    Defeats: number,
    MostDamagePlayerInAGame: number,
    DamagePlayer: number,
    MostHeadShotsInAGame: number,
    HeadShots: number,
    LongestDefeat: number,
    LongRangeDefeats: number,
    Kills: number,
    MostKillsInAGame: number,
    Groggies: number,
    MostGroggiesInAGame: number
  },
  Medals: []
}

export type PubgAPIMasteryForWeapons = {
  type: string,
  id: string,
  attributes: {
    platform: PubgAPIPlatform,
    seasonId: string,
    weaponSummaries: {
      Item_Weapon_AK47_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_AUG_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_AWM_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_Berreta686_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_BerylM762_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_BizonPP19_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_Crossbow_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_DP12_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_DP28_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_DesertEagle_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_FNFal_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_G18_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_G36C_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_Groza_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_HK416_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_K2_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_Kar98k_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_M16A4_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_M1911_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_M249_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_M24_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_M9_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_MG3_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_MP5K_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_Mini14_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_Mk12_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_Mk14_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_Mk47Mutant_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_Mosin_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_NagantM1895_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_P90_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_QBU88_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_QBZ95_C: PubgAPIMasteryForWeaponsPerWeapon,
      'Item_Weapon_SCAR-L_C': PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_SKS_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_Saiga12_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_Sawnoff_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_Thompson_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_UMP_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_UZI_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_VSS_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_Vector_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_Win1894_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_Winchester_C: PubgAPIMasteryForWeaponsPerWeapon,
      Item_Weapon_vz61Skorpion_C: PubgAPIMasteryForWeaponsPerWeapon
    },
    latestMatchId: string
  }
};

export type PubgAPIMasteryForSurviveForTotal = {
  total: number,
};

export type PubgAPIMasteryForSurviveForPosition = {
  average: number,
  careerBest: number,
  lastMatchValue: number
};

export type PubgAPIMasteryForSurviveForNormal =
  PubgAPIMasteryForSurviveForPosition
  & PubgAPIMasteryForSurviveForTotal;

export type PubgAPIMasteryForSurvival = {
  type: string,
  id: string,
  attributes: {
    xp: number,
    level: number,
    lastMatchId: string,
    totalMatchesPlayed: number,
    stats: {
      airDropsCalled: PubgAPIMasteryForSurviveForNormal,
      damageDealt: PubgAPIMasteryForSurviveForNormal,
      damageTaken: PubgAPIMasteryForSurviveForNormal,
      distanceBySwimming: PubgAPIMasteryForSurviveForNormal,
      distanceByVehicle: PubgAPIMasteryForSurviveForNormal,
      distanceOnFoot: PubgAPIMasteryForSurviveForNormal,
      distanceTotal: PubgAPIMasteryForSurviveForNormal,
      healed: PubgAPIMasteryForSurviveForNormal,
      hotDropLandings: {
        total: number
      },
      enemyCratesLooted: PubgAPIMasteryForSurviveForNormal,
      uniqueItemsLooted: PubgAPIMasteryForSurviveForNormal,
      position: {
        average: number,
        careerBest: number,
        lastMatchValue: number
      },
      revived: PubgAPIMasteryForSurviveForNormal,
      teammatesRevived: PubgAPIMasteryForSurviveForNormal,
      timeSurvived: PubgAPIMasteryForSurviveForNormal,
      throwablesThrown: PubgAPIMasteryForSurviveForNormal,
      top10: {
        total: number
      }
    }
  }
}
