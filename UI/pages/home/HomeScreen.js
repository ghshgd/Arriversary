import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import PagerView from 'react-native-pager-view';
import Post from '../../organisms/Post';
import Lengths from '../../../assets/values/Lengths';
const height =
  Dimensions.get('window').height -
  Lengths.tabBar -
  (Platform.OS === 'android' ? 0 : Lengths.statusbarHeight);
console.log(`HomeScreen call@`);
const HomeScreen = () => {
  return (
    <PagerView
      initialPage={1}
      style={styles.pagerView}
      scrollEnabled
      orientation={'vertical'}>
      <Post key={1} height={height} />
      <Post key={2} height={height} />
      <Post key={3} height={height} />
      <Post key={4} height={height} />
      <Post key={5} height={height} />
      <Post key={6} height={height} />
      <Post key={7} height={height} />
      <Post key={8} height={height} />
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});
export default HomeScreen;
