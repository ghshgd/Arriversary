import {Image, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useState} from 'react';
import {Pressable} from 'react-native';
export default function RightOptions({optionContainer, size}) {
  const [hasAddedToList, setHasAddedToList] = useState(false);
  const icon = {
    save: {
      size: size * 17,
    },
    share: {
      size: size * 22,
    },
  };

  function onAddToListHandler() {
    setHasAddedToList(prev => !prev);
    console.log(`리스트에 추가했냐?:${hasAddedToList}`);
  }
  return (
    <View style={styles.optionsContainer}>
      <View style={optionContainer}>
        <Ionicons
          name="share-social-outline"
          size={icon.share.size}
          color="black"
        />
        <Text>6.8m</Text>
      </View>
      <View style={[optionContainer, {marginRight: 0}]}>
        <Pressable onPress={onAddToListHandler}>
          <FontAwesome
            name={hasAddedToList ? 'bookmark' : 'bookmark-o'}
            size={icon.save.size}
          />
        </Pressable>
        <Text>6.8m</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    flexDirection: 'row',
  },
});
