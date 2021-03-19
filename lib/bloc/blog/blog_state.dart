import '../../models/models.dart';

class BlogState {
  final List<Post> postList;
  final Post? post;
  final bool isError;

  BlogState(
      {required this.postList, required this.isError, required this.post});

  factory BlogState.initial() {
    return BlogState(postList: [], isError: false, post: null);
  }

  factory BlogState.loadSuccess(List<Post> postList) {
    return BlogState(postList: postList, isError: false, post: null);
  }

  factory BlogState.loadFailure() {
    return BlogState(postList: [], isError: true, post: null);
  }

  factory BlogState.loadBlog(Post post) {
    return BlogState(postList: [], isError: false, post: post);
  }
}
