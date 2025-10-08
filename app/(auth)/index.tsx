import nourishImage from "@/assets/images/nourish-icon.png";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={nourishImage} style={styles.icon}/>
        <Text style={styles.title}>Nourish</Text>
        <Text style={styles.subtitle}>Say hello to a <Text style={styles.italic}>healthier</Text> you.</Text>
      </View>

      <View style={styles.footer}>
        {/* <TouchableOpacity style={styles.button} onPress={() => router.push('/(auth)/login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity> */}
        <Button title="Login" onPress={() => router.push("/(auth)/login")}></Button>

        <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
          <Text style={styles.link}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 24,
    backgroundColor: "#f9fafb",
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    marginTop: 180,
  },
  footer: {
    marginBottom: 30,
    alignItems: "center",
  },
  icon: {
    alignSelf: 'center',
    height: 150,
    width: 150,
    marginBottom: -10,
  },
  title: {
    fontSize: 44,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
    marginBottom: 150,
  },
  button: {
    backgroundColor: "#13803d",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#13803d",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  link: {
    marginTop: 24,
    textAlign: "center",
    color: "#13803d",
    fontSize: 16,
    fontWeight: "500",
  },
  italic: {
    fontStyle: 'italic',
  },

})

export default HomeScreen;