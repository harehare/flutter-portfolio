class About {
  String name;
  String description;
  String imageURL;
  String githubURL;
  String twitterURL;
  String facebookURL;
  String slideshareURL;
  String stackoverflowURL;
  String linkedinURL;
  String mailAddress;
  About(
      {this.name,
      this.description,
      this.imageURL,
      this.githubURL,
      this.twitterURL,
      this.facebookURL,
      this.slideshareURL,
      this.stackoverflowURL,
      this.linkedinURL,
      this.mailAddress});
  factory About.fromJson(Map<String, dynamic> parsedJson) {
    return About(
        name: parsedJson['name'],
        description: parsedJson['description'],
        imageURL: parsedJson['imageURL'],
        githubURL: parsedJson['githubURL'],
        twitterURL: parsedJson['twitterURL'],
        facebookURL: parsedJson['facebookURL'],
        slideshareURL: parsedJson['slideshareURL'],
        stackoverflowURL: parsedJson['stackoverflowURL'],
        linkedinURL: parsedJson['linkedinURL'],
        mailAddress: parsedJson['mailAddress']);
  }
}
