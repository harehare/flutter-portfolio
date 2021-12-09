import 'package:bloc/bloc.dart';
import 'dart:convert';
import 'package:flutter/services.dart' show rootBundle;
import '../../models/models.dart';
import 'work_event.dart';
import 'work_state.dart';

class WorkBloc extends Bloc<WorkEvent, WorkState> {
  WorkBloc() : super(WorkState.initial()) {
    on<LoadWorksEvent>((event, emit) async {
      try {
        final works = await loadWorks();
        emit(WorkState.success(works));
      } catch (e) {
        // TODO:
        print(e.toString());
        emit(WorkState.failure());
      }
    });
  }

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
}
