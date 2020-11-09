import 'package:flutter/material.dart';

final fontColor = const Color(0xFFFFFFFF);

final ThemeData themeData = ThemeData(
  primaryColor: const Color(0xFFFEFEFE),
  accentColor: const Color(0xFF3E9BCD),
  backgroundColor: const Color(0xFF191A1D),
  secondaryHeaderColor: const Color(0xFF3d4047),
  cardColor: const Color(0xFF3d4047),
  textTheme: TextTheme(
    headline5: TextStyle(
        height: 2,
        fontSize: 34.0,
        fontWeight: FontWeight.bold,
        color: fontColor),
    headline6: TextStyle(height: 2, fontSize: 24.0, color: fontColor),
    subtitle1: TextStyle(height: 2, fontSize: 20.0, color: fontColor),
    bodyText1: TextStyle(height: 2, fontSize: 12.0, color: fontColor),
    bodyText2: TextStyle(height: 2, fontSize: 14.0, color: fontColor),
  ),
);
