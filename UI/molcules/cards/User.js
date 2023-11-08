import { Text, TouchableOpacity } from "react-native";
import CircleImage from "../../Atoms/images/CircleImage";
import Lengths from "../../../assets/values/Lengths";
export default function User({ user, setUsers }) {
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
        user.isSelected = !user.isSelected;
        setUsers((users) => [...users]);
      }}
    >
      <CircleImage len={width} image={groupOrUser.image} />
      <Text style={{ fontSize: width * 0.16 }}>user1</Text>
    </TouchableOpacity>
  );
}
