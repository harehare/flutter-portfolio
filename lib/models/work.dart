class Work {
  String name;
  String description;
  String imageURL;
  String url;
  List<String> tech;
  Work(
      {required this.name,
      required this.description,
      required this.imageURL,
      required this.url,
      required this.tech});

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
