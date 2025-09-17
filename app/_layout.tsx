import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const RootLayout = () => {
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
        }}
      >
        <Stack.Screen name='index' options={{title: 'Home', headerShown: false}} />
        <Stack.Screen name='dashboard' options={{title: 'Dashboard'}} />
        <Stack.Screen name='register' options={{title: 'Register'}} />
        <Stack.Screen name='scan-product' options={{title: 'Scan Product'}} />
      </Stack>;
    </SafeAreaProvider>
  )
}

export default RootLayout;