import ScanProduct from '@/components/ScanProduct';
import { useRouter } from 'expo-router';
import {
    StyleSheet,
    View
} from 'react-native';

const ScanScreen = () => {
    const router = useRouter();

    return  (
        <View style={styles.container}>
            <ScanProduct />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ScanScreen;