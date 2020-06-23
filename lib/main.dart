import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:fluro/fluro.dart';
import 'package:flutter_portfolio/theme.dart';
import 'package:flutter_portfolio/bloc/bloc.dart';
import 'package:flutter_portfolio/pages/about.dart' deferred as about;
import 'package:flutter_portfolio/pages/blog.dart' deferred as blog;
import 'package:flutter_portfolio/pages/content.dart' deferred as content;
import 'package:flutter_portfolio/pages/skills.dart' deferred as skills;
import 'package:flutter_portfolio/pages/work.dart' deferred as work;
import 'package:flutter_portfolio/pages/post.dart' deferred as post;
import 'package:flutter_portfolio/components/loading.dart';

void main() async {
  final router = Router();

  router.define('about', handler: Handler(
    handlerFunc: (BuildContext context, Map<String, dynamic> params) {
      return BlocProvider<AboutBloc>(
        create: (context) {
          return AboutBloc()..add(LoadAboutEvent());
        },
        child: FutureBuilder(
          future: about.loadLibrary(),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.done) {
              return about.AboutPage();
            } else {
              return Loading();
            }
          },
        ),
      );
    },
  ), transitionType: TransitionType.material);

  router.define('skills', handler: Handler(
    handlerFunc: (BuildContext context, Map<String, dynamic> params) {
      return BlocProvider<ContentBloc>(
        create: (context) {
          return ContentBloc()..add(LoadContentEvent());
        },
        child: FutureBuilder(
          future: skills.loadLibrary(),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.done) {
              return skills.SkillsPage();
            } else {
              return Loading();
            }
          },
        ),
      );
    },
  ), transitionType: TransitionType.material);

  router.define('skills/:date', handler: Handler(
    handlerFunc: (BuildContext context, Map<String, dynamic> params) {
      final String date = params["date"][0];
      return BlocProvider<ContentBloc>(
        create: (context) {
          return ContentBloc()..add(LoadContentContentEvent(date: date));
        },
        child: FutureBuilder(
          future: content.loadLibrary(),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.done) {
              return content.ContentPage();
            } else {
              return Loading();
            }
          },
        ),
      );
    },
  ), transitionType: TransitionType.material);

  router.define('blog', handler: Handler(
    handlerFunc: (BuildContext context, Map<String, dynamic> params) {
      return BlocProvider<BlogBloc>(
        create: (context) {
          return BlogBloc()..add(LoadBlogEvent());
        },
        child: FutureBuilder(
          future: blog.loadLibrary(),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.done) {
              return blog.BlogPage();
            } else {
              return Loading();
            }
          },
        ),
      );
    },
  ), transitionType: TransitionType.material);

  router.define('blog/:date', handler: Handler(
    handlerFunc: (BuildContext context, Map<String, dynamic> params) {
      final String date = params["date"][0];
      return BlocProvider<BlogBloc>(
        create: (context) {
          return BlogBloc()..add(LoadBlogPostEvent(date: date));
        },
        child: FutureBuilder(
          future: post.loadLibrary(),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.done) {
              return post.PostPage();
            } else {
              return Loading();
            }
          },
        ),
      );
    },
  ), transitionType: TransitionType.material);

  router.define('works', handler: Handler(
    handlerFunc: (BuildContext context, Map<String, dynamic> params) {
      return BlocProvider<WorkBloc>(
        create: (context) {
          return WorkBloc()..add(LoadWorksEvent());
        },
        child: FutureBuilder(
          future: work.loadLibrary(),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.done) {
              return work.WorkPage();
            } else {
              return Loading();
            }
          },
        ),
      );
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
