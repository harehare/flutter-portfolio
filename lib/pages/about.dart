import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../bloc/bloc.dart';
import '../pages/base.dart';
import '../components/components.dart';

class AboutPage extends BasePage {
  const AboutPage({Key? key}) : super(key: key, page: PortfolioPage.about);

  @override
  Widget buildChild(BuildContext context) {
    return BlocBuilder<AboutBloc, AboutState>(builder: (context, state) {
      final about = state.about;
      if (about == null) {
        return const Loading();
      }
      return Column(children: [
        Profile(
          about: about,
        ),
        Links(
          about: about,
        )
      ]);
    });
  }
}
