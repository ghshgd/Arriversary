import {View, Pressable, Text, StyleSheet, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Input from '../../atoms/textInputs/Input';
import Lengths from '../../../assets/values/Lengths';
import Spacer from '../../atoms/Spacer';
import FolderCard from '../../molcules/cards/FolderCard';
export default function FolderSelectionScreen({
  onSelectFolder,
  folders,
  name,
  setName,
}) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Spacer width={8} />
          <AntDesign name="search1" color="black" size={20} />
          <Input
            placeholder={'검색'}
            setValue={setName}
            value={name}
            style={styles.input}
          />
          <Spacer width={8} />
        </View>
        <ScrollView>
          {folders?.map(folder => (
            <FolderCard
              key={folder.name}
              selected={folder}
              onPress={onSelectFolder}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, margin: 8},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Lengths.height * 0.04,
    backgroundColor: '#ddd',
    borderRadius: Lengths.height * 0.02,
  },
  input: {
    height: Lengths.height * 0.03,
    width: '80%',
    fontSize: 14,
    padding: 0,
  },
});
