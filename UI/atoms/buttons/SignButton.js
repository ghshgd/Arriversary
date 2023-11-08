import { Pressable, Text } from "react-native";

export default function SignButton({ onPress, style, fontSize, title }) {
  return (
    <Pressable onPress={onPress} style={style}>
      <Text style={{ fontSize }}>{title}</Text>
    </Pressable>
  );
}
