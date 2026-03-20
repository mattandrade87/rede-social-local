import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

type Props = {
  title: string;
};

export default function SectionHeader({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f0f1a',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#7c5cff',
  },
});
