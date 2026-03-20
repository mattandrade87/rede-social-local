import React from 'react';
import { SectionList, StyleSheet, View } from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, TabParamList, Game } from '../navigation/types';
import { MOCK_GAMES } from '../data/mockGames';
import GameListItem from '../components/GameListItem';
import SectionHeader from '../components/SectionHeader';

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Library'>,
  NativeStackScreenProps<RootStackParamList>
>;

type Section = {
  title: string;
  data: Game[];
};

const STATUS_LABELS: Record<Game['status'], string> = {
  PLAYING: 'Jogando Agora',
  BACKLOG: 'Backlog / A Jogar',
  FINISHED: 'Finalizados',
};

function buildSections(games: Game[]): Section[] {
  const order: Game['status'][] = ['PLAYING', 'BACKLOG', 'FINISHED'];
  return order
    .map((status) => ({
      title: STATUS_LABELS[status],
      data: games.filter((g) => g.status === status),
    }))
    .filter((section) => section.data.length > 0);
}

export default function LibraryScreen({ navigation }: Props) {
  const sections = buildSections(MOCK_GAMES);

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <GameListItem
            game={item}
            onPress={() => navigation.navigate('GameDetails', { game: item })}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader title={title} />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f1a',
  },
  list: {
    paddingBottom: 16,
  },
});
