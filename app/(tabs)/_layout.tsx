import { Tabs } from "expo-router";
import { Text } from "react-native";
import { Colors } from "@/constants/Colors";

const icons = {
  index: "⌂",
  map: "⌖",
  feed: "◌",
  wallet: "◇",
  profile: "◎",
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: Colors.background },
        headerTintColor: Colors.ink,
        headerShadowVisible: false,
        tabBarActiveTintColor: Colors.primarySoft,
        tabBarInactiveTintColor: Colors.muted,
        tabBarStyle: {
          backgroundColor: Colors.surface,
          borderTopColor: Colors.border,
        },
        tabBarIcon: ({ color }) => (
          <Text style={{ color, fontSize: 22 }}>{icons[route.name as keyof typeof icons]}</Text>
        ),
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="map" options={{ title: "Mapa" }} />
      <Tabs.Screen name="feed" options={{ title: "Feed" }} />
      <Tabs.Screen name="wallet" options={{ title: "Carteira" }} />
      <Tabs.Screen name="profile" options={{ title: "Perfil" }} />
    </Tabs>
  );
}
