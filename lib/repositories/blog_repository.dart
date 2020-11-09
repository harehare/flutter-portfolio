import 'dart:async';

import 'package:flutter/widgets.dart';
import "package:gql/language.dart";
import 'package:graphql/client.dart';
import '../graphql/queries.dart' as queries;

class BlogRepository {
  final GraphQLClient client;

  BlogRepository({@required this.client}) : assert(client != null);

  Future<QueryResult> entries(int skip, int limit) async {
    final QueryOptions _options = QueryOptions(
      documentNode: parseString(queries.entries),
      variables: <String, dynamic>{
        'skip': skip,
        'limit': limit,
      },
    );

    return await client.query(_options);
  }

  Future<QueryResult> entry(String entryId) async {
    final QueryOptions _options = QueryOptions(
      documentNode: parseString(queries.entry),
      variables: <String, dynamic>{
        'entryId': entryId,
      },
    );

    return await client.query(_options);
  }
}
