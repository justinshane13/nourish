import { Product } from '@/types';
import { router } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Animated, Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.7;
const CARD_MARGIN = 12;

const ProductCard = ({product}: {product: Product}) => {

    const size = 50;
    const strokeWidth = 8;
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

    const AnimatedCircle = Animated.createAnimatedComponent(Circle);

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
    scoreContainer: { alignSelf: "center", marginBottom: 20, width: 50 },
    scoreTextContainer: {
        position: "absolute",
        top: "34%",
        left: 0,
        right: 0,
        alignItems: "center",
    },
    scoreText: { fontSize: 14, fontWeight: "700", color: "#black" },
})

export default ProductCard;