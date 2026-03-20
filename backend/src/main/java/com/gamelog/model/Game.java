package com.gamelog.model;

public record Game(
    Long id,
    String title,
    String platform,
    GameStatus status,
    String description
) {}
