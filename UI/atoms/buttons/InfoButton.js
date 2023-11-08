import {StyleSheet, Text, View} from 'react-native';

export default function InfoButton({name, people, size, gap}) {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          marginLeft: gap,
        },
      ]}>
      <Text style={styles.text}>{people.size}</Text>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontWeight: '900',
  },
});
