import 'package:flutter/cupertino.dart';

class PaddingHeight extends StatelessWidget {
  final double height;

  const PaddingHeight({required this.height, Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: height,
    );
  }
}

class PaddingWidth extends StatelessWidget {
  final double width;

  const PaddingWidth({required this.width, Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: width,
    );
  }
}
