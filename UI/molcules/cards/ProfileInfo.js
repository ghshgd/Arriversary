import {StyleSheet, Text, View, Pressable} from 'react-native';
import {useState} from 'react';

import CircleImage from '../../atoms/images/CircleImage';
import Color from '../../../assets/colors/Color';

export default function ProfileInfo({direction, size, name}) {
  const [isFollowing, setIsFollowing] = useState(false);
  function onFollowHandler() {
    console.log(
      isFollowing ? 'following' : 'follow',
      '에서',
      isFollowing ? 'follow' : 'following',
      '으로 바꾸겠습니다.',
    );
    setIsFollowing(currentIsFollowing => !currentIsFollowing);
  }
  return (
    <View
      style={{
        flexDirection: direction,
        alignItems: 'center',
      }}>
      <CircleImage
        size={size}
        source={require('../../../assets/imgs/yihyun2.jpg')}
      />
      <Text style={styles.nickname}>{name}</Text>
      <Pressable style={{marginLeft: 8}} onPress={onFollowHandler}>
        <Text style={{color: Color.RepresentativeColor}}>
          {isFollowing ? 'following' : 'follow'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  nickname: {
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
