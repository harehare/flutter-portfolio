import 'package:flutter/material.dart';
import 'package:flutter_portfolio/pages/base.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_portfolio/bloc/bloc.dart';
import 'package:flutter_portfolio/components/components.dart';
import 'package:google_fonts/google_fonts.dart';

class BlogPage extends BasePage {
  BlogPage({Key key}) : super(key: key, page: PortfolioPage.blog);

  @override
  Widget buildChild(BuildContext context) {
    final theme = Theme.of(context);
    return BlocBuilder<BlogBloc, BlogState>(builder: (context, state) {
      if (state?.postList == null) {
        return Loading();
      }

      if (state.postList.length == 0) {
        return Center(child: Text("NONE"));
      }

      return Column(children: <Widget>[
        Container(
          child: Text(
            "BLOG",
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
                itemCount: state.postList.length,
                itemBuilder: (BuildContext context, int index) {
                  final item = state.postList[index];
                  return PostItem(
                    post: item,
                  );
                }))
      ]);
    });
  }
}
