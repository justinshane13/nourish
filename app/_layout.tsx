import { Stack } from "expo-router";

const RootLayout = () => {
  return <Stack 
    screenOptions={{
      headerStyle: {
        backgroundColor: '#444',
      },
      headerTintColor: '#fff',
      contentStyle: {
        paddingHorizontal: 0,
        paddingTop: 0,
        backgroundColor: '#fff'
      }
    }}
  >
    <Stack.Screen name='index' options={{title: 'Home'}} />
    <Stack.Screen name='dashboard' options={{title: 'Dashboard'}} />
    <Stack.Screen name='register' options={{title: 'Register'}} />
    <Stack.Screen name='scan-product' options={{title: 'Scan Product'}} />
  </Stack>;
}

export default RootLayout;