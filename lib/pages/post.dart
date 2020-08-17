import 'package:flutter/material.dart';
import 'package:flutter_portfolio/pages/base.dart';
import 'package:flutter_portfolio/components/components.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_portfolio/bloc/bloc.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:google_fonts/google_fonts.dart';

class PostPage extends BasePage {
  PostPage({Key key}) : super(key: key, page: PortfolioPage.blog);

  @override
  Widget buildChild(BuildContext context) {
    final theme = Theme.of(context);
    return BlocBuilder<BlogBloc, BlogState>(builder: (context, state) {
      if (state.post == null) {
        return Loading();
      }
      // TODO: support html
      return Column(mainAxisSize: MainAxisSize.min, children: [
        Row(mainAxisAlignment: MainAxisAlignment.center, children: [
          Container(
            child: Text(
              state.post.title,
              style: GoogleFonts.nunitoSans(
                textStyle: TextStyle(
                    fontSize: 24.0,
                    fontWeight: FontWeight.bold,
                    color: theme.secondaryHeaderColor),
              ),
            ),
          ),
          Container(
            padding: EdgeInsets.all(16.0),
            child: Text(
              state.post.publishedAtString(),
              style: GoogleFonts.nunitoSans(
                textStyle: TextStyle(
                    fontSize: 10.0,
                    fontWeight: FontWeight.bold,
                    color: theme.accentColor),
              ),
            ),
          )
        ]),
        Expanded(
            child: Container(
                padding: EdgeInsets.all(16.0),
                margin: EdgeInsets.all(16.0),
                child: Markdown(
                  data: state.post.body,
                  styleSheet: MarkdownStyleSheet.fromTheme(Theme.of(context)),
                  selectable: true,
                )))
      ]);
    });
  }
}
