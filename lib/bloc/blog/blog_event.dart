abstract class BlogEvent {}

class LoadBlogEvent extends BlogEvent {}

class LoadBlogPostEvent extends BlogEvent {
  String date;
  LoadBlogPostEvent({this.date});
}
