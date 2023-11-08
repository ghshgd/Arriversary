import {View, Text, StyleSheet} from 'react-native';
import CircleImage from '../../atoms/images/CircleImage';
import Lengths from '../../../assets/values/Lengths';

const size = Lengths.height * 0.06;
export default function SelectedCard({source, name}) {
  console.log(`SelectedGroupCard source:${source}`);
  return (
    <View style={[styles.container, {height: size, width: size * 1.5}]}>
      <CircleImage source={source} size={size} />
      <Text>{name.length > 8 ? name.slice(0, 7) + '...' : name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
});
