import "package:intl/intl.dart";

class Post {
  String id;
  String title;
  String? body;
  DateTime publishedAt;
  bool isMarkdown;
  String? url;
  Post(
      {required this.id,
      required this.title,
      this.body,
      required this.publishedAt,
      required this.isMarkdown,
      this.url});

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
      isMarkdown: true,
      url: parsedJson.containsKey('url') ? parsedJson['url'] : null,
    );
  }
}
