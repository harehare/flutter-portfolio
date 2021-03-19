import '../../models/models.dart';

class WorkState {
  final List<Work> works;
  final bool isError;

  WorkState({required this.works, required this.isError});

  factory WorkState.initial() {
    return WorkState(works: [], isError: false);
  }

  factory WorkState.success(List<Work> works) {
    return WorkState(works: works, isError: false);
  }

  factory WorkState.failure() {
    return WorkState(works: [], isError: true);
  }
}
