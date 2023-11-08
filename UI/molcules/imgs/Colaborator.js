import {StyleSheet, Text, View} from 'react-native';
import CircleImageWithButton from '../buttons/CircleImageWithFollowButton';

export default function Colaborator({name, source, size}) {
  return (
    <View style={styles.container}>
      <CircleImageWithButton source={source} size={size} />
      <Text>{name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {alignItems: 'center'},
});
