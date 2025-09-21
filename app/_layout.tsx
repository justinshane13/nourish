import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const RootLayout = () => {

  // TODO: once auth is setup, render auth stack if not authenticated, app stack if authenticated

  return (
    <SafeAreaProvider>
      <StatusBar 
          barStyle="dark-content" 
          backgroundColor="#fff" 
      />
      <Stack 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f2f2f2',
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
          } as any,
          headerTintColor: 'black',
          contentStyle: {
            paddingTop: 0,
            backgroundColor: '#fff'
          },
          headerShadowVisible: true,
          headerShown: false,
        }}
        initialRouteName="(auth)"
      > 
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  )
}

export default RootLayout;