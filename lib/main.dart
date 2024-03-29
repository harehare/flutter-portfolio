import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:fluro/fluro.dart';
import 'theme.dart';
import 'bloc/bloc.dart';
import 'pages/about.dart' deferred as about;
import 'pages/blog.dart' deferred as blog;
import 'pages/content.dart' deferred as content;
import 'pages/skills.dart' deferred as skills;
import 'pages/work.dart' deferred as work;
import 'pages/post.dart' deferred as post;
import 'components/loading.dart';
import 'repositories/repositories.dart';
import 'package:graphql/client.dart';

void main() async {
  final router = FluroRouter();
  final client = GraphQLClient(
    cache: GraphQLCache(),
    link: HttpLink(const String.fromEnvironment('GRAPHQL_URL',
        defaultValue: 'http://127.0.0.1:3000/api')),
  );
  final blogRepository = BlogRepository(client: client);

  router.define('about', handler: Handler(
    handlerFunc: (BuildContext? context, Map<String, List<String>> params) {
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
              return const Loading();
            }
          },
        ),
      );
    },
  ), transitionType: TransitionType.material);

  router.define('skills', handler: Handler(
    handlerFunc: (BuildContext? context, Map<String, List<String>> params) {
      return BlocProvider<ContentBloc>(
        lazy: false,
        create: (context) {
          return ContentBloc()..add(LoadContentEvent());
        },
        child: FutureBuilder(
          future: skills.loadLibrary(),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.done) {
              return skills.SkillsPage();
            } else {
              return const Loading();
            }
          },
        ),
      );
    },
  ), transitionType: TransitionType.material);

  router.define('skills/:date', handler: Handler(
    handlerFunc: (BuildContext? context, Map<String, List<String>> params) {
      final String? date = params["date"]?[0];
      return BlocProvider<ContentBloc>(
        lazy: false,
        create: (context) {
          return ContentBloc()..add(LoadContentContentEvent(date: date));
        },
        child: FutureBuilder(
          future: content.loadLibrary(),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.done) {
              return content.ContentPage();
            } else {
              return const Loading();
            }
          },
        ),
      );
    },
  ), transitionType: TransitionType.material);

  router.define('blog', handler: Handler(
    handlerFunc: (BuildContext? context, Map<String, List<String>> params) {
      return BlocProvider<BlogBloc>(
        lazy: false,
        create: (context) {
          return BlogBloc(blogRepository: blogRepository)..add(LoadBlogEvent());
        },
        child: FutureBuilder(
          future: blog.loadLibrary(),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.done) {
              return blog.BlogPage();
            } else {
              return const Loading();
            }
          },
        ),
      );
    },
  ), transitionType: TransitionType.material);

  router.define('blog/:entry_id', handler: Handler(
    handlerFunc: (BuildContext? context, Map<String, List<String>> params) {
      final String? entryId = params["entry_id"]?[0];
      return BlocProvider<BlogBloc>(
        lazy: false,
        create: (context) {
          return BlogBloc(blogRepository: blogRepository)
            ..add(LoadBlogPostEvent(entryId: entryId));
        },
        child: FutureBuilder(
          future: post.loadLibrary(),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.done) {
              return post.PostPage();
            } else {
              return const Loading();
            }
          },
        ),
      );
    },
  ), transitionType: TransitionType.material);

  router.define('works', handler: Handler(
    handlerFunc: (BuildContext? context, Map<String, List<String>> params) {
      return BlocProvider<WorkBloc>(
        lazy: false,
        create: (context) {
          return WorkBloc()..add(LoadWorksEvent());
        },
        child: FutureBuilder(
          future: work.loadLibrary(),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.done) {
              return work.WorkPage();
            } else {
              return const Loading();
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
  const MyApp(this.router, {Key? key}) : super(key: key);
  final FluroRouter router;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Portfolio',
      theme: themeData,
      darkTheme: themeData,
      onGenerateRoute: router.generator,
      initialRoute: 'about',
    );
  }
}
