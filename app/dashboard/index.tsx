import ProductCarousel from '@/components/ProductCarousel';
import { useRouter } from 'expo-router';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.7; // 70% of screen width
const CARD_MARGIN = 12;

const sampleProducts = [
  {
    name: 'Coca-Cola',
    score: 12,
    ingredients: [
      "water",
      "high fructose corn syrup",
      "natural flavors"
    ]
  },
  {
    name: 'Lay’s Classic Potato Chips',
    score: 28,
    ingredients: [
      "potatoes",
      "vegetable oil",
      "salt"
    ]
  },
  {
    name: 'Oreo Cookies',
    score: 22,
    ingredients: [
      "sugar",
      "unbleached enriched flour",
      "palm oil",
      "cocoa"
    ]
  },
  {
    name: 'Neutrogena Face Wash',
    score: 70,
    ingredients: [
      "water",
      "glycerin",
      "cocamidopropyl betaine",
      "salicylic acid"
    ]
  },
  {
    name: 'KitKat Bar',
    score: 30,
    ingredients: [
      "milk chocolate",
      "sugar",
      "wheat flour",
      "vegetable oil"
    ]
  },
  {
    name: 'Maybelline Lipstick',
    score: 55,
    ingredients: [
      "castor seed oil",
      "beeswax",
      "paraffin",
      "fragrance"
    ]
  },
  {
    name: 'Ben & Jerry’s Chocolate Fudge Brownie',
    score: 25,
    ingredients: [
      "cream",
      "skim milk",
      "sugar",
      "cocoa",
      "brownie pieces"
    ]
  },
  {
    name: 'Head & Shoulders Shampoo',
    score: 65,
    ingredients: [
      "water",
      "sodium lauryl sulfate",
      "zinc pyrithione",
      "fragrance"
    ]
  },
  {
    name: 'Nature Valley Granola Bar',
    score: 72,
    ingredients: [
      "whole grain oats",
      "sugar",
      "canola oil",
      "honey"
    ]
  },
  {
    name: 'Dove Body Lotion',
    score: 80,
    ingredients: [
      "water",
      "glycerin",
      "stearic acid",
      "dimethicone"
    ]
  }
]

const DashboardScreen = () => {
    const router = useRouter();

    return  (
        <View style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Recent scans</Text>        
                <ProductCarousel products={sampleProducts} />
            </View>
            <View>
                <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('/scan-product')}
                >
                    <Text style={styles.buttonText}>Scan Product</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionTitle: {
        fontSize: 22,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    section: {
        padding: 10,
    },
    button: {
        backgroundColor: '#228866',
        minWidth: 280,
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
        alignItems: 'center',
        margin: 20,
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
});

export default DashboardScreen;