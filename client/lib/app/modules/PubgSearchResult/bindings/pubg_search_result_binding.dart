import 'package:get/get.dart';

import '../controllers/pubg_search_result_controller.dart';

class PubgSearchResultBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<PubgSearchResultController>(
      () => PubgSearchResultController(),
    );
  }
}
