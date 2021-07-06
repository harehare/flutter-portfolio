import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'dart:html' as html;
import '../models/models.dart';

class Links extends StatelessWidget {
  final About about;

  Links({
    Key? key,
    required this.about,
  }) : super(key: key);

  void _launchURL(String url) async {
    html.window.open(url, '');
  }

  Widget createIconButton(Color color, Icon icon, String label, String url) {
    return TextButton.icon(
      icon: icon,
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
      final githubURL = about.githubURL;

      if (githubURL != null) {
        widgets.add(createIconButton(theme.primaryColor,
            Icon(FontAwesomeIcons.github), "Github", githubURL));
      }
    }

    if (!(about.twitterURL?.isEmpty ?? true)) {
      final twitterURL = about.twitterURL;
      if (twitterURL != null) {
        widgets.add(createIconButton(theme.primaryColor,
            Icon(FontAwesomeIcons.twitter), "Twitter", twitterURL));
      }
    }

    if (!(about.facebookURL?.isEmpty ?? true)) {
      final facebookURL = about.facebookURL;
      if (facebookURL != null) {
        widgets.add(createIconButton(theme.primaryColor,
            Icon(FontAwesomeIcons.facebook), "Facebook", facebookURL));
      }
    }

    if (!(about.slideshareURL?.isEmpty ?? true)) {
      final slideshareURL = about.slideshareURL;
      if (slideshareURL != null) {
        widgets.add(createIconButton(theme.primaryColor,
            Icon(FontAwesomeIcons.slideshare), "Slideshare", slideshareURL));
      }
    }

    if (!(about.stackoverflowURL?.isEmpty ?? true)) {
      final stackoverflowURL = about.stackoverflowURL;
      if (stackoverflowURL != null) {
        widgets.add(createIconButton(
            theme.primaryColor,
            Icon(FontAwesomeIcons.stackOverflow),
            "Stack Overflow",
            stackoverflowURL));
      }
    }

    if (!(about.linkedinURL?.isEmpty ?? true)) {
      final linkedinURL = about.linkedinURL;

      if (linkedinURL != null) {
        widgets.add(createIconButton(theme.primaryColor,
            Icon(FontAwesomeIcons.linkedin), "Linkedin", linkedinURL));
      }
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
