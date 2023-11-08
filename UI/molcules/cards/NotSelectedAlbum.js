import { View, Text, StyleSheet, Dimensions } from "react-native";
import CircleImage from "../../Atoms/images/CircleImage";
import Button from "../../Atoms/buttons/Button";
export default function NotSelectedAlbum({
  parentWidth,
  album,
  size,
  setIsSelected,
}) {
  console.log(`width: ${parentWidth}`);
  return (
    <View
      style={[
        { width: parentWidth - size * 0.5 },
        styles.main,
        styles.container,
      ]}
    >
      <View style={[styles.sub, styles.container]}>
        <CircleImage
          len={size}
          image={require("../../../assets/imgs/yihyun1.jpg")}
        />
        <Text style={{ fontWeight: "bold" }}>1</Text>
      </View>
      <Button
        size={size}
        onButtonClickHandler={setIsSelected}
        name="추가하기"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    justifyContent: "space-between",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  // sub: { width: "45%" },
  button: { backgroundColor: "white" },
});
