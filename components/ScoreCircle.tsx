import { Product } from '@/types';
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

type ScoreCircleProps = {
    product: Product,
}

const ScoreCircle = ({product}: ScoreCircleProps) => {
    const size = 50;
    const strokeWidth = 8;
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

    const AnimatedCircle = Animated.createAnimatedComponent(Circle);

    return (
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
    )
}

const styles = StyleSheet.create({
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

export default ScoreCircle;