import AsyncStorage from '@react-native-async-storage/async-storage';
import GroupSelectionScreen from '../../pages/upload/GroupSelectionScreen';
import {useEffect, useMemo, useState} from 'react';
import {
  getUserInfo,
  fetchGroups,
  getFirstFoldersFromGroup,
  getFoldersFromGroupWithKeyword,
} from '../../../src/firebase/firebase';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Lengths from '../../../assets/values/Lengths';
export default function GroupSelection_Template({navigation, route}) {
  const {
    params: {image, user, folder},
  } = route;
  const paths = image?.paths;
  console.log(`그룹셀력션템블릿paths${JSON.stringify(paths)}`);
  const [isMemberWatchClicked, setIsMemberWatchClicked] = useState(false);
  const [whatGroupCardClicked, setWhatGroupCardClicked] = useState({});
  const [whatFolderCardClicked, setWhatFolderCardClicked] = useState({});
  const [hasFloatedFolders, setHasFloatedFolders] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const [searchFolder, setSearchFolder] = useState('');
  const [groups, setGroups] = useState([]);
  const [folders, setFolders] = useState();
  const [selectedGroup, setSelectedGroup] = useState({});
  const tag = useMemo(() => user.tag, [user]);
  const onChangeSearchWord = async word => {
    setSearchWord(word);
    const fetchedGroups = await fetchGroups({
      member: tag,
      keyword: word,
    });
    setGroups(fetchedGroups);
  };

  const onGroupClicked = async group => {
    setWhatGroupCardClicked(group);
    const f = await getFirstFoldersFromGroup({group});
    setFolders(f);
    setHasFloatedFolders(true);
  };
  const onChangeSearchFolder = async value => {
    setSearchFolder(value);
    const f = await getFoldersFromGroupWithKeyword({
      group: whatGroupCardClicked,
      keyword: value,
    });
    setFolders(f);
  };
  const onScrollInFolderFloat = ({contentOffset: {width, height}}) => {
    if (n > call) {
      const screen = {height: Lengths.height};
      const n = height / screen.height;
      if (height % screen.height > screen.height / 2) {
        setCall(n);
      }
    }
  };
  const onFolderClicked = group => {
    navigation.navigate('FileUpload_Template', {group, folder, image: {paths}});
  };
  useEffect(() => {
    (async () => {
      const g = await fetchGroups({member: tag});
      setGroups(g);
    })();
  }, []);
  return (
    <GroupSelectionScreen
      onChangeSearchWord={onChangeSearchWord}
      searchWord={searchWord}
      isMemberWatchClicked={isMemberWatchClicked}
      setIsMemberWatchClicked={setIsMemberWatchClicked}
      whatGroupCardClicked={whatGroupCardClicked}
      setWhatGroupCardClicked={setWhatGroupCardClicked}
      whatFolderCardClicked={whatFolderCardClicked}
      setWhatFolderCardClicked={setWhatFolderCardClicked}
      groups={groups}
      onGroupClicked={onGroupClicked}
      onFolderClicked={onFolderClicked}
      setHasFloatedFolders={setHasFloatedFolders}
      hasFloatedFolders={hasFloatedFolders}
      folders={folders}
      searchFolder={searchFolder}
      onChangeSearchFolder={onChangeSearchFolder}
    />
  );
}
const styles = StyleSheet.create({
  text: {color: 'skyblue', fontWeight: 'bold'},
});
