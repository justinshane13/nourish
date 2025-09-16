import { Dimensions, StyleSheet, Text, View } from 'react-native';

type Product = {
    name: string,
    score: number,
    ingredients: string[],
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.7; // 70% of screen width
const CARD_MARGIN = 12;

const ProductCard = ({product}: {product: Product}) => {
    return (
        <View style={styles.productCard}>
            <Text style={styles.tileTitle}>{product.name}</Text>
            <Text style={styles.tileText}>{product.score} / 100</Text>
            <Text style={styles.tileText}>{product.ingredients.join(", ")}</Text>
        </View>
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
        shadowRadius: 6,
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
    }
})

export default ProductCard;