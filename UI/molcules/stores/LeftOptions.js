import {View, StyleSheet} from 'react-native';

import Option from '../buttons/Option';

export default function LeftOptions({optionContainer, size}) {
  const heartIconSize = size * 24;
  const commentIconSize = size * 24;
  const messageIconSize = size * 22;

  const saveIconSize = size * 36;

  return (
    <View style={styles.optionsContainer}>
      <Option viewStyle={optionContainer} name="heart" size={heartIconSize} />
      <Option
        viewStyle={optionContainer}
        name="comment"
        size={commentIconSize}
      />
      <Option
        viewStyle={[optionContainer, {marginRight: 0}]}
        name="paper-plane"
        size={messageIconSize}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: 'row',
  },
});
