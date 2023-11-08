import {View, StyleSheet, Dimensions} from 'react-native';

import LeftOptions from '../molcules/stores/LeftOptions';
import RightOptions from '../molcules/stores/RightOptions';
import Description from '../atoms/texts/Description';
import ProfileInfo from '../molcules/cards/ProfileInfo';
import Lengths from '../../assets/values/Lengths';

const width = Lengths.width;
const standardSize = width > 600 ? width / 600 : width / 400;
const postInfoLength = Lengths.postInfo;

export default function PostInfo() {
  return (
    <View style={styles.container}>
      <ProfileInfo
        size={standardSize * 32}
        direction={'row'}
        name={'nickname1'}
      />
      <Description />
      <LeftOptions
        optionContainer={styles.optionContainer}
        size={standardSize}
      />
      <RightOptions
        optionContainer={styles.optionContainer}
        size={standardSize}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 4,
    right: 4,
  },
  optionContainer: {
    marginRight: standardSize * 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
