import 'package:flutter/material.dart';
import 'dart:html' as html;
import '../models/models.dart';

class WorkItem extends StatelessWidget {
  final Work work;

  WorkItem({
    Key key,
    @required this.work,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return InkWell(
      child: Container(
        decoration: BoxDecoration(
          color: const Color(0xDD222222),
          borderRadius: BorderRadius.circular(16),
        ),
        padding: EdgeInsets.all(16.0),
        margin: EdgeInsets.all(16.0),
        child: ListTile(
          leading: work.imageURL == ""
              ? Icon(Icons.code, size: 80)
              : Image.network(work.imageURL,
                  width: 80, height: 80, fit: BoxFit.contain),
          title: Text(work.name,
              style: TextStyle(fontSize: 20.0, color: theme.primaryColor)),
          subtitle:
              Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(work.description,
                style: TextStyle(fontSize: 14.0, color: theme.primaryColor)),
            Container(
              padding: EdgeInsets.all(16.0),
              child: Row(
                  children: work.tech.map((w) {
                return Container(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(4),
                      color: theme.accentColor,
                    ),
                    margin: EdgeInsets.only(right: 8.0),
                    padding: EdgeInsets.only(
                        left: 8.0, right: 8.0, top: 4.0, bottom: 4.0),
                    child: Text(
                      w,
                      style: theme.textTheme.bodyText2,
                    ));
              }).toList()),
            )
          ]),
        ),
      ),
      onTap: () {
        html.window.open(work.url, '');
      },
    );
  }
}
