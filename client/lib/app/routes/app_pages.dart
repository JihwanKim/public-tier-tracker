import 'package:get/get.dart';

import '../modules/PubgHome/bindings/pubg_home_binding.dart';
import '../modules/PubgHome/views/pubg_home_view.dart';
import '../modules/PubgSearchResult/bindings/pubg_search_result_binding.dart';
import '../modules/PubgSearchResult/views/pubg_search_result_view.dart';
import '../modules/home/bindings/home_binding.dart';
import '../modules/home/views/home_view.dart';

part 'app_routes.dart';

class AppPages {
  AppPages._();

  static const INITIAL = Routes.PUBG_HOME;

  static final routes = [
    GetPage(
      name: _Paths.HOME,
      page: () => HomeView(),
      binding: HomeBinding(),
    ),
    GetPage(
      name: _Paths.PUBG_HOME,
      page: () => PubgHomeView(),
      binding: PubgHomeBinding(),
    ),
    GetPage(
      name: _Paths.PUBG_SEARCH_RESULT,
      page: () => PubgSearchResultView(),
      binding: PubgSearchResultBinding(),
    ),
  ];
}
