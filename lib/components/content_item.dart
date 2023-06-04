import 'package:flutter/material.dart';
import '../models/models.dart';

class ContentItem extends StatelessWidget {
  final Content content;

  const ContentItem({
    Key? key,
    required this.content,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    return InkWell(
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(16.0),
          color: const Color(0xDD222222),
        ),
        padding: const EdgeInsets.all(16.0),
        margin: const EdgeInsets.all(16.0),
        child: ListTile(
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
