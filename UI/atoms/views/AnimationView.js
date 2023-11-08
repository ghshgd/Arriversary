import React, {useState, useRef} from 'react';
import {Animated, PanResponder, StyleSheet, View} from 'react-native';
import {
  GestureHandlerRootView,
  PinchGestureHandler,
  State,
} from 'react-native-gesture-handler';
import Lengths from '../../../assets/values/Lengths';
import {Easing} from 'react-native-reanimated';
import {useHeaderHeight} from '@react-navigation/elements';
const AnimationView = ({children, animationStyle}) => {
  const header_height = useHeaderHeight();
  const width = Lengths.width;
  const height = Lengths.height / 2 - header_height;
  const scale = useRef(new Animated.Value(1)).current;
  const [location, setLocation] = useState({x: 0, y: 0});
  const animated_location = new Animated.ValueXY({x: 0, y: 0});
  const [viewWidth, setViewWidth] = useState(0);
  const [viewHeight, setViewHeight] = useState(0);
  const [initialScale, setInitialScale] = useState(scale._value);
  const [real, setReal] = useState({});
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) =>
      Math.abs(gestureState.dx) > 30 || Math.abs(gestureState.dy) > 30,
    /* 손가락으로 터치한 채로 움직였을 때 손가락이 움직인 거리와
    뷰가 움직인 거리를 같게 하라 */
    onStartShouldSetPanResponder: () => {},
    onPanResponderMove: (evt, gestureState) => {
      /* TODO: viewRef의 절대적 위치를 x, y에 넣어라 */
      const {dx, dy} = gestureState;
      /* 
      const real_view_width = viewWidth * scale._value;
      const real_view_height = viewHeight * scale._value;
      const space_x = real_view_width - width;
      const space_y = real_view_height - height;
      const locX = dx + location.x;
      const locY = dy + location.y;

      const real_position_x = locX - space_x / 2;
      const real_position_y = locY - space_y / 2;
      const toX =
        real_position_x > 0
          ? space_x / 2 + real_position_x * Math.pow(0.98, real_position_x / 10)
          : real_position_x < -space_x
          ? -space_x + (locX - space_x) * Math.cos(0.98, real_position_x / 10)
          : locX;
      const toY =
        real_position_y > 0
          ? space_y / 2 + real_position_y * Math.cos(0.98, real_position_y / 10)
          : real_position_y < -space_y
          ? -space_y + (locY - space_y) * Math.cos(0.98, real_position_y / 10)
          : locY; */
      animated_location.setValue({
        x: dx + location.x,
        y: dy + location.y,
      });
      // setLocation({x: currentX, y: currentY});
    },
    onPanResponderEnd: (evt, gestureState) => {
      const {dx, dy} = gestureState;

      const real_view_width = viewWidth * scale._value;
      const real_view_height = viewHeight * scale._value;
      const space_x = real_view_width - width;
      const space_y = real_view_height - height;
      const locX = dx + location.x;
      const locY = dy + location.y;
      real_position_x = -space_x / 2 + locX;
      real_position_y = -space_y / 2 + locY;
      const toX =
        real_view_width - width > 0
          ? real_position_x > 0
            ? space_x / 2
            : real_position_x < -space_x
            ? -space_x / 2
            : locX
          : 0;
      const toY =
        real_view_height - height > 0
          ? real_position_y > 0
            ? space_y / 2
            : real_position_y < -space_y
            ? -space_y / 2
            : locY
          : 0;
      Animated.timing(animated_location, {
        toValue: {x: toX, y: toY},
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        setLocation({
          x: animated_location.x._value,
          y: animated_location.y._value,
        });
        animated_location.setValue({x: 0, y: 0});
      });
    },
  });

  const onLayout = ({
    nativeEvent: {
      layout: {width, height},
    },
  }) => {
    setViewWidth(width);
    setViewHeight(height);
  };

  const onPinchEvent = ({nativeEvent}) => {
    scale.setValue(nativeEvent.scale * initialScale);
  };

  const handlePinchStateChange = ({nativeEvent}) => {
    const nScale = nativeEvent.scale;

    if (nativeEvent.state === State.END) {
      const totalScale = nScale * scale._value;
      if (totalScale < 0.6) {
        Animated.timing(scale, {
          toValue: 0.6,
          duration: 200, // 밀리초 단위의 애니메이션 지속 시간
          easing: Easing.spring, // 또는 다른 Easing 함수를 사용
          useNativeDriver: false,
        }).start(); // 상태를 업데이트하여 초기화하지 않음
      } else if (totalScale > 2) {
        Animated.timing(scale, {
          toValue: 2,
          duration: 200, // 밀리초 단위의 애니메이션 지속 시간
          easing: Easing.spring, // 또는 다른 Easing 함수를 사용
          useNativeDriver: false,
        }).start();
      } else {
        scale.setValue(initialScale * nScale);
      }
      setInitialScale(prevInitScale => prevInitScale * nScale);
      /* setLocation({
        x: animated_location.x._value,
        y: animated_location.y._value,
      }); */
    } else if (nativeEvent.state === State.BEGAN) {
      setInitialScale(scale._value);
      /* animated_location.setValue({
        x:
          (viewWidth / 2) * (scale._value - 1) +
          location.x -
          (viewWidth * scale._value) / 2,
        y: height / 2 - (viewHeight * scale._value) / 2,
      }); */
    } else if (nativeEvent.state === State.ACTIVE) {
      /* animated_location.setValue({
        x: width / 2 - (viewWidth * initialScale * nScale) / 2,
        y: height / 2 - (viewHeight * initialScale * nScale) / 2,
      }); */
    }
  };

  return (
    <GestureHandlerRootView
      style={{
        width,
        height,
        backgroundColor: 'yellow',
      }}>
      <PinchGestureHandler
        onGestureEvent={onPinchEvent}
        onHandlerStateChange={handlePinchStateChange}>
        <Animated.View
          onLayout={onLayout}
          style={{
            width: width,
            height: height,
            justifyContent: 'center',
            /* left: (viewWidth / 2) * (1 - scale._value) + location.x,
            top: (viewHeight / 2) * (1 - scale._value) + location.y, */
            backgroundColor: 'red',
            transform: [
              {translateX: animated_location.x},
              {translateY: animated_location.y},
              {scale: scale},
            ],
          }}
          {...panResponder.panHandlers}>
          {children}
        </Animated.View>
      </PinchGestureHandler>
    </GestureHandlerRootView>
  );
};

export default AnimationView;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    height: 36,
  },
});
