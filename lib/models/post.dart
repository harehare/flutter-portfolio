class Post {
  String name;
  String imageURL;
  String file;
  Post({this.name, this.imageURL, this.file});

  factory Post.fromJson(Map<String, dynamic> parsedJson) {
    return Post(
        name: parsedJson['name'],
        imageURL: parsedJson['imageURL'],
        file: parsedJson['file']);
  }
}
