import {
  FlatList,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Lengths from '../../../assets/values/Lengths';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Float from '../../atoms/modals/Float';
const width = Lengths.width;
const image = {
  size: {
    width: (width * 0.98) / 3,
    distance: width * 0.01,
  },
};
export default function ImageSelectionScreen({
  paths,
  source,
  renderItem,
  onFolderSelect,
  isFolderSelectButtonClicked,
  onMultiSelect,
}) {
  return (
    <>
      {/* 선택된 사진 */}
      <View style={{flex: 1, backgroundColor: '#ddd'}}>
        {source && (
          <Image
            source={{uri: 'file://' + source}}
            resizeMode="contain"
            style={{width: Lengths.width, flex: 1}}
          />
        )}
      </View>
      <View style={styles.down}>
        {/* 폴더나 멀티 셀렉트 옵션들 */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.folderSelectContainer}
            onPress={() => onFolderSelect(true)}>
            <Text style={styles.optionText}>최근</Text>
            <Entypo name="chevron-small-down" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.checkbox} onPress={onMultiSelect}>
            <MaterialCommunityIcons
              name="checkbox-multiple-blank-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        {/* 사용자 폰에서 가져온 사진들 */}
        <View style={styles.imageContainer}>
          <FlatList
            data={paths}
            renderItem={renderItem}
            numColumns={3}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
      {/* 디렉토리 선택 버튼이 눌렸다면 띄울 디렉토리 선택 창 */}
      {isFolderSelectButtonClicked && (
        <Float
          isClicked={isFolderSelectButtonClicked}
          setIsClicked={onFolderSelect}></Float>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {flex: 1, backgroundColor: 'white'},
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: width * 0.01,
    marginBottom: width * 0.01,
  },
  selectButton: {
    flexDirection: 'row',
    padding: 16,
  },
  selectText: {fontSize: 16, color: 'black'},
  folderSelectContainer: {
    flexDirection: 'row',
  },
  down: {
    flex: 1,
    alignItems: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '92%',
    height: '8%',
  },
  checkbox: {padding: 4},
  optionText: {fontWeight: 'bold', fontSize: Lengths.height * 0.02},
});
