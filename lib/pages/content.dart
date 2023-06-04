import 'package:flutter/material.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../bloc/bloc.dart';
import '../pages/base.dart';
import '../components/components.dart';
import 'package:markdown/markdown.dart' as md;

class ContentPage extends BasePage {
  const ContentPage({Key? key}) : super(key: key, page: PortfolioPage.skills);

  @override
  Widget buildChild(BuildContext context) {
    return BlocBuilder<ContentBloc, ContentState>(builder: (context, state) {
      final content = state.content;
      if (content == null) {
        return const Loading();
      }

      return Container(
          child: Markdown(
        data: content,
        styleSheet: MarkdownStyleSheet.fromTheme(Theme.of(context)),
        selectable: true,
        extensionSet: md.ExtensionSet(
            md.ExtensionSet.gitHubFlavored.blockSyntaxes, [
          md.EmojiSyntax(),
          ...md.ExtensionSet.gitHubFlavored.inlineSyntaxes
        ]),
      ));
    });
  }
}
