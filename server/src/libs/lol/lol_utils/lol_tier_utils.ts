import {Map} from 'immutable'

export type LoLTier = 'CHALLENGER'
  | 'GRANDMASTER'
  | 'MASTER'
  | 'DIAMOND'
  | 'PLATINUM'
  | 'GOLD'
  | 'SILVER'
  | 'BRONZE'
  | 'IRON';

export type LoLRank = 'V' | 'IV' | 'III' | 'II' | 'I';

function tierToPoint(tier: LoLTier): number {
  switch (tier) {
    case "CHALLENGER":
      return 9
    case "GRANDMASTER":
      return 8
    case "MASTER":
      return 7
    case "DIAMOND":
      return 6
    case "PLATINUM":
      return 5
    case "GOLD":
      return 4
    case "SILVER":
      return 3
    case "BRONZE":
      return 2
    case "IRON":
      return 1
  }
}

function rankToPoint(rank: LoLRank): number {
  switch (rank) {
    case "I":
      return 5
    case "II":
      return 4
    case "III":
      return 3
    case "IV":
      return 2
    case "V":
      return 1
  }
}

export function tierCompare(beforeTier: Map<string, string | number | boolean>, afterTier: Map<string, string | number | boolean>): boolean {
  if (!beforeTier)
    return true;

  const beforeTierPoint = tierToPoint(beforeTier.get('tier') as LoLTier);
  const beforeRankPoint = rankToPoint(beforeTier.get('rank') as LoLRank);
  const beforeLeaguePoints = beforeTier.get('leaguePoints');

  const afterTierPoint = tierToPoint(afterTier.get('tier') as LoLTier);
  const afterRankPoint = rankToPoint(afterTier.get('rank') as LoLRank);
  const afterLeaguePoints = afterTier.get('leaguePoints');

  if (beforeTierPoint < afterTierPoint) return true;
  if (beforeTierPoint === afterTierPoint && beforeRankPoint < afterRankPoint) return true;
  if (beforeTierPoint === afterTierPoint && beforeRankPoint === afterRankPoint && beforeLeaguePoints < afterLeaguePoints) return true;
  return false;
}
