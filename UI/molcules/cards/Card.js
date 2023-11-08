import {StyleSheet, View} from 'react-native';
import CircleImage from '../../atoms/images/CircleImage';
import Spacer from '../../atoms/Spacer';
import {Text} from 'react-native';
import Lengths from '../../../assets/values/Lengths';

const height = Lengths.height;
const size = height * 0.04;
export default function Card({content}) {
  return (
    <View style={styles.profileContainer}>
      <CircleImage source={{uri: content?.image.url}} size={size} />
      <Spacer width={size * 0.25} />
      <Text>{content?.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  profileContainer: {flexDirection: 'row', alignItems: 'center'},
});
