import 'package:client/app/common_widget/common_padding.dart';
import 'package:client/app/common_widget/common_scaffold.dart';
import 'package:client/app/common_widget/common_search_bar.dart';
import 'package:client/app/common_widget/common_web.dart';
import 'package:client/app/routes/app_pages.dart';
import 'package:client/app/utils/get_logo.dart';
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/pubg_home_controller.dart';
import 'dart:html' as html;

class PubgHomeView extends StatelessWidget {
  _build(BuildContext context) {
    if (GetPlatform.isWeb) {
      return CommonWeb(
        gameName: 'PUBG',
        body: _PubgHomeForWeb(),
      );
    }
    return const CommonScaffold(
        body: Center(
      child: Text('not supported'),
    ));
  }

  @override
  Widget build(BuildContext context) {
    return CommonScaffold(body: _build(context));
  }
}

class _PubgHomeForWeb extends GetView<PubgHomeController> {
  void onSearch(String text) {
    Get.toNamed(Routes.PUBG_SEARCH_RESULT, parameters: {
      'platform': controller.selectedPlatform.value,
      'name': text
    },);
  }

  void onSearchTextChange(String text) {
    controller.updateSearchText(text);
  }

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    final logoHeight = Get.height * 1 / 3;
    return SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          const PaddingHeight(height: 20),
          InkWell(
            onTap: () {
              html.window.location.reload();
            },
            child: SizedBox(
              height: logoHeight,
              child: CustomImage.getAnyImage(),
            ),
          ),
          const PaddingHeight(height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Obx(
                () => DropdownButton(
                  value: controller.selectedPlatform.value,
                  items: [
                    DropdownMenuItem(
                      child: Text('STEAM'),
                      value: 'steam',
                    ),
                    DropdownMenuItem(
                      child: Text('KAKAO'),
                      value: 'kakao',
                    ),
                  ],
                  onChanged: (item) {
                    controller.setPlatform(item.toString());
                  },
                ),
              ),
              const PaddingWidth(width: 12),
              CommonSearchBar(
                hintText: '배틀그라운드 닉네임',
                onChange: onSearchTextChange,
                onSearch: onSearch,
              ),
            ],
          ),
          const PaddingHeight(height: 12),
        ],
      ),
    );
  }
}
