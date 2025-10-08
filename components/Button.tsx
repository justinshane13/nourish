import { ButtonProps } from '@/types';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ title, onPress }: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
            <LinearGradient
                colors={["#13803d", "#16a34a", "#13803d"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            >
                <Text style={styles.buttonText}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
  },
  gradient: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  }
})

export default Button;