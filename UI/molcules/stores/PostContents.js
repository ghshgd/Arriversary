import { StyleSheet, Image, Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Swiper from "react-native-swiper";

import Color from "../../../assets/colors/Color";

const { width, height } = Dimensions.get("screen");
const buttonSize = width > 600 ? width / 20 : width / 10;

export default function PostPictures() {
  return (
    <Swiper
      showsButtons
      loop={false}
      activeDotColor={Color.RepresentativeColor}
      dotStyle={styles.dotStyle}
      nextButton={
        <Entypo
          name="chevron-right"
          size={buttonSize}
          color={Color.RepresentativeColor}
        />
      }
      prevButton={
        <Entypo
          name="chevron-left"
          size={buttonSize}
          color={Color.RepresentativeColor}
        />
      }
    >
      <Image
        resizeMode="contain"
        style={styles.imageContainer}
        source={require("../../assets/imgs/yihyun2.jpg")}
      />
      <Image
        resizeMode="contain"
        style={styles.imageContainer}
        source={require("../../assets/imgs/yihyun3.jpg")}
      />
      <Image
        resizeMode="contain"
        style={styles.imageContainer}
        source={require("../../assets/imgs/yihyun4.jpg")}
      />
      <Image
        resizeMode="contain"
        style={styles.imageContainer}
        source={require("../../assets/imgs/yihyun5.jpg")}
      />
      <Image
        resizeMode="contain"
        style={styles.imageContainer}
        source={require("../../assets/imgs/yihyun1.jpg")}
      />
      <Image
        resizeMode="contain"
        style={styles.imageContainer}
        source={require("../../assets/imgs/yihyun2.jpg")}
      />
      <Image
        resizeMode="contain"
        style={styles.imageContainer}
        source={require("../../assets/imgs/yihyun3.jpg")}
      />
      <Image
        resizeMode="contain"
        style={styles.imageContainer}
        source={require("../../assets/imgs/yihyun4.jpg")}
      />
      <Image
        resizeMode="contain"
        style={styles.imageContainer}
        source={require("../../assets/imgs/yihyun5.jpg")}
      />
    </Swiper>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width,
    height,
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
