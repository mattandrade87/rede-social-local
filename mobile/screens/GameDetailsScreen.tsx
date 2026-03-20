import React, { useLayoutEffect } from 'react';
import { Image, ScrollView, Text, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'GameDetails'>;

const STATUS_LABELS: Record<string, string> = {
  PLAYING: 'Jogando Agora',
  BACKLOG: 'Backlog / A Jogar',
  FINISHED: 'Finalizado',
};

export default function GameDetailsScreen({ route, navigation }: Props) {
  const { game } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ title: game.title });
  }, [navigation, game.title]);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: game.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.title}>{game.title}</Text>

        <View style={styles.tagsRow}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{game.platform}</Text>
          </View>
          <View style={[styles.tag, styles.statusTag]}>
            <Text style={styles.tagText}>
              {STATUS_LABELS[game.status] ?? game.status}
            </Text>
          </View>
        </View>

        <Text style={styles.description}>{game.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f1a',
  },
  image: {
    width: '100%',
    height: 220,
    backgroundColor: '#1a1a2e',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#e8e8f0',
  },
  tagsRow: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 8,
  },
  tag: {
    backgroundColor: '#2a2a45',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusTag: {
    backgroundColor: '#7c5cff',
  },
  tagText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#e8e8f0',
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#8888a0',
    marginTop: 20,
  },
});
