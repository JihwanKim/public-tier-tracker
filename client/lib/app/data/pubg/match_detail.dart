import 'package:flutter/material.dart';

class PUBGMatchDetail {
  late final String mapName;
  late final int duration;
  late final DateTime createdAt;
  late final String gameMode;
  late final String seasonState;
  late final bool isCustomMatch;
  late final String matchType;
  late final List<List<PUBGMatchDetailForUser>> rosters;

  String matchTypeToStr() {
    if (matchType == 'competitive') {
      return '랭크';
    }

    if (matchType == 'official') {
      return '일반';
    }

    return matchType;
  }

  Color matchTypeColor() {
    if (matchType == 'competitive') {
      return Colors.redAccent;
    }

    if (matchType == 'official') {
      return Colors.lightBlueAccent;
    }

    return Colors.white;
  }

  String getBeforeTime() {
    final currentDateTime = DateTime.now();
    final diffSeconds = currentDateTime.difference(createdAt);
    if (diffSeconds.inSeconds < 60) {
      return '${diffSeconds.inSeconds}초 전';
    }
    if (diffSeconds.inMinutes < 60) {
      return '${diffSeconds.inMinutes}분 전';
    }
    if (diffSeconds.inHours < 24) {
      return '${diffSeconds.inHours}시간 전';
    }
    if (diffSeconds.inDays < 60) {
      return '${diffSeconds.inDays}일 전';
    }
    return '${(diffSeconds.inDays ~/ 30)}달 전';
  }

  static PUBGMatchDetail fromMap(Map<String, dynamic> item) {
    final newItem = PUBGMatchDetail()
      ..mapName = item['mapName']
      ..duration = item['duration']
      ..createdAt = DateTime.parse(item['createdAt'])
      ..gameMode = item['gameMode']
      ..seasonState = item['seasonState']
      ..isCustomMatch = item['isCustomMatch']
      ..matchType = item['matchType']
      ..rosters = item['rosters']
          .map((roster) {
            return roster
                .toList()
                .cast<Map<String, dynamic>>()
                .map((user) => PUBGMatchDetailForUser.fromMap(user))
                .toList()
                .cast<PUBGMatchDetailForUser>();
          })
          .toList()
          .cast<List<PUBGMatchDetailForUser>>();
    return newItem;
  }
}

class PUBGMatchDetailForUser {
  late final String type;
  late final String shardId;
  late final int kills;
  late final int headshotKills;
  late final int winPlace;
  late final int heals;
  late final double walkDistance;
  late final double longestKill;
  late final int vehicleDestroys;
  late final int DBNOs;
  late final double rideDistance;
  late final String deathType;
  late final int revives;
  late final int assists;
  late final int killPlace;
  late final int killStreaks;
  late final double swimDistance;
  late final String name;
  late final int weaponsAcquired;
  late final int roadKills;
  late final int boosts;
  late final double timeSurvived;
  late final double damageDealt;
  late final String playerId;
  late final int teamKills;
  late final String id;

  static PUBGMatchDetailForUser fromMap(Map<String, dynamic> item) {
    final newItem = PUBGMatchDetailForUser()
      ..type = item['type']
      ..shardId = item['attributes']['shardId']
      ..kills = item['attributes']['stats']['kills']
      ..headshotKills = item['attributes']['stats']['headshotKills']
      ..winPlace = item['attributes']['stats']['winPlace']
      ..walkDistance = item['attributes']['stats']['walkDistance']
      ..longestKill = item['attributes']['stats']['longestKill']
      ..vehicleDestroys = item['attributes']['stats']['vehicleDestroys']
      ..rideDistance = item['attributes']['stats']['rideDistance']
      ..deathType = item['attributes']['stats']['deathType']
      ..revives = item['attributes']['stats']['revives']
      ..assists = item['attributes']['stats']['assists']
      ..killPlace = item['attributes']['stats']['killPlace']
      ..killStreaks = item['attributes']['stats']['killStreaks']
      ..swimDistance = item['attributes']['stats']['swimDistance']
      ..name = item['attributes']['stats']['name']
      ..weaponsAcquired = item['attributes']['stats']['weaponsAcquired']
      ..roadKills = item['attributes']['stats']['roadKills']
      ..boosts = item['attributes']['stats']['boosts']
      ..timeSurvived = item['attributes']['stats']['timeSurvived']
      ..damageDealt = item['attributes']['stats']['damageDealt']
      ..playerId = item['attributes']['stats']['playerId']
      ..teamKills = item['attributes']['stats']['teamKills']
      ..id = item['id'];
    return newItem;
  }
}
