import {StyleSheet, Text, View} from 'react-native';
import CircleImage from '../../atoms/images/CircleImage';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function SearchLog({name, source, uri}) {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <CircleImage source={uri ? {uri} : source} size={30} />
        <Text style={styles.text}>{name}</Text>
      </View>
      <AntDesign name="delete" color="black" size={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '6%',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {padding: 8},
});
