import UserScreen from '../../pages/user/UserScreen';
import {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Spacer from '../../atoms/Spacer';
import {getUserInfo, getImage} from '../../../src/firebase/firebase';

const Stack = createStackNavigator();
export default function User_Template({navigation, route}) {
  const {
    params: {email, nickname, hashTag},
  } = route;
  const [posts, setPosts] = useState({email: '', nickname: '', hashTag: ''});
  const [isMe, setIsMe] = useState();
  const [hasFollowed, setHasFollowed] = useState(false);
  const [user, setUser] = useState({
    nickname: '',
    image: {
      url: '',
    },
    hashTag: '',
    followers: {size: 0},
    followings: {size: 0},
    groups: {size: 0},
    description: '',
  });
  useEffect(() => {
    (async () => {
      await navigation.setOptions({
        title: user.nickname,
        headerRight: () => (
          <View style={styles.headerRight}>
            <Feather name="menu" color="black" size={24} />
            <Spacer width={12} />
          </View>
        ),
      });
      const doc = await getUserInfo({email, nickname, hashTag});
      await setUser(doc);
    })();
  }, []);
  function onPeopleButtonClick() {
    navigation.navigate('DetailPeople_Template', {nickname});
  }
  function onProfileEdit() {
    navigation.navigate('ProfileEdit_Template', {});
  }
  return <UserScreen user={user} />;
}
const styles = StyleSheet.create({
  headerRight: {flexDirection: 'row'},
});
