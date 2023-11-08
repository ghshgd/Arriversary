import {View, StyleSheet, ScrollView, TextInput, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Input from '../../atoms/textInputs/Input';
import Lengths from '../../../assets/values/Lengths';
import Spacer from '../../atoms/Spacer';
import GroupCard from '../../molcules/cards/GroupCard';
import FolderCard from '../../molcules/cards/FolderCard';
import Float from '../../atoms/modals/Float';
import SearchBar from '../../molcules/searchBars/SearchBar';
export default function GroupSelectionScreen({
  groups,
  onChangeSearchWord,
  searchWord,
  setIsMemberWatchClicked,
  whatGroupCardClicked,
  setWhatGroupCardClicked,
  whatFolderCardClicked,
  setWhatFolderCardClicked,
  onGroupClicked,
  onFolderClicked,
  hasFloatedFolders,
  setHasFloatedFolders,
  folders,
  searchFolder,
  onChangeSearchFolder,
}) {
  console.log(`그룹셀렉션스크린폴더스:${JSON.stringify(folders)}`);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={{marginHorizontal: 12}}>
            <AntDesign name="search1" color="black" size={20} />
          </View>
          <Input
            placeholder={'검색'}
            setValue={onChangeSearchWord}
            value={searchWord}
            style={styles.input}
          />
          <Spacer width={8} />
        </View>
        <ScrollView>
          {groups.map((group, idx) => (
            <GroupCard
              key={idx}
              group={group}
              whatGroupCardClicked={whatGroupCardClicked}
              setWhatGroupCardClicked={setWhatGroupCardClicked}
              setIsMemberWatchClicked={setIsMemberWatchClicked}
              whatFolderCardClicked={whatFolderCardClicked}
              setWhatFolderCardClicked={setWhatFolderCardClicked}
              onGroupClicked={onGroupClicked}
            />
          ))}
        </ScrollView>
      </View>
      {hasFloatedFolders && (
        <Float
          isClicked={hasFloatedFolders}
          setIsClicked={setHasFloatedFolders}>
          <Spacer height={12} />
          <View style={styles.folderInputContainer}>
            <View style={{marginHorizontal: 12}}>
              <AntDesign name="search1" color="black" size={20} />
            </View>
            <Input
              placeholder={'검색'}
              setValue={onChangeSearchWord}
              value={searchWord}
              style={styles.input}
            />
            <Spacer width={8} />
          </View>
          {folders?.map(folder => (
            <FolderCard
              parent={whatGroupCardClicked}
              selected={folder}
              onPress={onFolderClicked}
            />
          ))}
        </Float>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, margin: 8},
  text: {color: 'skyblue', fontWeight: 'bold'},
  selectedGroups: {
    height: Lengths.height * 0.1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Lengths.height * 0.04,
    backgroundColor: '#ddd',
    borderRadius: Lengths.height * 0.02,
  },
  folderInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Lengths.height * 0.04,
    backgroundColor: '#eee',
    borderRadius: Lengths.height * 0.02,
  },
  input: {
    height: Lengths.height * 0.03,
    width: '80%',
    fontSize: 14,
    padding: 0,
  },
});
