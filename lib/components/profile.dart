import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../models/models.dart';

class Profile extends StatelessWidget {
  final About about;

  const Profile({
    Key? key,
    required this.about,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final Size size = MediaQuery.of(context).size;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Container(
          width: size.width,
          margin: const EdgeInsets.all(16.0),
          child: Text(
            about.name,
            textAlign: TextAlign.center,
            style: GoogleFonts.nunitoSans(
              textStyle: TextStyle(
                  fontSize: 42.0,
                  fontWeight: FontWeight.bold,
                  color: theme.primaryColor),
            ),
          ),
        ),
        Container(
          width: size.width,
          height: 50,
          margin: const EdgeInsets.all(16.0),
          child: Text(
            about.description,
            textAlign: TextAlign.center,
            style: GoogleFonts.nunitoSans(
              textStyle: TextStyle(
                  fontSize: 24.0,
                  fontWeight: FontWeight.bold,
                  color: theme.secondaryHeaderColor),
            ),
          ),
        ),
        Container(
          width: 160.0,
          height: 160.0,
          decoration: BoxDecoration(
              shape: BoxShape.circle,
              image: DecorationImage(
                fit: BoxFit.fill,
                image: NetworkImage(
                  about.imageURL,
                ),
              )),
        ),
      ],
    );
  }
}
