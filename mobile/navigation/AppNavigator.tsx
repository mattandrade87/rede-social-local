import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList, TabParamList } from './types';
import LibraryScreen from '../screens/LibraryScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GameDetailsScreen from '../screens/GameDetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#7c5cff',
        tabBarInactiveTintColor: '#555570',
        tabBarStyle: { backgroundColor: '#0f0f1a', borderTopColor: '#1a1a2e' },
        headerStyle: { backgroundColor: '#0f0f1a' },
        headerTintColor: '#e8e8f0',
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          title: 'Biblioteca',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: 'Explorar',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#0f0f1a' },
        headerTintColor: '#e8e8f0',
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={({ route }) => ({ title: route.params.game.title })}
      />
    </Stack.Navigator>
  );
}
