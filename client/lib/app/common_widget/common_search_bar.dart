import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class CommonSearchBar extends StatelessWidget {
  final String hintText;
  final Function(String) onChange;
  final Function(String) onSearch;

  const CommonSearchBar(
      {required this.hintText,
      required this.onChange,
      required this.onSearch,
      Key? key})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    // profileWidth = Get.width < 1000.0
    //     ? Get.width
    //     : (Get.width * 2 / 3 < 1000.0 ? 1000.0 : Get.width * 2 / 3);
    final width = Get.width > 250 ? 250.0 : Get.width;
    return SizedBox(
      width: width,
      child: TextField(
        onSubmitted: onSearch,
        onChanged: onChange,
        textAlign: TextAlign.center,
        decoration: InputDecoration(
          contentPadding: const EdgeInsets.symmetric(vertical: 1),
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(4)),
          hintText: hintText,
        ),
      ),
    );
  }
}
