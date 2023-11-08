import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Switch} from 'react-native-switch';
const PostOption = ({name, isEnabled, setIsEnabled, height}) => {
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={[styles.container, {height}]}>
      <Text style={styles.text}>{name}</Text>
      <Switch
        activeText={'On'}
        inActiveText={'Off'}
        backgroundActive={'green'}
        backgroundInactive={'gray'}
        circleActiveColor={'#30a566'}
        circleInActiveColor={'#ddd'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {fontWeight: '500'},
});

export default PostOption;
