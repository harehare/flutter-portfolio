import 'package:flutter/widgets.dart';
import 'package:bloc/bloc.dart';
import '../../models/models.dart';
import 'blog_event.dart';
import 'blog_state.dart';
import '../../repositories/repositories.dart';

class BlogBloc extends Bloc<BlogEvent, BlogState> {
  final BlogRepository blogRepository;

  BlogBloc({required this.blogRepository}) : super(BlogState.initial());

  @override
  Stream<BlogState> mapEventToState(BlogEvent event) async* {
    if (event is LoadBlogEvent) {
      try {
        yield* _mapLoadToState();
      } catch (e) {
        print(e.toString());
        yield BlogState.loadFailure();
      }
    } else if (event is LoadBlogPostEvent) {
      yield* _mapBlogToState(event.entryId);
    }
  }

  Stream<BlogState> _mapLoadToState() async* {
    final queryResults = await this.blogRepository.entries(0, 30);

    if (queryResults.hasException) {
      yield BlogState.loadFailure();
      return;
    }

    final List<dynamic> entries =
        queryResults.data?['entries'] as List<dynamic>;
    final List<Post> posts =
        entries.map((dynamic e) => Post.fromJson(e)).toList();

    yield BlogState.loadSuccess(posts);
  }

  Stream<BlogState> _mapBlogToState(String? id) async* {
    if (id == null) {
      yield BlogState.loadFailure();
      return;
    }
    final queryResults = await this.blogRepository.entry(id);

    if (queryResults.hasException) {
      yield BlogState.loadFailure();
      return;
    }

    final dynamic entry = queryResults.data?['entry'] as dynamic;
    final Post post = Post.fromJson(entry);

    yield BlogState.loadBlog(post);
  }
}
