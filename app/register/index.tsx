import { useRouter } from 'expo-router';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const RegisterScreen = () => {
    const router = useRouter();

    return  (
        <View style={styles.container}>
            <Text>To Do</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default RegisterScreen;