import { Product } from '@/types';
import { router } from 'expo-router';
import { Dimensions, Pressable, StyleSheet, Text } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.7; // 70% of screen width
const CARD_MARGIN = 12;

const ProductCard = ({product}: {product: Product}) => {

    const handlePress = () => {
        router.push({
            pathname: "/product",
            params: {
                productName: product.name,
            }
        })
    }

    return (
        <Pressable style={styles.productCard} onPress={handlePress}>
            <Text style={styles.tileTitle}>{product.name}</Text>
            <Text style={styles.tileText}>Score: {product.score} / 100</Text>
            <Text style={styles.tileText}>Ingredients: {product.ingredients.join(", ")}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    productCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginHorizontal: CARD_MARGIN,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 4,
        width: CARD_WIDTH,
    },
    tileTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
    },
    tileText: {
        fontSize: 14,
        color: '#333',
        marginBottom: 10,
    }
})

export default ProductCard;