import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { Game } from '../navigation/types';

type Props = {
  game: Game;
  onPress: () => void;
};

export default function GameListItem({ game, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View>
        <Text style={styles.title}>{game.title}</Text>
        <Text style={styles.platform}>{game.platform}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a2e',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  pressed: {
    opacity: 0.7,
    backgroundColor: '#25253e',
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
