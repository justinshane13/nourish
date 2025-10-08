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

  const size = 75;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

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

          <View style={styles.contentRow}>
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
            <Text style={styles.productText}><Text style={{ fontWeight: 'bold' }}>Ingredients:</Text> {product.ingredients.join(", ")}</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.summaryText}>
              <Text style={{ fontWeight: 'bold' }}>Summary: </Text>
              {product.summary}
            </Text>
          </View>

          <View style={[styles.textContainer, { backgroundColor: "#fff" }]}>
            <View style={styles.headerLine}>
              <View style={styles.line} />
              <Text style={styles.lineText}>Bottom Line</Text>
              <View style={styles.line} />
            </View>
            <Text style={[styles.productText, { textAlign: "center" }]}>{product.bottomLine}</Text>
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
    borderBottomWidth: 0.5,
    borderBottomColor: '#bbb',
    paddingBottom: 20,
  },
  contentRow: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    marginTop: 30,
  },
  score: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 16,
    color: "#2563EB",
    marginRight: 10,
  },
  scoreContainer: { alignSelf: "center", marginBottom: 20, marginRight: 10, },
  scoreTextContainer: {
    position: "absolute",
    top: "34%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  scoreText: { fontSize: 20, fontWeight: "700", color: "#black" },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#374151",
  },
  textContainer: {
    backgroundColor: '#4A90E2',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 22,
  },
    headerLine: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#000',
  },
  lineText: {
    marginHorizontal: 8,
    fontWeight: '600',
    fontSize: 16,
    color: '#333',
  },
  productText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    flexShrink: 1,
  },
  closeButton: {
    padding: 16,
    backgroundColor: "#F9FAFB",
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
  },
});