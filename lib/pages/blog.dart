import 'package:flutter/material.dart';
import 'package:flutter_portfolio/pages/base.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_portfolio/bloc/bloc.dart';
import 'package:flutter_portfolio/components/components.dart';

class BlogPage extends BasePage {
  BlogPage({Key key}) : super(key: key, page: PortfolioPage.blog);

  @override
  Widget buildChild(BuildContext context) {
    return BlocBuilder<BlogBloc, BlogState>(builder: (context, state) {
      if (state?.postList == null) {
        return Center(child: CircularProgressIndicator());
      }

      if (state.postList.length == 0) {
        return Center(child: Text("NONE"));
      }

      return ListView.builder(
          controller: ScrollController(keepScrollOffset: true),
          physics: const AlwaysScrollableScrollPhysics(),
          itemCount: state.postList.length,
          itemBuilder: (BuildContext context, int index) {
            final item = state.postList[index];
            return PostItem(
              post: item,
            );
          });
    });
  }
}
