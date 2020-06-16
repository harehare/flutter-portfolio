import 'package:flutter/material.dart';
import 'package:flutter_portfolio/pages/base.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_portfolio/bloc/bloc.dart';
import 'package:flutter_portfolio/components/components.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';

class SkillsPage extends BasePage {
  SkillsPage({Key key}) : super(key: key, page: PortfolioPage.skills);

  @override
  Widget buildChild(BuildContext context) {
    return BlocBuilder<ContentBloc, ContentState>(builder: (context, state) {
      if (state?.contentList == null) {
        return Center(
          child: SpinKitWave(
            color: Colors.white,
            size: 40.0,
          ),
        );
      }

      if (state.contentList.length == 0) {
        return Center(child: Text("NONE"));
      }

      return ListView.builder(
          controller: ScrollController(keepScrollOffset: true),
          physics: const AlwaysScrollableScrollPhysics(),
          itemCount: state.contentList.length,
          itemBuilder: (BuildContext context, int index) {
            final item = state.contentList[index];
            return ContentItem(
              content: item,
            );
          });
    });
  }
}
