import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <Stack>
      {/* Tabs group */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Non-tab page */}
      <Stack.Screen name="product" options={{ title: "Product", presentation: 'modal', headerShown: false }} />
    </Stack>
  );
}