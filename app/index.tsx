import nourishImage from "@/assets/images/nourish-icon.png";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={nourishImage} style={styles.icon}/>
      <Text style={styles.title}>Welcome to Nourish</Text>
      <Text style={styles.subtitle}>Say hello to a <Text style={styles.italic}>healthier</Text> you.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/dashboard')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => router.push('/register')}
      >
        <Text style={styles.buttonTextSecondary}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  icon: {
    height: 150,
    width: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
    subtitle: {
    fontSize: 20,
    color: '#666',

    textAlign: 'center',
    marginBottom: 45,
  },
  button: {
    backgroundColor: '#228866',
    minWidth: 280,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonSecondary: {
    backgroundColor: '#fff',
    minWidth: 280,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: '#228866',
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold',
  },
    buttonTextSecondary: {
    color: "#228866",
    fontSize: 18,
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },

})

export default HomeScreen;