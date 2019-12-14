import 'package:flutter/material.dart';
import 'package:flutter_portfolio/models/models.dart';

class ContentItem extends StatelessWidget {
  final Content content;

  ContentItem({
    Key key,
    @required this.content,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    return InkWell(
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(16.0),
          color: Color(0xDD222222),
        ),
        padding: EdgeInsets.all(16.0),
        margin: EdgeInsets.all(16.0),
        child: ListTile(
          leading: content.imageURL == ""
              ? Icon(Icons.web, size: 48)
              : Image.network(content.imageURL,
                  width: 80, height: 80, fit: BoxFit.contain),
          title: Text(content.name,
              style: TextStyle(fontSize: 20.0, color: theme.primaryColor)),
        ),
      ),
      onTap: () {
        final file = content.file;
        Navigator.of(context).pushNamed('skills/$file');
      },
    );
  }
}
