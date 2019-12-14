import 'package:flutter/material.dart';
import 'package:flutter_portfolio/pages/base.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_portfolio/bloc/bloc.dart';
import 'package:flutter_portfolio/components/components.dart';

class WorkPage extends BasePage {
  WorkPage({Key key}) : super(key: key, page: Page.work);

  @override
  Widget buildChild(BuildContext context) {
    return BlocBuilder<WorkBloc, WorkState>(builder: (context, state) {
      if (state.works.length == 0) {
        return Center(child: CircularProgressIndicator());
      }
      return ListView.builder(
          controller: ScrollController(keepScrollOffset: true),
          physics: const AlwaysScrollableScrollPhysics(),
          itemCount: state.works.length,
          itemBuilder: (BuildContext context, int index) {
            final item = state.works[index];
            return WorkItem(
              work: item,
            );
          });
    });
  }
}
