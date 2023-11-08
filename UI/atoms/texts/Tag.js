import { StyleSheet, Text } from "react-native";

export default function Tag({children}) {
    return <Text style={styles.container}>@{children}</Text>
}

const styles = StyleSheet.create({
    container: {
        color: 'skyblue'
    }
})