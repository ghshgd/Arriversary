import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import {useMemo, useRef, useState} from 'react';
import Button from '../../atoms/buttons/Button';
import Spacer from '../../atoms/Spacer';
import Lengths from '../../../assets/values/Lengths';
import Selection from '../../molcules/cards/Selection';
import PostOption from '../../molcules/cards/PostOption';
import UploadingImage from '../../molcules/imgs/UploadingImage';
import TagDropdown from '../../atoms/views/TagDropdown';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CircleImage from '../../atoms/images/CircleImage';
const tagColor = '#eee';
const settingPadding = 4;
export default function FileUploadScreen({
  paths,
  onTemporaryStoreButtonClicked,
  hasHidedLike,
  setHasHidedLike,
  isCommentFunctionOn,
  setIsCommentFunctionOn,
  inputText,
  setInputText,
  tag,
  hashTag,
  onSelectionChange,
  onClickGroup,
  group,
  folder,
  onFolderClick,
}) {
  const height = Lengths.height;
  const buttonSize = 30;
  const size = {
    image: height * 0.12,
    option: height * 0.04,
    group: {
      image: height * 0.04,
    },
    folder: {
      image: height * 0.04,
    },
    button: height * 0.04,
  };
  const [imageLength, setImageLength] = useState({
    width: size.image,
    height: size.image,
  });
  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
      <View style={styles.container}>
        {/* 가장 아래에 띄울 바 (임시저장하고 게시버튼)*/}
        <View style={styles.absolute}>
          <Button
            size={size.button}
            name={'임시 저장'}
            onPress={onTemporaryStoreButtonClicked}
          />
          <Spacer width={24} />
          <Button size={size.button} name={'게시'} />
        </View>
        {/* 게시물하고 프로필 사진, 사진이나 동영상(아직 동영상은 지원을 안 함) */}
        <View style={styles.previewsContainer}>
          <ScrollView
            horizontal
            style={[styles.contentsPreview, {height: imageLength.height}]}>
            {paths?.map((map, idx) => (
              <View style={styles.imageContainer} key={idx}>
                <Spacer width={8} />
                <UploadingImage
                  source={{uri: 'file://' + map.path}}
                  host={require('../../../assets/imgs/yihyun2.jpg')}
                />
                <Spacer width={8} />
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.inputContainer}>
          {/* 게시물에 들어갈 문구 적는 칸 */}
          <TextInput
            value={inputText}
            onChangeText={setInputText}
            onSelectionChange={onSelectionChange}
            placeholder="문구 적기"
          />
        </View>
        <View>
          <Spacer height={1} color="gray" />
          {/* 게시물이 어떤 그룹의 어떤 폴더에 들어갈지하고 개인 페이지의 어떤 폴더에 들어갈지와 게시물에 들어갈 기타 기능 */}
          <View
            style={{flex: 1, marginHorizontal: '4%', flexDirection: 'column'}}>
            {/* 그룹 선택 페이지로 넘어갈 수 있는 버튼 */}
            <Selection
              icon="group"
              name="그룹"
              height={size.option}
              onPress={onClickGroup}
              selected={group}
            />
            {/* 그룹이 선택되었을 때 나타나는 그 그룹의 이미지와 이름 */}
            <Spacer height={1} color={'#bbb'} />
            {/* 폴더 선택 페이지로 넘어갈 수 있는 버튼 */}
            <Selection
              icon="folder"
              name="폴더"
              height={size.option}
              onPress={onFolderClick}
              selected={folder}
            />
            <Spacer height={1} color={'#bbb'} />
            {/* 기타 게시물 옵션 선택 버튼 */}
            <PostOption
              name="좋아요 수 숨기기"
              height={size.option}
              isEnabled={hasHidedLike}
              setIsEnabled={setHasHidedLike}
            />
            <Spacer height={1} color={'#bbb'} />
            <PostOption
              name="댓글 기능"
              height={size.option}
              isEnabled={isCommentFunctionOn}
              setIsEnabled={setIsCommentFunctionOn}
            />
            <Spacer height={1} color={'#bbb'} />
          </View>
          {(hashTag.hasSelected || tag.hasSelected) && (
            <TagDropdown
              style={styles.dropdown}
              data={
                (tag.hasSelected && tag.data) ||
                (hashTag.hasSelected && hashTag.data)
              }
            />
          )}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: Lengths.header},
  absolute: {
    position: 'absolute',
    bottom: 4,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  inputContainer: {
    height: '28%',
    width: '100%',
    backgroundColor: 'white',
  },
  dropdown: {
    position: 'absolute',
    width: '100%',
    height: 100,
    backgroundColor: 'white',
  },
  input: {height: 300, width: '100%', backgroundColor: 'skyblue', padding: 240},
  previewsContainer: {height: Lengths.height * 0.12, width: '100%'},
  contentsPreview: {flex: 1},
  imageContainer: {flexDirection: 'row'},
  buttonContainer: {flexDirection: 'row', justifyContent: 'center'},
});
