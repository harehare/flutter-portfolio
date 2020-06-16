import 'package:flutter/material.dart';
import 'package:flutter_portfolio/pages/base.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_portfolio/bloc/bloc.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';

class ContentPage extends BasePage {
  ContentPage({Key key}) : super(key: key, page: PortfolioPage.skills);

  @override
  Widget buildChild(BuildContext context) {
    return BlocBuilder<ContentBloc, ContentState>(builder: (context, state) {
      if (state.content == null) {
        return Center(
          child: SpinKitWave(
            color: Colors.white,
            size: 40.0,
          ),
        );
      }

      return Container(
          child: Markdown(
        data: state.content,
        styleSheet: MarkdownStyleSheet.fromTheme(Theme.of(context)),
        selectable: true,
      ));
    });
  }
}
