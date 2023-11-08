import Lengths from '../../../assets/values/Lengths';
import Spacer from '../../atoms/Spacer';
import Button from '../../atoms/buttons/Button';
import {View, Text, StyleSheet} from 'react-native';
import Card from './Card';
const height = Lengths.height;
const size = height * 0.04;
export default function FolderCard({parent, selected, onPress}) {
  if (parent) parent.folder = selected;
  return (
    <View style={styles.container}>
      <Card content={selected} />
      <Button
        name="선택"
        size={size}
        onPress={() => onPress(parent ? parent : selected)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: size * 1.5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
