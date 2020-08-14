import "package:intl/intl.dart";

class Post {
  String id;
  String title;
  String body;
  DateTime publishedAt;
  bool isMarkdown;
  Post({this.id, this.title, this.body, this.publishedAt, this.isMarkdown});

  final formatter = new DateFormat('EEE, dd MMM yyyy');

  String publishedAtString() {
    return formatter.format(publishedAt);
  }

  factory Post.fromJson(Map<String, dynamic> parsedJson) {
    return Post(
      id: parsedJson['id'],
      title: parsedJson['title'],
      body: parsedJson['body'],
      publishedAt: parsedJson.containsKey('publishedAt')
          ? DateTime.parse(parsedJson['publishedAt'])
          : DateTime.now(),
      isMarkdown: parsedJson.containsKey('isMarkdown')
          ? parsedJson['isMarkdown']
          : false,
    );
  }
}
