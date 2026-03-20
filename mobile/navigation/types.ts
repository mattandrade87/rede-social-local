export type Game = {
  id: number;
  title: string;
  platform: string;
  status: 'PLAYING' | 'BACKLOG' | 'FINISHED';
  description: string;
  imageUrl?: string;
};

export type RootStackParamList = {
  Main: undefined;
  GameDetails: { game: Game };
};

export type TabParamList = {
  Library: undefined;
  Explore: undefined;
  Profile: undefined;
};
