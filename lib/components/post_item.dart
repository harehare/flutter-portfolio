import 'package:flutter/material.dart';
import 'package:flutter_portfolio/models/models.dart';

class PostItem extends StatelessWidget {
  final Post post;

  PostItem({
    Key key,
    @required this.post,
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
        Navigator.of(context).pushNamed('blog/${post.id}');
      },
    );
  }
}
