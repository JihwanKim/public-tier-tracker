import 'package:client/app/common_widget/common_scaffold.dart';
import 'package:client/app/routes/app_pages.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class CommonWeb extends StatelessWidget {
  final Widget body;
  final String gameName;

  const CommonWeb({required this.body, required this.gameName, Key? key})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return CommonScaffold(
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Container(
            width: double.infinity,
            padding: EdgeInsets.all(8.0),
            child: Wrap(
              children: [
                FittedBox(
                  child: InkWell(
                    onTap: () {
                      Get.toNamed(Routes.PUBG_HOME);
                    },
                    child: Text(
                      "Tier Tracker: $gameName",
                      style: const TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 18,
                          color: Colors.white),
                    ),
                  ),
                ),
              ],
            ),
            color: Colors.blueAccent,
            // width: double.infinity,
          ),
          Expanded(child: body),
        ],
      ),
    );
  }
}
