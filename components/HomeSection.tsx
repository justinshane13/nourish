import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface HomeSectionProps {
    title: string;
    onPressSeeAll: () => void;
    children: React.ReactNode;
}

const HomeSection = ({title, onPressSeeAll, children}: HomeSectionProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{title}</Text>
                <View style={styles.underlineContainer}>
                    <TouchableOpacity onPress={onPressSeeAll}>
                        <Text style={styles.link}>See all</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {children}
        </View>
    )
}

export default HomeSection;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',   
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    link: {
        marginTop: 0,
        textAlign: "left",
        color: "#000",
        fontSize: 12,
        fontWeight: "500",
    },
    underlineContainer: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        alignSelf: 'flex-start',
        marginRight: 4,
    }
})