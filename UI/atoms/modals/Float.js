import React, {useCallback, useRef, useMemo, useLayoutEffect} from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Lengths from '../../../assets/values/Lengths';
const height = Lengths.height;
export default Float = ({isClicked, setIsClicked, children}) => {
  // hooks
  const sheetRef = useRef(null);
  // variables
  const snapPoints = useMemo(() => ['50%'], []);
  if (sheetRef.current && isClicked) sheetRef.current.snapToIndex(0);
  /* 
  useLayoutEffect(() => {
    sheetRef.current.close();
  }, []); */
  // render
  return (
    <GestureHandlerRootView
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
      }}>
      <TouchableOpacity
        onPress={() => {
          setIsClicked(false);
          sheetRef.current.close();
        }}
        style={{flex: 1}}
      />
      <BottomSheet ref={sheetRef} snapPoints={snapPoints} enablePanDownToClose>
        <BottomSheetView>{children}</BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
});
