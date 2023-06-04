import 'package:flutter/material.dart';
import 'package:titled_navigation_bar/titled_navigation_bar.dart';

enum PortfolioPage { about, blog, skills, work }

abstract class BasePage extends StatelessWidget {
  const BasePage({Key? key, required this.page}) : super(key: key);
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
          backgroundColor: theme.colorScheme.background,
          elevation: 0.0,
        ),
        body: buildChild(context),
        backgroundColor: theme.colorScheme.background,
        bottomNavigationBar: TitledBottomNavigationBar(
          indicatorColor: theme.primaryColor,
          activeColor: theme.colorScheme.secondary,
          inactiveColor: theme.primaryColor,
          enableShadow: false,
          items: <TitledNavigationBarItem>[
            TitledNavigationBarItem(
              icon: const Icon(Icons.person),
              title: const Text('ABOUT'),
              backgroundColor: theme.colorScheme.background,
            ),
            TitledNavigationBarItem(
              icon: const Icon(Icons.web),
              title: const Text('BLOG'),
              backgroundColor: theme.colorScheme.background,
            ),
            TitledNavigationBarItem(
              icon: const Icon(Icons.code),
              title: const Text('RESUME & SKILLS'),
              backgroundColor: theme.colorScheme.background,
            ),
            TitledNavigationBarItem(
              icon: const Icon(Icons.work),
              title: const Text('PERSONAL WORKS'),
              backgroundColor: theme.colorScheme.background,
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
