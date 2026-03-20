import React from 'react';
import { FlatList, Image, Pressable, Text, StyleSheet, View } from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, TabParamList, Game } from '../navigation/types';
import { MOCK_GAMES } from '../data/mockGames';

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Explore'>,
  NativeStackScreenProps<RootStackParamList>
>;

export default function ExploreScreen({ navigation }: Props) {
  const renderItem = ({ item }: { item: Game }) => (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      onPress={() => navigation.navigate('GameDetails', { game: item })}
    >
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.platform}>{item.platform}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={MOCK_GAMES}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
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
    padding: 16,
  },
  card: {
    backgroundColor: '#1a1a2e',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.8,
  },
  image: {
    width: '100%',
    height: 160,
  },
  info: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e8e8f0',
  },
  platform: {
    fontSize: 13,
    color: '#8888a0',
    marginTop: 4,
  },
});
