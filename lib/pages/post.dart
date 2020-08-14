import 'package:flutter/material.dart';
import 'package:flutter_portfolio/pages/base.dart';
import 'package:flutter_portfolio/components/components.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_portfolio/bloc/bloc.dart';
import 'package:flutter_markdown/flutter_markdown.dart';

class PostPage extends BasePage {
  PostPage({Key key}) : super(key: key, page: PortfolioPage.blog);

  @override
  Widget buildChild(BuildContext context) {
    return BlocBuilder<BlogBloc, BlogState>(builder: (context, state) {
      if (state.post == null) {
        return Loading();
      }
      // TODO: support html
      return Container(
          padding: EdgeInsets.all(16.0),
          margin: EdgeInsets.all(16.0),
          child: Markdown(
            data: state.post.body,
            styleSheet: MarkdownStyleSheet.fromTheme(Theme.of(context)),
            selectable: true,
          ));
    });
  }
}
