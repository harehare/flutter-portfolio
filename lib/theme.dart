import 'package:flutter/material.dart';

final fontColor = const Color(0xFFFFFFFF);

final ThemeData themeData = ThemeData(
  primaryColor: const Color(0xFFFFFFFF),
  accentColor: const Color(0xFF3E9BCD),
  backgroundColor: const Color(0xFF000000),
  secondaryHeaderColor: const Color(0xFF777777),
  textTheme: TextTheme(
    headline: TextStyle(
        fontSize: 34.0, fontWeight: FontWeight.bold, color: fontColor),
    title: TextStyle(fontSize: 24.0, color: fontColor),
    subhead: TextStyle(fontSize: 20.0, color: fontColor),
    body2: TextStyle(fontSize: 12.0, color: fontColor),
    body1: TextStyle(fontSize: 14.0, color: fontColor),
  ),
);
