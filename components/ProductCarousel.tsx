import React from 'react';
import { Dimensions, FlatList, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

type Product = {
  name: string;
  score: number;
  ingredients: string[];
};

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.7; // 70% of screen width
const CARD_MARGIN = 12;

const ProductCarousel = ({ products }: { products: Product[] }) => {
  return (
    <FlatList
      data={products}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ paddingHorizontal: CARD_MARGIN }}
      snapToInterval={CARD_WIDTH + CARD_MARGIN * 2} // snap effect
      decelerationRate="fast"
      renderItem={({ item }) => <ProductCard product={item} />}
    />
  );
};

const styles = StyleSheet.create({
  tile: {
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
  },
});

export default ProductCarousel;