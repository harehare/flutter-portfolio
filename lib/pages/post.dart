import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:markdown/markdown.dart' as md;
import '../pages/base.dart';
import '../components/components.dart';
import '../bloc/bloc.dart';

class PostPage extends BasePage {
  const PostPage({Key? key}) : super(key: key, page: PortfolioPage.blog);

  @override
  Widget buildChild(BuildContext context) {
    final theme = Theme.of(context);
    return BlocBuilder<BlogBloc, BlogState>(builder: (context, state) {
      final post = state.post;
      if (post == null) {
        return const Loading();
      }
      return Column(mainAxisSize: MainAxisSize.min, children: [
        Container(
            margin: const EdgeInsets.all(0),
            padding: const EdgeInsets.all(0),
            decoration: const BoxDecoration(
              border: Border(
                bottom: BorderSide(
                  color: Colors.white24,
                  width: 1,
                ),
              ),
            ),
            child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
              Container(
                child: Text(
                  post.title,
                  style: GoogleFonts.nunitoSans(
                    textStyle: TextStyle(
                        fontSize: 24.0,
                        fontWeight: FontWeight.bold,
                        color: theme.secondaryHeaderColor),
                  ),
                ),
              ),
              Container(
                padding: const EdgeInsets.all(16.0),
                child: Text(
                  post.publishedAtString(),
                  style: GoogleFonts.nunitoSans(
                    textStyle: TextStyle(
                        fontSize: 14.0,
                        fontWeight: FontWeight.bold,
                        color: theme.colorScheme.secondary),
                  ),
                ),
              )
            ])),
        Expanded(
            child: Container(
                padding: const EdgeInsets.all(16.0),
                margin: const EdgeInsets.all(16.0),
                child: Markdown(
                  data: post.body ?? "",
                  styleSheet: MarkdownStyleSheet.fromTheme(Theme.of(context)),
                  selectable: true,
                  extensionSet: md.ExtensionSet(
                      md.ExtensionSet.gitHubFlavored.blockSyntaxes, [
                    md.EmojiSyntax(),
                    ...md.ExtensionSet.gitHubFlavored.inlineSyntaxes
                  ]),
                )))
      ]);
    });
  }
}
