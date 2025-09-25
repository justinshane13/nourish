import nourishImage from "@/assets/images/nourish-icon.png";
import { useNavigation, useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


const AppHeader = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.header,
        { paddingTop: insets.top, height: insets.top + 40 },
      ]}
    >
      {canGoBack ? (
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.backButton} />
      )}

      <View style={styles.titleContainer}>
        <Image
          source={nourishImage}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Nourish</Text>
      </View>

      <View style={styles.rightIcons}>
        {/* Can hold profile or notifications icon if we add it */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    backgroundColor: "#13803d",
  },
  backButton: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  backText: {
    fontSize: 24,
    color: "#fff",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  rightIcons: {
    width: 40, // reserve space
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppHeader;