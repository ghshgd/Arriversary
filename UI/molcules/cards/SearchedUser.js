import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CircleImage from "../../Atoms/images/CircleImage";
import Icon from "react-native-vector-icons/Feather";
import { useState } from "react";
import NotSelectedAlbum from "./NotSelectedAlbum";
import Spacer from "../../Atoms/Spacer";
export default function SearchedUser({ user, setUsers, index }) {
  const [parentWidth, setParentWidth] = useState(0);
  const size = 40;
  return (
    <View>
      <TouchableOpacity
        style={[styles.main, styles.container]}
        onPress={() =>
          setUsers((prev) => {
            prev[index].isSelected = !prev[index].isSelected;
            return [...prev];
          })
        }
      >
        <View style={[styles.sub, styles.container]}>
          <CircleImage
            len={size}
            image={require("../../../assets/imgs/yihyun1.jpg")}
          />
          <Text style={{ fontSize: size * 0.5 }}>
            textView입니다:{user.name}
          </Text>
        </View>
        <Icon
          size={size}
          color="black"
          name={user.isSelected ? "chevron-down" : "chevron-right"}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: { width: "100%", justifyContent: "space-between" },
  sub: {},
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "orange",
  },
});
