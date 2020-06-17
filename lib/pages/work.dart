import 'package:flutter/material.dart';
import 'package:flutter_portfolio/pages/base.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_portfolio/bloc/bloc.dart';
import 'package:flutter_portfolio/components/components.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';

class WorkPage extends BasePage {
  WorkPage({Key key}) : super(key: key, page: PortfolioPage.work);

  @override
  Widget buildChild(BuildContext context) {
    final theme = Theme.of(context);
    return BlocBuilder<WorkBloc, WorkState>(builder: (context, state) {
      if (state.works.length == 0) {
        return Center(
          child: SpinKitWave(
            color: Colors.white,
            size: 40.0,
          ),
        );
      }
      return Column(children: <Widget>[
        Container(
          child: Text(
            "WORK",
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
                itemCount: state.works.length,
                itemBuilder: (BuildContext context, int index) {
                  final item = state.works[index];
                  return WorkItem(
                    work: item,
                  );
                }))
      ]);
    });
  }
}