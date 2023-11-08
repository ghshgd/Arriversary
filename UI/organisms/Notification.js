import {Image, Pressable, StyleSheet, Text} from 'react-native';
import Strings from '../../assets/values/Strings';
import CircleImageWithButton from '../molcules/buttons/CircleImageWithFollowButton';
import Spacer from '../atoms/Spacer';
import PassTimeText from '../atoms/texts/PassTimeText';
import {View} from 'react-native';

export default function Notification({width, kind /* person */}) {
  const notificationName = Strings.NotificationName;
  function onNavigateToPostHandler() {}
  const notiMessage =
    kind === notificationName.Like
      ? 'user1님이 회원님의 게시물을 좋아하십니다.'
      : kind === notificationName.Comment
      ? 'user2님이 회원님의 게시물에 댓글을 다셨습니다.'
      : kind === notificationName.Follow
      ? 'user3님이 회원님을 팔로우하셨습니다.'
      : kind === notificationName.Tag
      ? 'user4님이 회원님을 태그하셨습니다.'
      : null;

  console.log('name:', kind);
  return (
    <Pressable style={{...styles.container, marginVertical: width * 0.01}}>
      <CircleImageWithButton
        size={width * 0.15}
        source={require('../../assets/imgs/yihyun1.jpg')}
      />
      <Spacer width={width * 0.04} />
      <View>
        <Text style={{width: width * 0.62}}>{notiMessage}</Text>
        <PassTimeText />
      </View>
      <Spacer width={width * 0.04} />
      <Image
        style={{width: width * 0.15, height: width * 0.15}}
        source={require('../../assets/imgs/contents_arriversary_text_image.jpg')}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  timeText: {
    color: 'grey',
  },
});
