import {createStackNavigator} from '@react-navigation/stack';

import Lengths from '../../../assets/values/Lengths';
import Strings from '../../../assets/values/Strings';
import Notification from '../../organisms/Notification';
import {View} from 'react-native';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';
import Spacer from '../../atoms/Spacer';

const Stack = createStackNavigator();

export default function NotificationScreen() {
  const width = Lengths.width;
  const notiWidth = width * 0.96;
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: width * 0.02}}>
        <Text style={styles.when}>최근30일</Text>
        <Spacer height={width * 0.04} />
        <View style={{alignItems: 'center'}}>
          <Notification
            width={notiWidth}
            kind={Strings.NotificationName.Comment}
          />
          <Notification
            width={notiWidth}
            kind={Strings.NotificationName.Follow}
          />
          <Notification
            width={notiWidth}
            kind={Strings.NotificationName.Like}
          />
          <Notification width={notiWidth} kind={Strings.NotificationName.Tag} />
        </View>
        <Spacer width={notiWidth} height={1} color="black" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  when: {fontWeight: '500', fontSize: 20},
});
