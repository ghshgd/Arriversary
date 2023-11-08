import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './UI/pages/home/HomeScreen';
import NotificationScreen from './UI/pages/notification/NotificationScreen';
import Lengths from './assets/values/Lengths';
import {View} from 'react-native';
import SearchScreen from './UI/pages/search/SearchScreen';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {googleSigninConfigure, getTimestamp} from './src/firebase/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import User_Template from './UI/templates/user/User_Template';
import DetailPeople_Template from './UI/templates/user/DetailPeople_Template';
import FileUpload_Template from './UI/templates/upload/FileUpload_Template';
import ImageSelection_Template from './UI/templates/upload/ImageSelection_Template';
import FileUploadScreen from './UI/pages/upload/FileUploadScreen';
import By2 from './By2';
import By1 from './By1';
import {check_and_request_permissions} from './src/permission';
import GroupSelection_Template from './UI/templates/upload/GroupSelection_Template';
import FolderSelection_Template from './UI/templates/upload/FolderSelection_Template';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [isSignin, setIsSignin] = useState(false);
  const [uid, setUid] = useState('');
  const [email, setEmail] = useState();
  useEffect(() => {
    (async () => {
      await googleSigninConfigure();
      const json = await AsyncStorage.getItem('user');
      const parse = JSON.parse(json);
      if (parse?.uid) {
        setUid(parse.uid);
        if (parse.email) {
          setEmail(parse.email);
        }
        setIsSignin(true);
      }
    })();
  }, []);

  const onGoogleButtonPress = async () => {
    const hasPlayServices = await GoogleSignin.hasPlayServices().catch(
      error => {
        console.log(`playServices error message:${error.message}`);
      },
    );
    if (hasPlayServices) {
      const {idToken} = await GoogleSignin.signIn().catch(error => {
        console.log(`signIn error message:${error.message}`);
      });
      if (idToken) {
        setIsSignin(true);
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        const res = await auth().signInWithCredential(googleCredential);
        const user = JSON.stringify(res.user);
        setUid(user.uid);

        await AsyncStorage.setItem('user', user);
      }
    }
  };
  const UploadStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name={'ImageSelection_Template'}
        component={ImageSelection_Template}
      />
      <Stack.Screen
        name={'FileUpload_Template'}
        component={FileUpload_Template}
      />
      <Stack.Screen
        name={'GroupSelection_Template'}
        component={GroupSelection_Template}
      />
      <Stack.Screen
        name={'FolderSelection_Template'}
        component={FolderSelection_Template}
      />
    </Stack.Navigator>
  );
  const UserStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name={'User_Template'}
        component={User_Template}
        initialParams={{email}}
      />
      <Stack.Screen
        name={'DetailPeople_Template'}
        component={DetailPeople_Template}
      />
    </Stack.Navigator>
  );
  return uid == '' ? (
    <View>
      <GoogleSigninButton onPress={onGoogleButtonPress} />
    </View>
  ) : (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {height: Lengths.tabBar}, // 원하는 높이로 변경
        }}>
        <Tab.Screen name={'UploadStack'} component={UploadStack} />
        <Tab.Screen name={'User'} component={UserStack} />
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name={'SearchScreen'}
          component={SearchScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name={'Home'}
          component={HomeScreen}
        />
        <Tab.Screen name={'Notification'} component={NotificationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
