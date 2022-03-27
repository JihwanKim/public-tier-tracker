import 'package:client/app/data/pubg/match_detail.dart';
import 'package:client/app/data/pubg/match_simple.dart';
import 'package:client/app/data/pubg/user.dart';
import 'package:client/app/game/pubg/apis/pubg_api.dart';
import 'package:get/get.dart';

class PubgSearchResultController extends GetxController {
  //TODO: Implement PubgSearchResultController

  final _currentUser = PUBGUserData().obs;
  final _userMatchSimples = <PUBGMatchSimple>[].obs;
  final _isSearchLoading = false.obs;
  final _isMatchSimplesLoading = false.obs;

  final _matchDetailMap = <String, PUBGMatchDetail>{}.obs;
  final _matchUserTeamRank = <String, int>{}.obs;
  final _matchUserTeamInfo = <String, List<PUBGMatchDetailForUser>>{}.obs;
  final _matchUserInfo = <String, PUBGMatchDetailForUser>{}.obs;
  final _matchDetailRequestStatesMap = <String, bool>{}.obs;

  final _showMatchDetailOnOff = <String, bool>{}.obs;

  final _isInitUser = false.obs;

  get isSearch => _isSearchLoading.value;

  get isInit => _isInitUser.value;

  get user => _currentUser.value;

  List<PUBGMatchSimple> get matchSimples => _userMatchSimples;

  get isMatchSimplesLoading => _isMatchSimplesLoading.value;

  bool matchDetailExist(String id) => _matchDetailMap[id] != null;

  PUBGMatchDetail matchDetail(String id) => _matchDetailMap[id]!;

  int teamRank(String id) => _matchUserTeamRank[id]!;

  List<PUBGMatchDetailForUser> matchTeamInfo(String id) =>
      _matchUserTeamInfo[id]!;

  PUBGMatchDetailForUser matchUserInfo(String id) => _matchUserInfo[id]!;

  bool getShowMatchDetailOnOff(String id) => _showMatchDetailOnOff[id] ?? false;

  @override
  void onInit() {
    super.onInit();
    print('hey! init');
  }

  @override
  void onReady() {
    super.onReady();
    print('hey! ready');
  }

  @override
  void onClose() {}


  // TODO : searchUser / refreshUserStat 통합할방법 고민하기
  Future<void> searchUser(String platform, String name) async {
    if (_isSearchLoading.value) return;
    if (_isInitUser.value && name == _currentUser.value.name) return;
    // if (_currentUser.value.name != null) return;
    _isSearchLoading.value = true;
    try {
      final user = await PubgAPI.users(platform, name);
      _currentUser.value = user;
      _isInitUser.value = true;
      searchUserMatches(platform, name, false);
    } finally {
      _isSearchLoading.value = false;
    }
  }

  Future<void> refreshUserStat() async {
    if (_isSearchLoading.value) return;
    // if (_currentUser.value.name != null) return;
    _isSearchLoading.value = true;
    try {
      final platform = _currentUser.value.shardId;
      final name = _currentUser.value.name;

      final user = await PubgAPI.users(platform, name, refresh: true);
      _currentUser.value = user;
      _isInitUser.value = true;
      searchUserMatches(platform, name, false);
    } finally {
      _isSearchLoading.value = false;
    }
  }

  Future searchUserMatches(
      String platform, String name, bool pagination) async {
    if (_isMatchSimplesLoading.value) return;
    _isMatchSimplesLoading.value = true;
    if (!pagination) {
      _userMatchSimples.clear();
    }
    try {
      final allItems = await PubgAPI.userMatchIds(platform, name,
          pagination ? _userMatchSimples.last.sort : '999999999999999');
      for (var element in allItems) {
        _userMatchSimples.add(element);
      }
    } finally {
      _isMatchSimplesLoading.value = false;
    }
  }

  Future getMatchDetail(
      String platform, final PUBGMatchSimple matchSimple) async {
    if (_matchDetailRequestStatesMap[matchSimple.id] != null &&
        _matchDetailRequestStatesMap[matchSimple.id]!) return;
    if (_matchDetailMap[matchSimple.id] != null) return;
    _matchDetailRequestStatesMap[matchSimple.id] = true;
    try {
      final allItems = await PubgAPI.matchesDetail(platform, [matchSimple.id]);
      if (allItems.isNotEmpty) {
        _matchDetailMap[matchSimple.id] = allItems.first;
        _getTeamRank(matchSimple.id, allItems.first);
      }
    } finally {
      _matchDetailRequestStatesMap[matchSimple.id] = false;
    }
  }

  void _getTeamRank(final String matchId, PUBGMatchDetail match) {
    int rank = 1;
    for (List<PUBGMatchDetailForUser> users in match.rosters) {
      for (PUBGMatchDetailForUser user in users) {
        if (user.name == _currentUser.value.name) {
          _matchUserTeamRank[matchId] = rank;
          _matchUserInfo[matchId] = user;
          _matchUserTeamInfo[matchId] = users;
          return;
        }
      }
      rank++;
    }
  }

  void gameMatchShowDetailUpdate(final String matchId) {
    if (_showMatchDetailOnOff[matchId] ?? false) return;
    _showMatchDetailOnOff[matchId] = true;
  }
}
