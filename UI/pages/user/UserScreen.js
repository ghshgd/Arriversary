import {StyleSheet, Text, Dimensions, View, Image} from 'react-native';
import {Tabs} from 'react-native-collapsible-tab-view';
import CircleImage from '../../atoms/images/CircleImage';
import InfoButtons from '../../molcules/cards/InfoButtons';
import ButtonsInProfile from '../../molcules/buttons/ButtonsInProfile';
import Spacer from '../../atoms/Spacer';
const {width, height} = Dimensions.get('window');
const profileImageSize = width * 0.2;
const infoButtonSize = width / 5;
const gap = width * 0.04;
const pictureLen = width * (0.98 / 3);

export default function UserScreen({navigation, user}) {
  const Header = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Spacer height={height * 0.04} />
        <CircleImage
          size={profileImageSize}
          source={
            user.image.url
              ? {uri: user.image.url}
              : require('../../../assets/imgs/yihyun1.jpg')
          }
        />
        <Text>@{user.hashTag}</Text>
        <InfoButtons
          followings={user.sizes.following}
          followers={user.sizes.followers}
          groups={user.sizes.groups}
          size={infoButtonSize}
          gap={gap}
        />
        <ButtonsInProfile size={width * 0.1} marginTop={gap} />
        <Text>{user.description}</Text>
      </View>
    );
  };

  const arr = [];
  for (let i = 0; i < 5; i++) arr.push(i);
  function renderItem() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.data}
          source={require('../../../assets/imgs/yihyun4.jpg')}
        />
        <Image
          style={[styles.data, styles.centerData]}
          source={require('../../../assets/imgs/yihyun5.jpg')}
        />
        <Image
          style={styles.data}
          source={require('../../../assets/imgs/yihyun1.jpg')}
        />
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
