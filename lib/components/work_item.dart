import 'package:flutter/material.dart';
import 'package:flutter_portfolio/models/models.dart';
import 'package:badges/badges.dart';
import 'dart:html' as html;

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
          borderRadius: BorderRadius.circular(16.0),
          color: Color(0xDD222222),
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
              padding: EdgeInsets.only(top: 16.0),
              child: Row(
                  children: work.tech.map((w) {
                return Container(
                  margin: EdgeInsets.only(right: 8.0),
                  child: Badge(
                    badgeColor: theme.accentColor,
                    shape: BadgeShape.square,
                    toAnimate: false,
                    badgeContent:
                        Text(w, style: TextStyle(color: Colors.white)),
                  ),
                );
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
