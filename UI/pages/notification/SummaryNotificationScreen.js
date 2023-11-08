import {ScrollView, StyleSheet} from 'react-native';
import Lengths from '../../../assets/values/Lengths';
import Strings from '../../../assets/values/Strings';
import Notification from '../Molcules/Notification';

export default function SummaryNotificationScreen() {
  const width = Lengths.width;

  return (
    <ScrollView style={{width}}>
      <Notification name={Strings.NotificationName.Like} />
      <Notification name={Strings.NotificationName.Comment} />
      <Notification name={Strings.NotificationName.Follow} />
      <Notification name={Strings.NotificationName.Tag} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
