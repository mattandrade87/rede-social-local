import { Game } from '../navigation/types';

export const MOCK_GAMES: Game[] = [
  {
    id: 1,
    title: 'The Legend of Zelda: Tears of the Kingdom',
    platform: 'Nintendo Switch',
    status: 'PLAYING',
    description:
      'Explore o vasto mundo de Hyrule em uma aventura épica com novas habilidades e mistérios para desvendar.',
    imageUrl: 'https://picsum.photos/seed/zelda/400/200',
  },
  {
    id: 2,
    title: 'God of War Ragnarök',
    platform: 'PS5',
    status: 'PLAYING',
    description:
      'Kratos e Atreus enfrentam o Ragnarök nórdico em uma jornada repleta de combates e narrativa envolvente.',
    imageUrl: 'https://picsum.photos/seed/godofwar/400/200',
  },
  {
    id: 3,
    title: 'Hollow Knight: Silksong',
    platform: 'PC',
    status: 'BACKLOG',
    description:
      'A aguardada sequência de Hollow Knight com novos reinos, inimigos e mecânicas de combate.',
    imageUrl: 'https://picsum.photos/seed/silksong/400/200',
  },
  {
    id: 4,
    title: 'Starfield',
    platform: 'Xbox Series X',
    status: 'BACKLOG',
    description:
      'RPG espacial da Bethesda com centenas de planetas para explorar e personalizar sua nave.',
    imageUrl: 'https://picsum.photos/seed/starfield/400/200',
  },
  {
    id: 5,
    title: 'Final Fantasy XVI',
    platform: 'PS5',
    status: 'BACKLOG',
    description:
      'Uma história sombria e madura no universo Final Fantasy com combate em tempo real.',
    imageUrl: 'https://picsum.photos/seed/ff16/400/200',
  },
  {
    id: 6,
    title: 'Elden Ring',
    platform: 'PS5',
    status: 'FINISHED',
    description:
      'Action RPG de mundo aberto criado por Hidetaka Miyazaki e George R.R. Martin.',
    imageUrl: 'https://picsum.photos/seed/eldenring/400/200',
  },
  {
    id: 7,
    title: 'The Witcher 3: Wild Hunt',
    platform: 'PC',
    status: 'FINISHED',
    description:
      'RPG épico onde Geralt de Rívia busca sua filha adotiva em um mundo repleto de perigos.',
    imageUrl: 'https://picsum.photos/seed/witcher3/400/200',
  },
  {
    id: 8,
    title: 'Red Dead Redemption 2',
    platform: 'PS4',
    status: 'FINISHED',
    description:
      'A vida de Arthur Morgan em uma gangue de foras-da-lei no velho oeste americano.',
    imageUrl: 'https://picsum.photos/seed/rdr2/400/200',
  },
];
