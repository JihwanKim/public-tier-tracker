import 'package:flutter/material.dart';

class CommonScaffold extends StatelessWidget {
  final Widget? body;

  const CommonScaffold({this.body, Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: body,
    );
  }
}
