import 'package:flutter/material.dart';
import 'dart:html' as html;
import '../models/models.dart';

class WorkItem extends StatelessWidget {
  final Work work;

  const WorkItem({
    Key? key,
    required this.work,
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
        padding: const EdgeInsets.all(16.0),
        margin: const EdgeInsets.all(16.0),
        child: ListTile(
          leading: work.imageURL == ""
              ? const Icon(Icons.code, size: 80)
              : Image.network(work.imageURL,
                  width: 80, height: 80, fit: BoxFit.contain),
          title: Text(work.name,
              style: TextStyle(fontSize: 20.0, color: theme.primaryColor)),
          subtitle:
              Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(work.description,
                style: TextStyle(fontSize: 14.0, color: theme.primaryColor)),
            Container(
              padding: const EdgeInsets.all(16.0),
              child: Row(
                  children: work.tech.map((w) {
                return Container(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(4),
                      color: theme.colorScheme.secondary,
                    ),
                    margin: const EdgeInsets.only(right: 8.0),
                    padding: const EdgeInsets.only(
                        left: 8.0, right: 8.0, top: 4.0, bottom: 4.0),
                    child: Text(
                      w,
                      style: theme.textTheme.bodyMedium,
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
