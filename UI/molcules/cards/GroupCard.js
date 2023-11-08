import {
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  ScrollView,
  Clipboard,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Spacer from '../../atoms/Spacer';
import Lengths from '../../../assets/values/Lengths';
import FolderCard from './FolderCard';
const height = Lengths.height;
const size = height * 0.04;
export default function GroupCard({
  group,
  whatGroupCardClicked,
  onGroupClicked,
}) {
  return (
    <Pressable
      onPress={async () => await onGroupClicked(group)}
      style={styles.container}>
      <View style={styles.left}>
        <Image source={{uri: group.image.url}} style={styles.image} />
        <Spacer width={size * 0.25} />
        <Text>{group.name}</Text>
        <Spacer width={size * 0.25} />
      </View>
      <View style={styles.right}>
        <Entypo
          name={
            whatGroupCardClicked.name == group.name
              ? 'chevron-small-down'
              : 'chevron-small-right'
          }
          color="black"
          size={size * 0.75}
        />
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    height: height * 0.06,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: height * 0.01,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  folderCard: {
    flexDirection: 'row',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: height * 0.04,
    width: height * 0.04,
    borderRadius: height * 0.008,
  },
});
