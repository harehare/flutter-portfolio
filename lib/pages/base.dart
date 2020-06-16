import 'package:flutter/material.dart';

enum PortfolioPage { about, blog, skills, work }

abstract class BasePage extends StatelessWidget {
  const BasePage({Key key, @required this.page}) : super(key: key);
  final PortfolioPage page;

  Widget buildChild(BuildContext context);

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    return Scaffold(
        appBar: AppBar(
          iconTheme: IconThemeData(
            color: theme.primaryColor,
          ),
          backgroundColor: theme.backgroundColor,
          elevation: 0.0,
        ),
        body: buildChild(context),
        backgroundColor: theme.backgroundColor,
        bottomNavigationBar: BottomNavigationBar(
          showUnselectedLabels: true,
          showSelectedLabels: true,
          backgroundColor: theme.backgroundColor,
          selectedItemColor: theme.accentColor,
          unselectedItemColor: theme.primaryColor,
          items: <BottomNavigationBarItem>[
            BottomNavigationBarItem(
              icon: Icon(Icons.person),
              title: Text('ABOUT'),
              backgroundColor: theme.backgroundColor,
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.note),
              title: Text('BLOG'),
              backgroundColor: theme.backgroundColor,
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.code),
              title: Text('RESUME & SKILLS'),
              backgroundColor: theme.backgroundColor,
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.work),
              title: Text('PERSONAL WORKS'),
              backgroundColor: const Color(0xFF000000),
            ),
          ],
          currentIndex: page.index,
          onTap: (index) {
            if (index == PortfolioPage.about.index) {
              Navigator.of(context).pushNamed('about');
            } else if (index == PortfolioPage.blog.index) {
              Navigator.of(context).pushNamed('blog');
            } else if (index == PortfolioPage.skills.index) {
              Navigator.of(context).pushNamed('skills');
            } else if (index == PortfolioPage.work.index) {
              Navigator.of(context).pushNamed('works');
            }
          },
        ));
  }
}
