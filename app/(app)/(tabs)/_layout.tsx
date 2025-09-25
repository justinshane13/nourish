import AppHeader from '@/components/AppHeader';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";
import { View } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ 
        headerShown: true,
        tabBarStyle: {
            backgroundColor: "#f9fafb",
            height: 70,
            borderTopWidth: 0,
        },
        tabBarItemStyle: {
            borderRadius: 16,
            marginHorizontal: 10,
            marginVertical: 0,
        },
        tabBarActiveTintColor: "#13803d",
        tabBarInactiveTintColor: "#6b7280",
        header: () => <AppHeader />
    }}>
      <Tabs.Screen
        name="home"
        options={{ title: "Home", tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: "center" }}>
              <Feather name="home" size={22} color={focused ? "#13803d" : "gray"} />
            </View>
        )  }}
      />
      <Tabs.Screen
        name="history"
        options={{ title: "History", tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: "center" }}>
              <Entypo name="list" size={24} color={focused ? "#13803d" : "gray"} /> 
            </View>
        )}}
      />
      <Tabs.Screen
        name="scan"
        options={{ title: "Scan", tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons name="barcode-scan" size={24} color={focused ? "#13803d" : "gray"} />
            </View>
        )}}
      />
      <Tabs.Screen
        name="search"
        options={{ title: "Search", tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: "center" }}>
              <Ionicons name="search" size={22} color={focused ? "#13803d" : "gray"} />
            </View>
        )}}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: "center" }}>
              <Feather name="user" size={24} color={focused ? "#13803d" : "gray"} />
            </View>
        )}}
      />
    </Tabs>
  );
}