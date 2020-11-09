import '../../models/models.dart';

class AboutState {
  final About about;
  final bool isError;

  AboutState({this.about, this.isError});

  factory AboutState.initial() {
    return AboutState(about: null, isError: false);
  }

  factory AboutState.success(About about) {
    return AboutState(about: about, isError: false);
  }

  factory AboutState.failure() {
    return AboutState(about: null, isError: true);
  }
}
