const String entries = r'''
query entries($skip: Int, $limit: Int) {
 	entries(skip: $skip, limit: $limit) {
    id
    title
    publishedAt
  }
}
''';

const String entry = r'''
query entry($entryId: String){
 	entry(entryId: $entryId) {
    id
    title
    body
    publishedAt
  }
}
''';
