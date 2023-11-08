import {Entypo} from '@expo/vector-icons';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {notificationStyle} from '../../../assets/styles/AfterLogin';
import Lengths from '../../../assets/values/Lengths';
import NotificationMain from '../../components/notificationScreen/NotificationMain';

const width = Lengths.width;

export default function DetailNotificationScreen({name}) {
  const arr = [
    1, 2, 3, 4, 11, 12, 13, 14, 21, 22, 23, 24, 31, 32, 33, 34, 41, 42, 43, 44,
    51, 52, 53, 54, 61, 62, 63, 64,
  ];

  return (
    <>
      {/* Title with Navigator */}
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
        <Entypo name="chevron-down" size={width * 0.05} color="black" />
      </View>
      <View style={styles.line} />
      {/* main(detail) screen */}
      <ScrollView contentContainerStyle={notificationStyle}>
        {arr.map(i => (
          <NotificationMain key={i} name={name} width={width} />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: Lengths.tabBar,
  },
  title: {
    fontWeight: 'bold',
    fontSize: Lengths.header.fontSize,
  },
  line: {
    width,
    borderWidth: 0.2,
    borderColor: '#dddddd',
    elevation: 6,
    shadowColor: '#dddddd',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 3,
    shadowOpacity: 0.25,
  },
});
