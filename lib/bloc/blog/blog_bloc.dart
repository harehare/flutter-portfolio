import 'package:bloc/bloc.dart';
import '../../models/models.dart';
import 'blog_event.dart';
import 'blog_state.dart';
import '../../repositories/repositories.dart';

class BlogBloc extends Bloc<BlogEvent, BlogState> {
  final BlogRepository blogRepository;

  BlogBloc({required this.blogRepository}) : super(BlogState.initial()) {
    on<LoadBlogEvent>((event, emit) async {
      final queryResults = await this.blogRepository.entries(0, 30);

      if (queryResults.hasException) {
        emit(BlogState.loadFailure());
        return;
      }

      final List<dynamic> entries =
          queryResults.data?['entries'] as List<dynamic>;
      final List<Post> posts =
          entries.map((dynamic e) => Post.fromJson(e)).toList();

      emit(BlogState.loadSuccess(posts));
    });
    on<LoadBlogPostEvent>((event, emit) async {
      if (event.entryId == null) {
        emit(BlogState.loadFailure());
        return;
      }
      final queryResults = await this.blogRepository.entry(event.entryId!);

      if (queryResults.hasException) {
        emit(BlogState.loadFailure());
        return;
      }

      final dynamic entry = queryResults.data?['entry'] as dynamic;
      final Post post = Post.fromJson(entry);

      emit(BlogState.loadBlog(post));
    });
  }
}
