abstract class ContentEvent {}

class LoadContentEvent extends ContentEvent {}

class LoadContentContentEvent extends ContentEvent {
  String date;
  LoadContentContentEvent({this.date});
}
