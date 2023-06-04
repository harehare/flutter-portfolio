import 'dart:async';

import 'package:graphql/client.dart';
import '../graphql/queries.dart' as queries;

class BlogRepository {
  final GraphQLClient client;

  BlogRepository({required this.client});

  Future<QueryResult> entries(int skip, int limit) async {
    final QueryOptions options = QueryOptions(
      document: gql(queries.entries),
      variables: <String, dynamic>{
        'skip': skip,
        'limit': limit,
      },
    );

    return await client.query(options);
  }

  Future<QueryResult> entry(String entryId) async {
    final QueryOptions options = QueryOptions(
      document: gql(queries.entry),
      variables: <String, dynamic>{
        'entryId': entryId,
      },
    );

    return await client.query(options);
  }
}
