package com.gamelog.service;

import com.gamelog.model.Game;
import com.gamelog.model.GameStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {

    private final List<Game> games = List.of(
        new Game(1L, "The Legend of Zelda: Tears of the Kingdom", "Nintendo Switch",
                GameStatus.PLAYING, "Explore o vasto mundo de Hyrule em uma aventura épica com novas habilidades e mistérios para desvendar."),
        new Game(2L, "God of War Ragnarök", "PS5",
                GameStatus.PLAYING, "Kratos e Atreus enfrentam o Ragnarök nórdico em uma jornada repleta de combates e narrativa envolvente."),
        new Game(3L, "Hollow Knight: Silksong", "PC",
                GameStatus.BACKLOG, "A aguardada sequência de Hollow Knight com novos reinos, inimigos e mecânicas de combate."),
        new Game(4L, "Starfield", "Xbox Series X",
                GameStatus.BACKLOG, "RPG espacial da Bethesda com centenas de planetas para explorar e personalizar sua nave."),
        new Game(5L, "Final Fantasy XVI", "PS5",
                GameStatus.BACKLOG, "Uma história sombria e madura no universo Final Fantasy com combate em tempo real."),
        new Game(6L, "Elden Ring", "PS5",
                GameStatus.FINISHED, "Action RPG de mundo aberto criado por Hidetaka Miyazaki e George R.R. Martin."),
        new Game(7L, "The Witcher 3: Wild Hunt", "PC",
                GameStatus.FINISHED, "RPG épico onde Geralt de Rívia busca sua filha adotiva em um mundo repleto de perigos."),
        new Game(8L, "Red Dead Redemption 2", "PS4",
                GameStatus.FINISHED, "A vida de Arthur Morgan em uma gangue de foras-da-lei no velho oeste americano.")
    );

    public List<Game> getAllGames() {
        return games;
    }
}
