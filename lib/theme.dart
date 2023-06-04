import 'package:flutter/material.dart';

const fontColor = Color(0xFFFFFFFF);

final ThemeData themeData = ThemeData(
  useMaterial3: true,
  primaryColor: const Color(0xFFFEFEFE),
  secondaryHeaderColor: const Color(0xFF3d4047),
  scaffoldBackgroundColor: const Color(0xFF191A1D),
  cardColor: const Color(0xFF3d4047),
  textTheme: const TextTheme(
    headlineSmall: TextStyle(
        height: 2,
        fontSize: 34.0,
        fontWeight: FontWeight.bold,
        color: fontColor),
    titleLarge: TextStyle(height: 2, fontSize: 24.0, color: fontColor),
    titleMedium: TextStyle(height: 2, fontSize: 20.0, color: fontColor),
    bodyLarge: TextStyle(height: 2, fontSize: 12.0, color: fontColor),
    bodyMedium: TextStyle(height: 2, fontSize: 14.0, color: fontColor),
  ),
  colorScheme: ColorScheme.fromSwatch()
      .copyWith(secondary: const Color(0xFF3E9BCD))
      .copyWith(background: const Color(0xFF191A1D)),
);
