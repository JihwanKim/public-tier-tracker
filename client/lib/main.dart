import 'package:flutter/material.dart';

import 'package:get/get.dart';

import 'app/routes/app_pages.dart';

void main() {
  runApp(
    GetMaterialApp(
      title: "TierTracker",
      initialRoute: AppPages.INITIAL,
      getPages: AppPages.routes,
      // web setting?
      defaultTransition: Transition.noTransition,
      //this would be the solution
      transitionDuration: Duration(seconds: 0),
    ),
  );
}
