import { Text, TouchableOpacity } from "react-native";
import CircleImage from "../../Atoms/images/CircleImage";
import Lengths from "../../../assets/values/Lengths";
export default function Group({ group, setGroups }) {
  const width = Lengths.height * 0.08;
  return (
    <TouchableOpacity
      style={{
        width: width,
        height: "100%",
        backgroundColor: "yellow",
        alignItems: "center",
      }}
      onPress={() => {
        group.isSelected = !group.isSelected;
        setGroups((groups) => [...groups]);
      }}
    >
      <CircleImage len={width} image={group.image} />
      <Text style={{ fontSize: width * 0.16 }}>group1</Text>
      <Text style={{ fontSize: width * 0.16 }}>albumName1</Text>
    </TouchableOpacity>
  );
}
