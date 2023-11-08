import {View} from 'react-native';
import PostInfo from './PostInfo';
import PostContents from '../molcules/cards/PostContents';
import Colaborators from './Colaborators';

export default function Post({height}) {
  return (
    <View style={{flex: 1, height}}>
      <PostContents />
      <Colaborators />
      <PostInfo />
    </View>
  );
}
