import 'package:client/app/common_widget/common_padding.dart';
import 'package:client/app/common_widget/common_scaffold.dart';
import 'package:client/app/common_widget/common_web.dart';
import 'package:client/app/data/pubg/match_detail.dart';
import 'package:client/app/data/pubg/match_simple.dart';
import 'package:client/app/data/pubg/user.dart';
import 'package:client/app/routes/app_pages.dart';
import 'package:client/app/utils/get_logo.dart';
import 'package:expandable/expandable.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/pubg_search_result_controller.dart';

double getWebMaxWidth() {
  return 1000;
}

String getPlatform() {
  final params = Get.parameters;
  return params['platform']!;
}

String getName() {
  final params = Get.parameters;
  return params['name']!;
}

class PubgSearchResultView extends GetView<PubgSearchResultController> {
  onLoad() {
    controller.searchUser(getPlatform(), getName());
  }

  @override
  Duration get transitionDuration => const Duration(milliseconds: 0);

  @override
  Widget build(BuildContext context) {
    // controller.searchUser(params['platform'], params['name']);
    Future.delayed(const Duration(milliseconds: 10), () => {onLoad()});
    if (GetPlatform.isWeb) {
      return CommonWeb(
        gameName: 'PUBG',
        body: _forWeb(context),
      );
    }
    return const CommonScaffold(
        body: Center(
      child: Text('not supported'),
    ));
  }

  Widget buildLatestTeamRank(final double width) {
    final restSize =
        width < 800 ? width : (width > 1000 ? 1000 : width - 500 - 10);
    final perCardWidth = restSize / 6;
    final int itemPerLine = width < 800 ? 10 : 5;

    return Obx(
      () => Container(
        width: double.infinity,
        padding: const EdgeInsets.all(4),
        child: controller.isMatchSimplesLoading
            ? const CupertinoActivityIndicator()
            : GridView.builder(
                shrinkWrap: true,
                itemCount: controller.matchSimples.length, //item 개수
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: itemPerLine, //1 개의 행에 보여줄 item 개수
                  childAspectRatio: 1, //item 의 가로 1, 세로 2 의 비율
                  mainAxisSpacing: 2, //수평 Padding
                  crossAxisSpacing: 2, //수직 Padding
                ),
                itemBuilder: (context, index) {
                  final match = controller.matchSimples[index];
                  final matchId = match.id;
                  return Card(
                    child: Obx(
                      () => Container(
                        color: controller.matchDetailExist(matchId)
                            ? (Colors.transparent)
                            : Colors.transparent,
                        width: perCardWidth,
                        height: perCardWidth,
                        child: Center(
                            child: controller.matchDetailExist(matchId)
                                ? Text(controller.teamRank(matchId).toString())
                                : const CupertinoActivityIndicator()),
                      ),
                    ),
                  );
                },
              ),
      ),
    );
  }

  _forWeb(context) {
    final width = MediaQuery.of(context).size.width;
    return SingleChildScrollView(
      child: Obx(
        () => controller.isSearch || !controller.isInit
            ? const Center(child: CupertinoActivityIndicator())
            : Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Expanded(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        _PUBGUserInfo(user: controller.user),
                        width < 800
                            ? Column(
                                children: [
                                  buildLatestTeamRank(width),
                                  _PUBGUserMatches(),
                                ],
                              )
                            : SizedBox(
                                width: getWebMaxWidth(),
                                child: Row(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Expanded(
                                      child: Container(
                                        padding: const EdgeInsets.all(4),
                                        child: Column(
                                          children: [
                                            buildLatestTeamRank(width),
                                          ],
                                        ),
                                      ),
                                    ),
                                    SizedBox(
                                      width: 500,
                                      child: _PUBGUserMatches(),
                                    ),
                                  ],
                                ),
                              ),
                      ],
                    ),
                  ),
                ],
              ),
      ),
    );
  }
}

class _PUBGUserInfo extends StatelessWidget {
  final PUBGUserData user;

  const _PUBGUserInfo({required this.user, Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final controller = Get.find<PubgSearchResultController>();
    return Card(
      child: Container(
        color: Colors.black87,
        width: getWebMaxWidth(),
        // height: screenHeight * 1 / 3,
        child: Padding(
          padding: const EdgeInsets.all(15),
          child: Row(
            children: [
              Expanded(
                child: Row(
                  children: [
                    SizedBox(
                      width: 120,
                      height: 120,
                      child: CustomImage.getAnyImage(),
                    ),
                    const PaddingWidth(width: 15),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          user.name,
                          style: const TextStyle(
                              fontSize: 27,
                              fontWeight: FontWeight.w900,
                              color: Colors.white),
                        ),
                        const PaddingHeight(height: 16),
                        InkWell(
                          onTap: () {
                            controller.refreshUserStat();
                          },
                          child: Container(
                            padding: const EdgeInsets.all(4),
                            decoration: BoxDecoration(
                              color: Colors.black45,
                              border: Border.all(
                                color: Colors.white,
                                width: 2,
                              ),
                            ),
                            child: Row(
                              children: const [
                                Icon(
                                  Icons.refresh,
                                  color: Colors.white,
                                ),
                                PaddingWidth(width: 4),
                                Text(
                                  '전적갱신',
                                  style: TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                        const PaddingHeight(height: 8),
                        Text(
                          '최근 업데이트: ${user.toBeforeTime()}',
                          style: const TextStyle(
                            color: Colors.white,
                            fontSize: 12,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
              Container(
                height: 120,
                child: Row(
                  children: [
                    Column(
                      children: [
                        Text(
                          user.shardId,
                          style: const TextStyle(color: Colors.white),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _PUBGUserMatches extends StatelessWidget {
  // ignore: prefer_const_constructors_in_immutables
  _PUBGUserMatches({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final controller = Get.find<PubgSearchResultController>();
    return Obx(
      () => ListView.builder(
        shrinkWrap: true,
        physics: const NeverScrollableScrollPhysics(),
        itemCount: controller.matchSimples.length,
        itemBuilder: (context, index) {
          return _PubgMatchDetail(match: controller.matchSimples[index]);
        },
      ),
    );
  }
}

class _PubgMatchDetail extends StatelessWidget {
  late bool onInit = false;
  late int _selectedIdx = 0;
  final PUBGMatchSimple match;
  final controller = Get.find<PubgSearchResultController>();
  final expandableController = ExpandableController();

  _PubgMatchDetail({required this.match, Key? key}) : super(key: key);

  void load() {
    final controller = Get.find<PubgSearchResultController>();
    controller.getMatchDetail(getPlatform(), match);
  }

  void runInit() {
    if (onInit) return;
    onInit = true;
    Future.delayed(const Duration(milliseconds: 10), () => {load()});
  }

  buildSimple(double width, String key, String value) {
    return Container(
      width: width,
      child: Column(
        children: [
          Text(
            value,
            style: const TextStyle(fontSize: 12),
          ),
          Text(
            key,
            style: const TextStyle(fontSize: 10),
          ),
        ],
      ),
    );
  }

  // late final String mapName;
  // late final int duration;
  // late final DateTime createdAt;
  // late final String gameMode;
  // late final String seasonState;

  Widget buildTeamRank(int rank, List<PUBGMatchDetailForUser> teamUsers) {
    int totalKill = 0;
    for (var user in teamUsers) {
      totalKill += user.kills;
    }

    return Container(
      padding: const EdgeInsets.all(4),
      color: rank == controller.teamRank(match.id)
          ? Colors.greenAccent
          : Colors.transparent,
      child: Row(
        children: [
          SizedBox(width: 20, child: Center(child: Text(rank.toString()))),
          Expanded(
            child: Wrap(
              children: teamUsers
                  .map(
                    (user) => Card(
                      child: InkWell(
                        onTap: () {
                          Get.toNamed(Routes.PUBG_SEARCH_RESULT, parameters: {
                            'platform': getPlatform(),
                            'name': user.name
                          });
                        },
                        child: Container(
                          padding: const EdgeInsets.all(4),
                          child: Text(user.name),
                        ),
                      ),
                    ),
                  )
                  .toList(),
            ),
          ),
          Container(
              padding: const EdgeInsets.all(4),
              width: 24,
              child: Text('$totalKill')),
        ],
      ),
    );
  }

  buildGameDetail(PUBGMatchDetail gameDetail) {
    int _rank = 1;
    return Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            const Text('전체'),
            const Text('팀'),
          ],
        ),
        // content
        Column(
          children: [
            Container(
              height: 200,
              width: double.infinity,
              child: SingleChildScrollView(
                child: Column(
                  children: gameDetail.rosters
                      .map((teamUsers) => buildTeamRank(_rank++, teamUsers))
                      .toList(),
                ),
              ),
            )
          ],
        ),
      ],
    );
  }

  buildGameInfo(PUBGMatchDetail gameDetail) {
    return Row(
      children: [
        Container(
          color: gameDetail.matchTypeColor(),
          padding: const EdgeInsets.all(4),
          width: 72,
          child: Column(
            children: [
              Text(
                gameDetail.matchTypeToStr(),
                style:
                    const TextStyle(fontWeight: FontWeight.bold, fontSize: 18),
              ),
              Text(
                gameDetail.getBeforeTime(),
                style: const TextStyle(fontSize: 12),
              ),
            ],
          ),
        ),
        const PaddingWidth(width: 10),
        Expanded(child: Text('${controller.teamRank(match.id).toString()} 등')),
        buildSimple(34, '킬', '${controller.matchUserInfo(match.id).kills}'),
        const PaddingWidth(width: 10),
        buildSimple(34, '데미지',
            '${controller.matchUserInfo(match.id).damageDealt.toInt()}'),
        const PaddingWidth(width: 10),
        buildSimple(50, '이동거리',
            '${(controller.matchUserInfo(match.id).walkDistance + controller.matchUserInfo(match.id).rideDistance + controller.matchUserInfo(match.id).swimDistance).toInt() ~/ 10 / 100}km'),
        const PaddingWidth(width: 20),
        const Icon(Icons.arrow_drop_down_circle_outlined),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    runInit();
    final controller = Get.find<PubgSearchResultController>();
    return Card(
      child: Obx(
        () => InkWell(
          onTap: () {
            expandableController.toggle();
            controller.gameMatchShowDetailUpdate(match.id);
          },
          child: Container(
            height: controller.matchDetailExist(match.id) ? null : 100,
            padding: const EdgeInsets.all(8),
            child: controller.matchDetailExist(match.id)
                ? ExpandableNotifier(
                    controller: expandableController,
                    child: Expandable(
                        collapsed:
                            buildGameInfo(controller.matchDetail(match.id)),
                        expanded: Column(
                          children: [
                            buildGameInfo(controller.matchDetail(match.id)),
                            controller.getShowMatchDetailOnOff(match.id)
                                ? buildGameDetail(
                                    controller.matchDetail(match.id))
                                : const CupertinoActivityIndicator(),
                          ],
                        )),
                  )
                : const CupertinoActivityIndicator(),
          ),
        ),
      ),
    );
  }
}
