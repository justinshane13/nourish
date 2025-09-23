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
                <Text style={styles.title}>Hi, Shelby.</Text>
                <Text style={styles.welcomeTitle}>You've searched 8 products this week. Way to go!</Text>
            </View>

            <HomeSection title="Recent searches" onPressSeeAll={() => {router.push("/history")}}>
                <ProductCarousel products={testProducts} />
            </HomeSection>

            <HomeSection title="Recommendations" onPressSeeAll={() => {router.push("/history")}}>
                <ProductCarousel products={testProducts} />
            </HomeSection>
            
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 0,
        color: '#000',
    },
    welcome: {
        padding: 20,
    },
    welcomeTitle: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 20,
        marginBottom: 10,
    },
});

export default HomeScreen;