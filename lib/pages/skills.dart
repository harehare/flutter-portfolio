import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:google_fonts/google_fonts.dart';
import 'base.dart';
import '../bloc/bloc.dart';
import '../components/components.dart';

class SkillsPage extends BasePage {
  const SkillsPage({Key? key}) : super(key: key, page: PortfolioPage.skills);

  @override
  Widget buildChild(BuildContext context) {
    final theme = Theme.of(context);
    return BlocBuilder<ContentBloc, ContentState>(builder: (context, state) {
      if (state.contentList.isEmpty) {
        return const Loading();
      }

      return Column(children: <Widget>[
        Container(
          child: Text(
            "RESUME",
            style: GoogleFonts.nunitoSans(
              textStyle: TextStyle(
                  fontSize: 24.0,
                  fontWeight: FontWeight.bold,
                  color: theme.secondaryHeaderColor),
            ),
          ),
        ),
        Expanded(
            child: ListView.builder(
                controller: ScrollController(keepScrollOffset: true),
                physics: const AlwaysScrollableScrollPhysics(),
                itemCount: state.contentList.length,
                itemBuilder: (BuildContext context, int index) {
                  final item = state.contentList[index];
                  return ContentItem(
                    content: item,
                  );
                }))
      ]);
    });
  }
}
