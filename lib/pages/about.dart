import 'package:flutter/material.dart';
import 'package:flutter_portfolio/pages/base.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_portfolio/bloc/bloc.dart';
import 'package:flutter_portfolio/components/components.dart';

class AboutPage extends BasePage {
  AboutPage({Key key}) : super(key: key, page: PortfolioPage.about);

  @override
  Widget buildChild(BuildContext context) {
    return BlocBuilder<AboutBloc, AboutState>(builder: (context, state) {
      if (state.about == null) {
        return Center(child: CircularProgressIndicator());
      }

      return Column(children: [
        Profile(
          about: state.about,
        ),
        Links(
          about: state.about,
        )
      ]);
    });
  }
}
