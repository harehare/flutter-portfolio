import 'package:bloc/bloc.dart';
import 'dart:convert';
import 'package:flutter/services.dart' show rootBundle;
import '../../models/models.dart';
import 'about_event.dart';
import 'about_state.dart';

class AboutBloc extends Bloc<AboutEvent, AboutState> {
  AboutBloc() : super(AboutState.initial()) {
    on<LoadAboutEvent>((event, emit) async {
      try {
        final about = await loadAbout();
        emit(AboutState.success(about));
      } catch (e) {
        // TODO:
        print(e.toString());
        emit(AboutState.failure());
      }
    });
  }

  Future<String> _loadAboutJSON() async {
    return await rootBundle.loadString('assets/about.json');
  }

  Future<About> loadAbout() async {
    String jsonString = await _loadAboutJSON();
    final jsonResponse = json.decode(jsonString);
    return About.fromJson(jsonResponse);
  }
}
