import {StyleSheet, Text, Dimensions, View, Image} from 'react-native';
import Tabs from 'react-native-collapsible-tab-view';

import CircleImage from '../atoms/images/CircleImage';
import InfoButtons from '../molcules/cards/InfoButtons';
import Lengths from '../../assets/values/Lengths';
import HomeScreen from './home/HomeScreen';
import ButtonsInProfile from '../molcules/buttons/ButtonsInProfile';

const {width} = Dimensions.get('window');
const profileImageSize = width * 0.2;
const infoButtonSize = width / 5;
const gap = width * 0.04;

const infoButtonName2DArray = [
  ['following', 'follower', 'album', 'colaborator'],
  ['post', 'like', 'challenge', 'badge'],
];
const pictureLen = width * (0.98 / 3);

export default function UserScreen({navigation}) {
  const Header = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <CircleImage
          style={{
            marginTop: Lengths.statusbarHeight + profileImageSize * 0.5,
          }}
          len={profileImageSize}
          image={require('../../assets/imgs/yihyun1.jpg')}
        />
        <Text>@Arriversary</Text>
        <InfoButtons
          name2DArray={infoButtonName2DArray}
          size={infoButtonSize}
          gap={gap}
        />
        <ButtonsInProfile size={width * 0.1} marginTop={gap} />
        <Text>description</Text>
      </View>
    );
  };

  const arr = [];
  for (let i = 0; i < 30; i++) arr.push(i);
  function renderItem() {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.data}
            source={require('../../assets/imgs/yihyun1.jpg')}
          />
          <Image
            style={[styles.data, styles.centerData]}
            source={require('../../assets/imgs/yihyun2.jpg')}
          />
          <Image
            style={styles.data}
            source={require('../../assets/imgs/yihyun3.jpg')}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.data}
            source={require('../../assets/imgs/yihyun4.jpg')}
          />
          <Image
            style={[styles.data, styles.centerData]}
            source={require('../../assets/imgs/yihyun5.jpg')}
          />
          <Image
            style={styles.data}
            source={require('../../assets/imgs/yihyun1.jpg')}
          />
        </View>
      </View>
    );
  }
  return (
    <Tabs.Container renderHeader={Header}>
      <Tabs.Tab name="A">
        <Tabs.FlatList
          data={arr}
          renderItem={renderItem}
          numColumns={3}
          keyExtractor={item => item.toString()}
        />
      </Tabs.Tab>
      <Tabs.Tab name="B">
        <Tabs.ScrollView
          style={{height: '100%'}}
          snapToInterval={800}
          decelerationRate="fast">
          <HomeScreen />
        </Tabs.ScrollView>
      </Tabs.Tab>
    </Tabs.Container>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
  },
  data: {width: pictureLen, height: pictureLen},
  centerData: {marginHorizontal: width / 100},
});
