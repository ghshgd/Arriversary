import { FlatList } from "react-native";
import Lengths from "../../../assets/values/Lengths";
import Group from "../cards/Group";
export default function SelectedGroups({ groups, setGroups }) {
  const height = Lengths.height * 0.1;
  const renderItem = ({ item }) =>
    item.isSelected && <Group group={item} setGroups={setGroups} />;
  return (
    <FlatList
      style={{ width: "100%", height, backgroundColor: "blue" }}
      horizontal
      data={groups}
      renderItem={renderItem}
      keyExtractor={(_, index) => index}
    />
  );
}
