import { Octicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import Lengths from "../assets/values/Lengths";

export default function BackButton({style}) {
    return <Pressable
        onPress={() => {
            try {
                navigation.goBack();
            } catch (err) {
                console.error(err);
            }
        }}
        style={{...styles.goBackButton, ...style}}
    >
        <Octicons name="arrow-left" size={Lengths.header.height * 0.6} color="black" />
    </Pressable>
}

const styles = StyleSheet.create({
    goBackButton: {
        borderRadius: Lengths.header.height * 0.3
    }
})