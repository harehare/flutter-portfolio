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
      if (state.blog == null) {
        return Loading();
      }

      return Container(
          child: Markdown(
        data: state.blog,
        styleSheet: MarkdownStyleSheet.fromTheme(Theme.of(context)),
        selectable: true,
      ));
    });
  }
}
