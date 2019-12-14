import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:fluro/fluro.dart';
import 'package:flutter_portfolio/bloc/about/about_bloc.dart';
import 'package:flutter_portfolio/theme.dart';
import 'package:flutter_portfolio/bloc/bloc.dart';
import 'package:flutter_portfolio/pages/pages.dart';

void main() {
  final router = Router();

  router.define('about', handler: Handler(
    handlerFunc: (BuildContext context, Map<String, dynamic> params) {
      return BlocProvider<AboutBloc>(
          create: (context) {
            return AboutBloc()..add(LoadAboutEvent());
          },
          child: AboutPage());
    },
  ), transitionType: TransitionType.material);

  router.define('skills', handler: Handler(
    handlerFunc: (BuildContext context, Map<String, dynamic> params) {
      return BlocProvider<ContentBloc>(
          create: (context) {
            return ContentBloc()..add(LoadContentEvent());
          },
          child: SkillsPage());
    },
  ), transitionType: TransitionType.material);

  router.define('skills/:date', handler: Handler(
    handlerFunc: (BuildContext context, Map<String, dynamic> params) {
      final String date = params["date"][0];
      return BlocProvider<ContentBloc>(
          create: (context) {
            return ContentBloc()..add(LoadContentContentEvent(date: date));
          },
          child: ContentPage());
    },
  ), transitionType: TransitionType.material);

  router.define('works', handler: Handler(
    handlerFunc: (BuildContext context, Map<String, dynamic> params) {
      return BlocProvider<WorkBloc>(
          create: (context) {
            return WorkBloc()..add(LoadWorksEvent());
          },
          child: WorkPage());
    },
  ), transitionType: TransitionType.material);

  runApp(MyApp(router));
}

enum Page { about, skills, project }

class MyApp extends StatelessWidget {
  MyApp(this.router);
  final Router router;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '',
      theme: themeData,
      onGenerateRoute: router.generator,
      initialRoute: 'about',
    );
  }
}
