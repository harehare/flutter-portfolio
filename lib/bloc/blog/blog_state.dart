import 'package:flutter_portfolio/models/models.dart';

class BlogState {
  final List<Post> postList;
  final String blog;
  final bool isError;

  BlogState({this.postList, this.isError, this.blog});

  factory BlogState.initial() {
    return BlogState(postList: [], isError: false, blog: null);
  }

  factory BlogState.loadSuccess(List<Post> postList) {
    return BlogState(postList: postList, isError: false, blog: null);
  }

  factory BlogState.loadFailure() {
    return BlogState(postList: [], isError: true, blog: null);
  }

  factory BlogState.loadBlog(String blog) {
    return BlogState(postList: [], isError: false, blog: blog);
  }
}
