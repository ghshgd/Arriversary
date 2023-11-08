import {Pressable, StyleSheet, View} from 'react-native';
import {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';

import CircleImage from '../../atoms/images/CircleImage';

export default function CircleImageWithButton({followOrNot, size, source}) {
  const [isFollowing, setIsFollowing] = useState(followOrNot);
  const locationFromBottom = size / 6;

  function onButtonClickHandler() {
    setIsFollowing(true);
  }
  return (
    <View
      style={{
        height: locationFromBottom + size,
        alignItems: 'center',
      }}>
      <CircleImage size={size} source={source} />
      <Pressable
        style={[
          styles.button,
          {
            width: locationFromBottom * 2,
            height: locationFromBottom * 2,
            borderRadius: locationFromBottom,
          },
        ]}
        onPress={onButtonClickHandler}>
        <Feather name="plus" size={locationFromBottom * 1.6} color="black" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
