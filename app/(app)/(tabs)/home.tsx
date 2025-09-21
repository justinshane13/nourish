import ProductCarousel from '@/components/ProductCarousel';
import { testProducts } from '@/data/testProducts';
import { useRouter } from 'expo-router';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const HomeScreen = () => {
    const router = useRouter();

    return  (
        <View style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Recent searches</Text>
                <ProductCarousel products={testProducts} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    sectionTitle: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 20,
        marginBottom: 10,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#13803d',
        minWidth: 280,
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
        margin: 20,
    },
    buttonSecondary: {
        backgroundColor: '#fff',
        minWidth: 280,
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderWidth: 1,
        borderColor: '#13803d',
        borderRadius: 25,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.2)"
  },
    modalContent: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        minHeight: "70%",
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12
    },
    section: {
        padding: 20,
    },
});

export default HomeScreen;