import 'package:client/app/game/pubg/apis/pubg_api.dart';
import 'package:get/get.dart';

class PubgHomeController extends GetxController {
  //TODO: Implement PubgHomeController

  final count = 0.obs;
  final selectedPlatform = 'steam'.obs;
  final searchText = ''.obs;

  @override
  void onInit() {
    super.onInit();
  }

  @override
  void onReady() {
    super.onReady();
  }

  @override
  void onClose() {}

  void increment() => count.value++;

  void setPlatform(String platform) {
    selectedPlatform.value = platform;
  }

  void updateSearchText(String text) {
    searchText.value = text;
  }
}
