import HomeSection from '@/components/HomeSection';
import NativeAdCard from '@/components/NativeAdCard';
import ProductCarousel from '@/components/ProductCarousel';
import { testProducts } from '@/data/testProducts';
import { useRouter } from 'expo-router';
import React, { useRef } from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    BannerAd,
    useForeground
} from 'react-native-google-mobile-ads';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const bannerRef = useRef<BannerAd>(null);

    useForeground(() => {
        Platform.OS === 'ios' && bannerRef.current?.load();
    });

    return  (
        <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 16 }}>

            <View style={styles.welcome}>
                <Text style={styles.title}>Hi, Shelby.</Text>
                <Text style={styles.welcomeTitle}>You've searched 12 products this week — Way to go! 🥳</Text>
            </View>

            <HomeSection title="Recent searches" onPressSeeAll={() => {router.push("/history")}}>
                <ProductCarousel products={testProducts} />
            </HomeSection>

            {/* TODO: replace TestIds with real ad unit IDs from admob when ready for production */}
            {/* <BannerAd ref={bannerRef} unitId={TestIds.BANNER} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} /> */}
            <HomeSection title="Sponsored content">
                <NativeAdCard />
            </HomeSection>

            <HomeSection title="You Might Like" onPressSeeAll={() => {router.push("/history")}}>
                <ProductCarousel products={testProducts.filter(product => product.score >= 85)} />
            </HomeSection>
            
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 0,
        color: '#fff',
    },
    welcome: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: '#000',
        marginBottom: 0,
    },
    welcomeTitle: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 10,
        lineHeight: 23,
    },
});

export default HomeScreen;