import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'dart:html' as html;
import '../models/models.dart';

class Links extends StatelessWidget {
  final About about;

  Links({
    Key key,
    this.about,
  }) : super(key: key);

  void _launchURL(String url) async {
    html.window.open(url, '');
  }

  Widget createIconButton(Color color, Icon icon, String label, String url) {
    return FlatButton.icon(
      icon: icon,
      textColor: color,
      onPressed: () {
        _launchURL(url);
      },
      label: Text(
        label,
        style: TextStyle(fontSize: 14.0, color: color),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final List<Widget> widgets = [];

    if (!(about.githubURL?.isEmpty ?? true)) {
      widgets.add(createIconButton(theme.primaryColor,
          Icon(FontAwesomeIcons.github), "Github", about.githubURL));
    }

    if (!(about.twitterURL?.isEmpty ?? true)) {
      widgets.add(createIconButton(theme.primaryColor,
          Icon(FontAwesomeIcons.twitter), "Twitter", about.twitterURL));
    }

    if (!(about.facebookURL?.isEmpty ?? true)) {
      widgets.add(createIconButton(theme.primaryColor,
          Icon(FontAwesomeIcons.facebook), "Facebook", about.facebookURL));
    }

    if (!(about.slideshareURL?.isEmpty ?? true)) {
      widgets.add(createIconButton(
          theme.primaryColor,
          Icon(FontAwesomeIcons.slideshare),
          "Slideshare",
          about.slideshareURL));
    }

    if (!(about.stackoverflowURL?.isEmpty ?? true)) {
      widgets.add(createIconButton(
          theme.primaryColor,
          Icon(FontAwesomeIcons.stackOverflow),
          "Stack Overflow",
          about.stackoverflowURL));
    }

    if (!(about.linkedinURL?.isEmpty ?? true)) {
      widgets.add(createIconButton(theme.primaryColor,
          Icon(FontAwesomeIcons.linkedin), "Linkedin", about.linkedinURL));
    }

    if (!(about.mailAddress?.isEmpty ?? true)) {
      widgets.add(createIconButton(
          theme.primaryColor,
          Icon(FontAwesomeIcons.envelope),
          "Mail",
          "mailto:$about.mailAddress"));
    }

    return Center(
      child: Container(
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: widgets,
        ),
        margin: EdgeInsets.all(16.0),
      ),
    );
  }
}
