import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import Lengths from "../../assets/values/Lengths";
import CircleImage from "../../components/CircleImage";

const images = {
  "2023-02-20": require("../../assets/imgs/yihyun1.jpg"),
  "2023-02-21": require("../../assets/imgs/yihyun2.jpg"),
  "2023-02-22": require("../../assets/imgs/yihyun3.jpg"),
  "2023-02-23": require("../../assets/imgs/yihyun4.jpg"),
  "2023-02-24": require("../../assets/imgs/yihyun5.jpg"),
  "2023-02-25": require("../../assets/imgs/youjeong1.jpg"),
  "2023-02-26": require("../../assets/imgs/youjeong5.png"),
};
const width = Lengths.width;
const dayWidth = width / 7.5;
const CalendarScreen = ({ navigation }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);

  const onMonthChangeHandler = ({ month }) => {
    setCurrentMonth(month);
    console.log(`currentMonth:${month}`);
  };
  const renderDay = ({ day, date, state }) => {
    return (
      <View style={styles.dayContainer}>
        {images[date.dateString] && (
          <Image
            source={images[date.dateString]}
            style={[styles.dayStyle, styles.image]}
          />
        )}
        <Text
          style={[
            styles.dayStyle,
            styles.dayText,
            date.month !== currentMonth && { color: "grey" },
          ]}
        >
          {date.day}
        </Text>
      </View>
    );
  };

  function renderHeader(date) {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const headerText = `${year}년 ${month}월`;

    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
    );
  }
  function goToCommentForTodayHandler() {
    navigation.navigate("CommentForToday");
  }
  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
        renderHeader={renderHeader}
        hideArrows
        /* 요일에서 텍스트의 스타일을 볼드체로 하고 나라마다 표시되는 텍스트를 다르게 하기 */
        enableSwipeMonths
        dayComponent={renderDay}
        onMonthChange={onMonthChangeHandler}
      />
      <Pressable
        onPress={goToCommentForTodayHandler}
        style={styles.commentForToday}
      >
        <CircleImage
          len={width / 8}
          image={require("../../assets/imgs/yihyun1.jpg")}
        />
      </Pressable>
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    height: width / 16,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  headerText: { fontWeight: "700", fontSize: width / 24 },
  commentForToday: {
    position: "absolute",
    right: width / 16,
    bottom: width / 16,
    elevation: 50,
  },
  dayContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: dayWidth,
    height: dayWidth,
    backgroundColor: "white",
  },
  dayStyle: {
    /* width와 height를 화면의 가로 길이(width)에 비례하게 바꾸기 */
    width: dayWidth,
    height: dayWidth,
  },
  dayText: { position: "absolute", top: width / 200, left: width / 100 },
  image: {
    borderRadius: dayWidth / 5,
  },
});
