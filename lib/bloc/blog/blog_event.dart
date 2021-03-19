abstract class BlogEvent {}

class LoadBlogEvent extends BlogEvent {}

class LoadBlogPostEvent extends BlogEvent {
  String? entryId;
  LoadBlogPostEvent({this.entryId});
}
