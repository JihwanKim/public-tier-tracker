class PUBGMatchSimple {
  late final String sort;
  late final String type;
  late final String id;

  static PUBGMatchSimple fromMap(Map<String, dynamic> item) {
    final newItem = PUBGMatchSimple()
      ..sort = item['sort']!
      ..type = item['type']!
      ..id = item['id']!;
    return newItem;
  }
}
