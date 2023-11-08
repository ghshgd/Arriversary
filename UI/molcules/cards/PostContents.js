import {StyleSheet, Image, Dimensions, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Swiper from 'react-native-swiper';

import Color from '../../../assets/colors/Color';

const {width} = Dimensions.get('window');
const buttonSize = width > 600 ? width / 20 : width / 10;

export default function PostPictures() {
  return (
    <Swiper
      loop={false}
      activeDotColor={Color.RepresentativeColor}
      dotStyle={styles.dotStyle}>
      <Image
        resizeMode="contain"
        style={styles.imageContainer}
        source={require('../../../assets/imgs/yihyun2.jpg')}
      />
      <Image
        resizeMode="contain"
        style={styles.imageContainer}
        source={require('../../../assets/imgs/yihyun3.jpg')}
      />
      <Image
        resizeMode="contain"
        style={styles.imageContainer}
        source={require('../../../assets/imgs/yihyun4.jpg')}
      />
      <Image
        resizeMode="contain"
        style={styles.imageContainer}
        source={require('../../../assets/imgs/yihyun5.jpg')}
      />
      <Image
        resizeMode="contain"
        style={styles.imageContainer}
        source={require('../../../assets/imgs/yihyun1.jpg')}
      />
      <Image
        resizeMode="contain"
        style={styles.imageContainer}
        source={require('../../../assets/imgs/yihyun2.jpg')}
      />
      <Image
        resizeMode="contain"
        style={styles.imageContainer}
        source={require('../../../assets/imgs/yihyun3.jpg')}
      />
      <Image
        resizeMode="contain"
        style={styles.imageContainer}
        source={require('../../../assets/imgs/yihyun4.jpg')}
      />
      <Image
        resizeMode="contain"
        style={styles.imageContainer}
        source={require('../../../assets/imgs/yihyun5.jpg')}
      />
    </Swiper>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  dotStyle: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },
  buttonWrapperStyle: {
    color: Color.RepresentativeColor,
  },
});
