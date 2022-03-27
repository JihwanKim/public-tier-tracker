class PUBGUserData {
// {"name":"cowboy_http","shardId":"kakao","stats":null,"patchVersion":"","titleId":"pubg"}
  late final String name;
  late final String shardId;
  late final String patchVersion;
  late final String titleId;
  late final int latestUpdate;

  String toBeforeTime() {
    final DateTime now = DateTime.now();
    final beforeRunningTimeInMill = now.millisecondsSinceEpoch - latestUpdate;
    if (beforeRunningTimeInMill < 1000 * 60) {
      return '조금 전';
    }
    if (beforeRunningTimeInMill < 1000 * 60 * 60) {
      return '${beforeRunningTimeInMill / 1000 ~/ 60}분 전';
    }

    if (beforeRunningTimeInMill < 1000 * 60 * 60 * 24) {
      return '${beforeRunningTimeInMill / 1000 ~/ 60 ~/ 60}시간 전';
    }
    if (beforeRunningTimeInMill < 1000 * 60 * 60 * 24 * 30) {
      return '${beforeRunningTimeInMill / 1000 ~/ 60 ~/ 60 ~/ 24}일 전';
    }
    return '${beforeRunningTimeInMill / 1000 ~/ 60 ~/ 60 ~/ 24 ~/ 30}달 전';
  }

  static PUBGUserData fromMap(Map<String, dynamic> item) {
    final newItem = PUBGUserData()
      ..name = item['name']!
      ..shardId = item['shardId']!
      ..patchVersion = item['patchVersion']!
      ..titleId = item['titleId']!
      ..latestUpdate = item['latestUpdate']!;
    return newItem;
  }
}
