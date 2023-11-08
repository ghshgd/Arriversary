import { FlatList } from "react-native";
import Lengths from "../../../assets/values/Lengths";
import User from "../cards/User";
export default function SelectedUsers({ users, setUsers }) {
  const height = Lengths.height * 0.1;
  const renderItem = ({ item }) =>
    item.isSelected && <User user={item} setUsers={setUsers} />;
  return (
    <FlatList
      style={{ width: "100%", height, backgroundColor: "blue" }}
      horizontal
      data={users}
      renderItem={renderItem}
      keyExtractor={(_, index) => index}
    />
  );
}
