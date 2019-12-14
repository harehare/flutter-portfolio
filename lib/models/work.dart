class Work {
  String name;
  String description;
  String imageURL;
  String url;
  List<String> tech;
  Work({this.name, this.description, this.imageURL, this.url, this.tech});

  factory Work.fromJson(Map<String, dynamic> parsedJson) {
    return Work(
      name: parsedJson['name'],
      description: parsedJson['description'],
      imageURL: parsedJson['imageURL'],
      url: parsedJson['url'],
      tech: parsedJson['tech'].cast<String>().toList(),
    );
  }
}
