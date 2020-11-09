import 'package:bloc/bloc.dart';
import 'dart:convert';
import 'package:flutter/services.dart' show rootBundle;
import '../../models/models.dart';
import 'content_event.dart';
import 'content_state.dart';

class ContentBloc extends Bloc<ContentEvent, ContentState> {
  ContentBloc() : super(ContentState.initial());

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

  @override
  Stream<ContentState> mapEventToState(ContentEvent event) async* {
    if (event is LoadContentEvent) {
      try {
        yield* _mapLoadToState();
      } catch (e) {
        // TODO:
        print(e.toString());
        yield ContentState.loadFailure();
      }
    } else if (event is LoadContentContentEvent) {
      yield* _mapLoadContentToState(event.date);
    }
  }

  Stream<ContentState> _mapLoadToState() async* {
    final contents = await loadContents();
    yield ContentState.loadSuccess(contents);
  }

  Stream<ContentState> _mapLoadContentToState(String date) async* {
    final content = await _loadSkillsContent("$date.md");
    yield ContentState.loadContent(content);
  }
}
