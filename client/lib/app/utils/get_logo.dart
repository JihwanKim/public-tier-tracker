import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';

abstract class CustomImage {
  static Widget getAnyImage() {
    if (kDebugMode) return Image.asset('assets/cat.jpeg');
    return Image.asset('assets/cat.jpeg');
  }
}
