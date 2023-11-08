import {StyleSheet, TextInput, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Spacer from '../../atoms/Spacer';
import Lengths from '../../../assets/values/Lengths';
import Input from '../../atoms/textInputs/Input';
const height = Lengths.height * 0.04;
export default function SearchBar({setValue, value, style}) {
  return (
    <View style={[styles.container, style]}>
      <Spacer width={height * 0.3} />
      <AntDesign name="search1" color="black" size={20} />
      <Feather size={height * 0.6} color="black" name="search" />
      <Spacer width={height * 0.3} />
      <Input
        style={styles.input}
        value={value}
        setValue={setValue}
        placeholder="검색하기"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height,
    borderRadius: height * 0.25,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ddd',
  },
  input: {
    width: '100%',
    fontSize: height * 0.36,
    height: height,
  },
});
