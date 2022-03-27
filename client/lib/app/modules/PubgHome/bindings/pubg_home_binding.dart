import 'package:get/get.dart';

import '../controllers/pubg_home_controller.dart';

class PubgHomeBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<PubgHomeController>(
      () => PubgHomeController(),
    );
  }
}
