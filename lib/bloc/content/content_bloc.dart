import 'package:bloc/bloc.dart';
import 'dart:convert';
import 'package:flutter/services.dart' show rootBundle;
import '../../models/models.dart';
import 'content_event.dart';
import 'content_state.dart';

class ContentBloc extends Bloc<ContentEvent, ContentState> {
  ContentBloc() : super(ContentState.initial()) {
    on<LoadContentEvent>((event, emit) async {
      try {
        final contents = await loadContents();
        emit(ContentState.loadSuccess(contents));
      } catch (e) {
        // TODO:
        print(e.toString());
        emit(ContentState.loadFailure());
      }
    });
    on<LoadContentContentEvent>((event, emit) async {
      try {
        final content = await _loadSkillsContent("${event.date}.md");
        emit(ContentState.loadContent(content));
      } catch (e) {
        // TODO:
        print(e.toString());
        emit(ContentState.loadFailure());
      }
    });
  }

  Future<String> _loadSkillsJson() async {
    return rootBundle.loadString('assets/skills.json');
  }

  Future<String> _loadSkillsContent(String fileName) async {
    return rootBundle.loadString('assets/contents/$fileName');
  }

  Future<List<Content>> loadContents() async {
    String jsonString = await _loadSkillsJson();
    final Iterable jsonResponse = json.decode(jsonString);

    return jsonResponse.map((dynamic model) {
      return Content.fromJson(model);
    }).toList();
  }
}
