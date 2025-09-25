import HomeSection from '@/components/HomeSection';
import ProductCarousel from '@/components/ProductCarousel';
import { testProducts } from '@/data/testProducts';
import { useRouter } from 'expo-router';
import {
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    return  (
        <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 16 }}>

            <View style={styles.welcome}>
                <Text style={styles.title}>Hi, Shelby</Text>
                <Text style={styles.welcomeTitle}>You've searched 8 products this week — Way to go! 🥳</Text>
            </View>

            <HomeSection title="Recent searches" onPressSeeAll={() => {router.push("/history")}}>
                <ProductCarousel products={testProducts} />
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
        marginBottom: 10,
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