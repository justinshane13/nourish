import { Product } from '@/types';
import { router } from 'expo-router';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import ScoreCircle from './ScoreCircle';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.7;
const CARD_MARGIN = 12;

const ProductCard = ({product}: {product: Product}) => {


    const handlePress = () => {
        router.push({
            pathname: "/product",
            params: {
                productId: product.id,
            }
        })
    }

    return (
        <Pressable style={styles.productCard} onPress={handlePress}>
            <Text style={styles.tileTitle} numberOfLines={3} ellipsizeMode="tail">{product.name}</Text>

            <View style={styles.cardRowTwo}>
                <ScoreCircle product={product} />
                <Text style={styles.tileText}><Text style={{ fontWeight: 'bold' }}>Ingredients:</Text> {product.ingredients.join(", ")}</Text>
            </View>

        </Pressable>
    )
}

const styles = StyleSheet.create({
    productCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginHorizontal: CARD_MARGIN,
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
        flexShrink: 1,
    },
    cardRowTwo: {
        flexDirection: 'row',
        gap: 10,
        width: '100%',
        marginTop: 10,
    },
})

export default ProductCard;