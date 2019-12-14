import 'package:bloc/bloc.dart';
import 'dart:convert';
import 'package:flutter/services.dart' show rootBundle;
import 'package:flutter_portfolio/models/models.dart';
import 'package:flutter_portfolio/bloc/work/work_event.dart';
import 'package:flutter_portfolio/bloc/work/work_state.dart';

class WorkBloc extends Bloc<WorkEvent, WorkState> {
  @override
  WorkState get initialState => WorkState.initial();

  Future<String> _loadWorksJSON() async {
    return await rootBundle.loadString('assets/works.json');
  }

  Future<List<Work>> loadWorks() async {
    String jsonString = await _loadWorksJSON();
    final Iterable jsonResponse = json.decode(jsonString);

    return jsonResponse.map((dynamic model) {
      return Work.fromJson(model);
    }).toList();
  }

  @override
  Stream<WorkState> mapEventToState(WorkEvent event) async* {
    if (event is LoadWorksEvent) {
      try {
        yield* _mapLoadToState();
      } catch (e) {
        // TODO:
        print(e.toString());
        yield WorkState.failure();
      }
    }
  }

  Stream<WorkState> _mapLoadToState() async* {
    final works = await loadWorks();
    yield WorkState.success(works);
  }
}
