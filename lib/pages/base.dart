import 'package:flutter/material.dart';

enum Page { about, skills, work }

abstract class BasePage extends StatelessWidget {
  const BasePage({Key key, @required this.page}) : super(key: key);
  final Page page;

  Widget buildChild(BuildContext context);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Theme.of(context).backgroundColor,
          elevation: 0.0,
        ),
        body: buildChild(context),
        backgroundColor: Theme.of(context).backgroundColor,
        bottomNavigationBar: BottomNavigationBar(
          items: const <BottomNavigationBarItem>[
            BottomNavigationBarItem(
              icon: Icon(Icons.person),
              title: Text('ABOUT'),
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.code),
              title: Text('RESUME & SKILLS'),
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.work),
              title: Text('PERSONAL WORKS'),
            ),
          ],
          currentIndex: page.index,
          onTap: (index) {
            if (index == Page.about.index) {
              Navigator.of(context).pushNamed('about');
            } else if (index == Page.skills.index) {
              Navigator.of(context).pushNamed('skills');
            } else if (index == Page.work.index) {
              Navigator.of(context).pushNamed('works');
            }
          },
          selectedItemColor: Theme.of(context).accentColor,
          backgroundColor: Theme.of(context).backgroundColor,
          unselectedItemColor: Theme.of(context).primaryColor,
        ));
  }
}
