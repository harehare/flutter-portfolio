import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:google_fonts/google_fonts.dart';
import '../bloc/bloc.dart';
import '../pages/base.dart';
import '../components/components.dart';

class BlogPage extends BasePage {
  const BlogPage({Key? key}) : super(key: key, page: PortfolioPage.blog);

  @override
  Widget buildChild(BuildContext context) {
    final theme = Theme.of(context);
    return BlocBuilder<BlogBloc, BlogState>(builder: (context, state) {
      if (state.postList.isEmpty) {
        return const Loading();
      }

      return Column(children: [
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
