import {StyleSheet, Text, View, Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CircleImage from '../../atoms/images/CircleImage';
import Lengths from '../../../assets/values/Lengths';
const iconSize = 36;
export default function Selection({icon, name, height, onPress, selected}) {
  return (
    <Pressable style={[styles.container, {height}]} onPress={onPress}>
      <View style={styles.subContainer}>
        {icon === 'group' ? (
          <MaterialIcons size={iconSize} name={'group'} color="black" />
        ) : icon === 'folder' ? (
          <Ionicons size={iconSize} name={'albums'} color="black" />
        ) : (
          icon === 'colaborator' && (
            <Ionicons size={iconSize} name="person-add" color="black" />
          )
        )}
        <Text style={styles.text}>{name}</Text>
      </View>
      {selected ? (
        <View style={[styles.selectedGroup, {marginHorizontal: height * 0.25}]}>
          <CircleImage
            style={{marginHorizontal: height * 0.25}}
            source={{uri: selected.image.url}}
            size={Lengths.height * 0.04}
          />
          <Text>{selected.name}</Text>
        </View>
      ) : (
        <Entypo size={iconSize} name="chevron-right" color="black" />
      )}
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedGroup: {flexDirection: 'row', alignItems: 'center'},
  subContainer: {flexDirection: 'row', height: '100%', alignItems: 'center'},
  text: {fontSize: 16, fontWeight: '500'},
});
