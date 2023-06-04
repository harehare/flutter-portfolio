import 'package:flutter/material.dart';
import '../models/models.dart';
import 'dart:html' as html;

class PostItem extends StatelessWidget {
  final Post post;

  const PostItem({
    Key? key,
    required this.post,
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
          title:
              Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(post.title,
                style: TextStyle(fontSize: 20.0, color: theme.primaryColor)),
            Text(post.publishedAtString(),
                style: TextStyle(
                    fontSize: 14.0, color: theme.secondaryHeaderColor))
          ]),
        ),
      ),
      onTap: () {
        final url = post.url;
        if (url == null || url == "") {
          Navigator.of(context).pushNamed('blog/${post.id}');
        } else {
          html.window.open(url, '');
        }
      },
    );
  }
}
