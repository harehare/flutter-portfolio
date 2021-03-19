class Content {
  String name;
  String? imageURL;
  String? file;
  Content({required this.name, this.imageURL, this.file});

  factory Content.fromJson(Map<String, dynamic> parsedJson) {
    return Content(
        name: parsedJson['name'],
        imageURL: parsedJson['imageURL'],
        file: parsedJson['file']);
  }
}
