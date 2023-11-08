import {Pressable, StyleSheet, Text, View} from 'react-native';
import Lengths from '../../../assets/values/Lengths';

export default function Button({size, name, color, onPress, borderColor}) {
  return (
    <View
      style={{
        width: size * 3,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: Color.RepresentativeColor,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: !borderColor ? 'black' : borderColor,
        backgroundColor: color ? color : undefined,
      }}>
      <Pressable onPress={onPress}>
        <Text style={styles.text}>{name}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});
