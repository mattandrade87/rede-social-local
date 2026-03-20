import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { MOCK_GAMES } from '../data/mockGames';

export default function ProfileScreen() {
  const totalGames = MOCK_GAMES.length;
  const horasJogadas = 342;

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>GL</Text>
      </View>

      <Text style={styles.username}>Jogador</Text>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{totalGames}</Text>
          <Text style={styles.statLabel}>Total de Jogos</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>{horasJogadas}</Text>
          <Text style={styles.statLabel}>Horas Jogadas</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f1a',
    alignItems: 'center',
    paddingTop: 48,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#7c5cff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },
  username: {
    fontSize: 20,
    fontWeight: '600',
    color: '#e8e8f0',
    marginTop: 12,
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: 32,
    gap: 16,
    paddingHorizontal: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  statValue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#7c5cff',
  },
  statLabel: {
    fontSize: 13,
    color: '#8888a0',
    marginTop: 4,
  },
});
