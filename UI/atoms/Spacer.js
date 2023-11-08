import { View } from "react-native";

export default function Spacer({ width, height, color }) {
  return <View style={{ width, height, backgroundColor: color }} />;
}
