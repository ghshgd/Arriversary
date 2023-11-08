import {Tabs} from 'react-native-collapsible-tab-view';
import SearchBar from '../../molcules/searchBars/SearchBar';
import {useEffect} from 'react';

export default function DetailPeopleScreen({
  setSearchWord,
  searchWord,
  onTabChange,
  followers,
  renderFollower,
  followings,
  renderFollowing,
  groups,
  renderGroup,
  hashTag,
  navigation,
}) {
  useEffect(() => {
    navigation.setOptions({
      title: hashTag,
    });
  }, []);
  return (
    <>
      <SearchBar setSearchWord={setSearchWord} searchWord={searchWord} />
      <Tabs.Container onTabChange={onTabChange}>
        <Tabs.Tab name="팔로워">
          <Tabs.FlatList
            data={followers}
            renderItem={renderFollower}
            keyExtractor={idx => idx}
          />
        </Tabs.Tab>
        <Tabs.Tab name="팔로잉">
          <Tabs.FlatList
            data={followings}
            renderItem={renderFollowing}
            keyExtractor={idx => idx}
          />
        </Tabs.Tab>
        <Tabs.Tab name="그룹">
          <Tabs.FlatList
            data={groups}
            renderItem={renderGroup}
            keyExtractor={idx => idx}
          />
        </Tabs.Tab>
      </Tabs.Container>
    </>
  );
}
