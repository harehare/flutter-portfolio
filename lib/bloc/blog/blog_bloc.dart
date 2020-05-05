import 'package:bloc/bloc.dart';
import 'dart:convert';
import 'package:flutter/services.dart' show rootBundle;
import 'package:flutter_portfolio/models/models.dart';
import 'package:flutter_portfolio/bloc/blog/blog_event.dart';
import 'package:flutter_portfolio/bloc/blog/blog_state.dart';

class BlogBloc extends Bloc<BlogEvent, BlogState> {
  @override
  BlogState get initialState => BlogState.initial();

  Future<String> _loadBlogJson() async {
    return rootBundle.loadString('assets/blog.json');
  }

  Future<String> _loadPostContent(String fileName) async {
    return rootBundle.loadString('assets/posts/$fileName');
  }

  Future<List<Post>> loadBlog() async {
    String jsonString = await _loadBlogJson();
    final Iterable jsonResponse = json.decode(jsonString);

    return jsonResponse.map((dynamic model) {
      return Post.fromJson(model);
    }).toList();
  }

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
      yield* _mapBlogToState(event.date);
    }
  }

  Stream<BlogState> _mapLoadToState() async* {
    final posts = await loadBlog();
    yield BlogState.loadSuccess(posts);
  }

  Stream<BlogState> _mapBlogToState(String date) async* {
    final content = await _loadPostContent("$date.md");
    yield BlogState.loadBlog(content);
  }
}
