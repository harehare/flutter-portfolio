import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../bloc/bloc.dart';
import '../pages/base.dart';
import '../components/components.dart';

class AboutPage extends BasePage {
  AboutPage({Key key}) : super(key: key, page: PortfolioPage.about);

  @override
  Widget buildChild(BuildContext context) {
    return BlocBuilder<AboutBloc, AboutState>(builder: (context, state) {
      if (state.about == null) {
        return Loading();
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
