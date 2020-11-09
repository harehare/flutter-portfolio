import '../../models/models.dart';

class ContentState {
  final List<Content> contentList;
  final String content;
  final bool isError;

  ContentState({this.contentList, this.isError, this.content});

  factory ContentState.initial() {
    return ContentState(contentList: [], isError: false, content: null);
  }

  factory ContentState.loadSuccess(List<Content> contentList) {
    return ContentState(
        contentList: contentList, isError: false, content: null);
  }

  factory ContentState.loadFailure() {
    return ContentState(contentList: [], isError: true, content: null);
  }

  factory ContentState.loadContent(String content) {
    return ContentState(contentList: [], isError: false, content: content);
  }
}
