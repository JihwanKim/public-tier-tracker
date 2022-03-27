import 'dart:convert';

import 'package:client/app/data/pubg/match_detail.dart';
import 'package:client/app/data/pubg/match_simple.dart';
import 'package:client/app/data/pubg/user.dart';
import 'package:http/http.dart' as http;

const _developUrl = '{required:developURL}';

Future<Map<String, dynamic>> _commonRequester(String url,
    {Map<String, dynamic>? params, Map<String, dynamic>? body}) async {
  final Uri uri = Uri.parse(url);
  final newUri = Uri(
      scheme: uri.scheme,
      host: uri.host,
      path: uri.path,
      queryParameters: params);
  final rs = await http.get(newUri);
  if (rs.statusCode != 200) {
    throw 'request fail!';
  }
  return Map.from(jsonDecode(rs.body));
}

abstract class PubgAPI {
  static Future<PUBGUserData> users(String platform, String name,
      {refresh = false}) async {
    final url = '$_developUrl/pubg/$platform/users/$name';
    final data =
        await _commonRequester(url, params: {'refresh': refresh.toString()});

    return PUBGUserData.fromMap(data);
  }

  static Future<List<PUBGMatchSimple>> userMatchIds(
      String platform, String name, String sort) async {
    final url = '$_developUrl/pubg/$platform/users/$name/matches';
    final data =
        await _commonRequester(url, params: {'sort': '999999999999999'});
    final matchesSimple = data['matchesSimple'].toList();

    return matchesSimple
        .map((ele) => PUBGMatchSimple.fromMap(ele))
        .toList()
        .cast<PUBGMatchSimple>()
        .toList();
  }

  static Future<List<PUBGMatchDetail>> matchesDetail(
      String platform, List<String> matchIds) async {
    final url = '$_developUrl/pubg/$platform/matches';
    final data =
        await _commonRequester(url, params: {'matchIds': matchIds.join(',')});
    final matchesSimple = data['matches'].toList();

    return matchesSimple
        .map((ele) => PUBGMatchDetail.fromMap(ele))
        .toList()
        .cast<PUBGMatchDetail>()
        .toList();
  }
}
