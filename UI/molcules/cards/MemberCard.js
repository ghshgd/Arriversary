import {View, Text, StyleSheet} from 'react-native';
import Spacer from '../../atoms/Spacer';
import Lengths from '../../../assets/values/Lengths';
import CircleImage from '../../atoms/images/CircleImage';
const height = Lengths.height * 0.04;
export default function MemberCard({icon, name}) {
  return (
    <View style={styles.container}>
      <CircleImage size={height} source={icon} />
      <Spacer width={height * 0.25} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {fontSize: height * 0.5, color: 'black'},
});
