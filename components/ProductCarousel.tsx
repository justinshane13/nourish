import { Product } from '@/types';
import React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import ProductCard from './ProductCard';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.7; // 70% of screen width
const CARD_MARGIN = 12;

const ProductCarousel = ({ products }: { products: Product[] }) => {
    
    if (products.length < 1) {
        return (
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 20,
                }}
            >
                <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 6, color: 'black', }}>
                    No products yet
                </Text>
                <Text style={{ fontSize: 14, color: "black", textAlign: "center" }}>
                    Try scanning a product to get started.
                </Text>
            </View>
        )
    }

    return (
        <FlatList
            style={styles.flatList}
            data={products}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ paddingHorizontal: 0 }}
            snapToInterval={CARD_WIDTH + CARD_MARGIN * 2} // snap effect
            decelerationRate="fast"
            renderItem={({ item }) => <ProductCard product={item} />}
        />
    );
};

const styles = StyleSheet.create({
  flatList: {
    marginLeft: -14,
    paddingBottom: 10,
  }
});

export default ProductCarousel;