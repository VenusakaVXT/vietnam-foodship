package com.vietnamfoodship.config;

import io.github.cdimascio.dotenv.Dotenv;

public class JwtConstant {
    public static final Dotenv dotenv = Dotenv.load();
    public static final String SECRET_KEY = dotenv.get("SECRET_KEY");
    public static final String JWT_HEADER = "Authorization";
}