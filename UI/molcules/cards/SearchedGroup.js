import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CircleImage from "../../Atoms/images/CircleImage";
import Icon from "react-native-vector-icons/Feather";
import { useState } from "react";
import NotSelectedAlbum from "./NotSelectedAlbum";
import Spacer from "../../Atoms/Spacer";
export default function SearchedGroup({ group, setGroups, index }) {
  console.log(`그룹:${group}`);
  const [parentWidth, setParentWidth] = useState(0);
  const size = 40;
  return (
    <View>
      <TouchableOpacity
        style={[styles.main, styles.container]}
        onPress={() =>
          setGroups((prev) => {
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
            textView입니다:{group.name}
          </Text>
        </View>
        <Icon
          size={size}
          color="black"
          name={group.isSelected ? "chevron-down" : "chevron-right"}
        />
      </TouchableOpacity>
      {group.isSelected &&
        group.albums.map((album, albumIndex) => (
          <View key={albumIndex}>
            <Spacer height={8} />
            <View
              onLayout={(event) => {
                const { width } = event.nativeEvent.layout;
                if (parentWidth === 0) setParentWidth(width);
              }}
              style={{ flexDirection: "row" }}
            >
              <Spacer width={size * 0.5} />
              <NotSelectedAlbum
                album={album}
                size={size}
                parentWidth={parentWidth}
                index={albumIndex}
                setIsSelected={() =>
                  setGroups((prev) => {
                    prev[index].isSelected = !prev[index].isSelected;
                    return [...prev];
                  })
                }
              />
            </View>
          </View>
        ))}
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
