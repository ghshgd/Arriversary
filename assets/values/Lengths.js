import {Dimensions, Platform, StatusBar} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const {width, height} = Dimensions.get('window');
const OS = Platform.OS;
console.log(`가로: ${width}, 세로: ${height}`);
const Lengths = {
  text: {
    size: height * 0.04,
  },
  tabBar: 48,
  statusbarHeight:
    OS === 'android' ? StatusBar.currentHeight : getStatusBarHeight(true),
  searchBarHeight: height > 600 ? height * 0.06 : height * 0.1,
  width,
  height,
  time: {
    fontSize: width * 0.025,
    fontColor: '#777',
  },
  header: {
    fontSize: width * 0.05,
    height: height / 18,
    component: {
      gap: height / 72,
    },
  },
  fontSize: 24,
};
export default Lengths;
