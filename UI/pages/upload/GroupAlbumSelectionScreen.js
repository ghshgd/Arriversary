import {ScrollView, StyleSheet, View} from 'react-native';
import Spacer from '../../Atoms/Spacer';
import Lengths from '../../../assets/values/Lengths';
import {useEffect, useState} from 'react';
import SearchBar from '../../Molcules/searchBars/SearchBar';
import SearchedGroup from '../../Molcules/cards/SearchedGroup';
import SelectedGroups from '../../Molcules/stores/SelectedGroups';
export default function GroupAlbumSelectionScreen({navigation}) {
  const [groups, setGroups] = useState([]);
  const [searchingText, setSearchingText] = useState('');

  useEffect(() => {
    setGroups([
      {
        image: require('../../../assets/imgs/yihyun1.jpg'),
        name: 'yihyun1',
        isSelected: false,
        albums: ['../../../assets/imgs/albums/album1.jpg'],
      },
      {
        image: require('../../../assets/imgs/yihyun2.jpg'),
        name: 'yihyun2',
        isSelected: false,
        albums: ['../../../assets/imgs/albums/album2.jpg'],
      },
      {
        image: require('../../../assets/imgs/yihyun3.jpg'),
        name: 'yihyun3',
        isSelected: false,
        albums: ['../../../assets/imgs/albums/album3.jpg'],
      },
      {
        image: require('../../../assets/imgs/yihyun4.jpg'),
        name: 'yihyun4',
        isSelected: false,
        albums: [
          '../../../assets/imgs/albums/album1.jpg',
          '../../../assets/imgs/albums/album2.jpg',
        ],
      },
      {
        image: require('../../../assets/imgs/yihyun5.jpg'),
        name: 'yihyun5',
        isSelected: false,
        albums: [
          '../../../assets/imgs/albums/album1.jpg',
          '../../../assets/imgs/albums/album2.jpg',
          '../../../assets/imgs/albums/album3.jpg',
        ],
      },
    ]);
  }, []);

  console.log(`group`);
  return (
    <ScrollView style={styles.container}>
      <SelectedGroups groups={groups} />
      <SearchBar setValue={setSearchingText} value={searchingText} />
      {groups.map((group, index) => {
        console.log(`group:${group.name}`);
        return (
          <View key={index}>
            <SearchedGroup
              key={index}
              setGroups={setGroups}
              index={index}
              group={group}
            />
            <Spacer height={8} />
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 12},
  searchBar: {width: '100%', height: Lengths.height / 16},
});
