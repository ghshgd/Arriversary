import { StyleSheet, Text } from "react-native";
import Lengths from "../../../assets/values/Lengths";

export default function PassTimeText() {
  const currentTime = new Date().getTime();
  const time202301060000 = new Date(2023, 0, 7, 16, 15, 0).getTime();
  const oneSec = 1000;
  const oneMinute = oneSec * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneWeek = oneDay * 7;

  let passTime = currentTime - time202301060000;
  passTime =
    passTime / oneMinute < 1
      ? parseInt(passTime / oneSec) + "초 전"
      : passTime / oneHour < 1
      ? parseInt(passTime / oneMinute) + "분 전"
      : passTime / oneDay < 1
      ? parseInt(passTime / oneHour) + "시간 전"
      : passTime / oneWeek < 1
      ? parseInt(passTime / oneDay) + "일 전"
      : parseInt(passTime / oneWeek) + "주 전";

  return <Text style={styles.text}>{passTime}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: Lengths.time.fontColor,
    fontSize: Lengths.time.fontSize,
  },
});
