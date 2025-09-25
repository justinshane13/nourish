import { testProducts } from "@/data/testProducts";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Button, Image, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";


export default function ProductScreen() {
  const { productId } = useLocalSearchParams();
  const router = useRouter();
  const product = testProducts.find(product => product.id === productId);

  if (!product) {
    router.push("/home");
    return;
  }

  const size = 100;
  const strokeWidth = 16;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (product.score / 100) * circumference;

  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: product.score / 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [product.score]);

  // Interpolated stroke offset
  const strokeDashoffset = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [circumference, 0],
  });

  let strokeColor = "#22C55E";
  if (product.score < 50) strokeColor = "#EF4444";
  else if (product.score < 75) strokeColor = "#FACC15";

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" />

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>

          {/* Circular Score */}
          <View style={styles.scoreContainer}>
            <Svg width={size} height={size}>
              <Circle
                stroke="#E5E7EB"
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeWidth={strokeWidth}
                fill="transparent"
              />
              <AnimatedCircle
                stroke={strokeColor}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeWidth={strokeWidth}
                strokeDasharray={`${circumference}`}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </Svg>
            <View style={styles.scoreTextContainer}>
              <Text style={styles.scoreText}>{product.score}</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Ingredients</Text>
          <View style={styles.ingredientsContainer}>
            {product.ingredients.map((ingredient, idx) => (
              <View key={idx} style={styles.ingredientChip}>
                <Text style={styles.ingredientText}>{ingredient}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {Platform.OS === "android" && (
        <View style={styles.closeButton}>
          <Button title="Close" onPress={() => router.back()} />
        </View>
      )}
    </View>
  );
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB", // subtle off-white
  },
  scrollContent: {
    paddingBottom: 40,
  },
  image: {
    width: "100%",
    height: 250,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  infoContainer: {
    padding: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 8,
    color: "#111827",
  },
  score: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 16,
    color: "#2563EB", // blue accent
  },
  scoreContainer: { alignSelf: "center", marginBottom: 20 },
  scoreTextContainer: {
    position: "absolute",
    top: "34%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  scoreText: { fontSize: 24, fontWeight: "700", color: "#black" },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#374151",
  },
  ingredientsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  ingredientChip: {
    backgroundColor: "#E5E7EB",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  ingredientText: {
    fontSize: 14,
    color: "#111827",
  },
  closeButton: {
    padding: 16,
    backgroundColor: "#F9FAFB",
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
  },
});