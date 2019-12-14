import 'package:bloc/bloc.dart';
import 'dart:convert';
import 'package:flutter/services.dart' show rootBundle;
import 'package:flutter_portfolio/models/models.dart';
import 'package:flutter_portfolio/bloc/about/about_event.dart';
import 'package:flutter_portfolio/bloc/about/about_state.dart';

class AboutBloc extends Bloc<AboutEvent, AboutState> {
  @override
  AboutState get initialState => AboutState.initial();

  Future<String> _loadAboutJSON() async {
    return await rootBundle.loadString('assets/about.json');
  }

  Future<About> loadAbout() async {
    String jsonString = await _loadAboutJSON();
    final jsonResponse = json.decode(jsonString);
    return About.fromJson(jsonResponse);
  }

  @override
  Stream<AboutState> mapEventToState(AboutEvent event) async* {
    if (event is LoadAboutEvent) {
      try {
        yield* _mapLoadToState();
      } catch (e) {
        // TODO:
        print(e.toString());
        yield AboutState.failure();
      }
    }
  }

  Stream<AboutState> _mapLoadToState() async* {
    final about = await loadAbout();
    yield AboutState.success(about);
  }
}
