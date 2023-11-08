import Lengths from '../../../assets/values/Lengths';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {check_and_request_read_image_permission} from '../../../src/permission';
import {galleryPath, readDirs, readEveryFiles} from '../../../src/rnfs';
import Spacer from '../../atoms/Spacer';
import ImageSelectionComponent from '../../molcules/cards/ImageSelectionComponent';
import ImageSelectionScreen from '../../pages/upload/ImageSelectionScreen';
import {useState, useLayoutEffect, useMemo} from 'react';
export default function ImageSelection_Template({navigation}) {
  /* 사용자 폰에서 가져온 이미지들 경로 */
  const [paths, setPaths] = useState([]);
  /* 사용자 폰에서 가져온 디렉토리들 경로 */
  const [dirs, setDirs] = useState([]);
  /* 사용자가 선택한 이미지들 */
  const [pressedImages, setPressedImages] = useState([]);
  /* 폴더 선택 버튼이 눌렸는지하고 그걸 제어하는 함수 */
  const [isFolderSelectButtonClicked, setIsFolderSelectButtonClicked] =
    useState(false);
  /* 멀티 선택 버튼이 눌렸는지하고 그걸 제어하는 함수 */
  const [isMultiSelectButtonClicked, setIsMultiSelectButtonClicked] =
    useState(false);
  const [hasGoneToFileUpload, setHasGoneToFileUpload] = useState(false);
  /* 이미지를 선택했을 때 호출 */
  const onSelectImage = image => {
    if (isMultiSelectButtonClicked)
      setPressedImages(prev =>
        prev.filter(e => e.index == image.index).length > 0
          ? prev.filter(element => element.index !== image.index)
          : [...prev, image],
      );
    else setPressedImages([image]);
  };

  /* 멀티 선택 버튼이 눌렸을 때(isMultiSelectButtonClicked가 바뀌었을 때) 호출 */

  /* 가장 마지막에 선택된 이미지 */
  const lastImage = useMemo(() => {
    return pressedImages[pressedImages.length - 1];
  }, [pressedImages]);

  useLayoutEffect(() => {
    (async () => {
      /* 퍼미션 얻기 */
      await check_and_request_read_image_permission();
      /* 사용자 폰에서 이미지 가져오기 */
      setPaths(await readEveryFiles(galleryPath));
      /* 사용자 폰에서 디렉토리 가져오기 */
      setDirs(await readDirs(galleryPath));
    })();
  }, []);
  useLayoutEffect(() => {
    /* 상태바 설정 */
    (async () => {
      await navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              if (pressedImages.length > 0)
                navigation.navigate('FileUpload_Template', {
                  image: {
                    paths: pressedImages,
                  },
                });
            }}>
            <Text
              style={[
                styles.selectButton,
                {color: pressedImages.length > 0 ? 'black' : 'gray'},
              ]}>
              선택
            </Text>
          </TouchableOpacity>
        ),
      });
    })();
  }, [pressedImages]);
  /* 사용자 폰에서 가져온 이미지 렌더링 */
  const renderItem = ({item, index}) => {
    return (
      <View>
        <Spacer height={1} />
        <ImageSelectionComponent
          index={index}
          isMultiSelectButtonClicked={isMultiSelectButtonClicked}
          width={Lengths.width / 3}
          order={pressedImages.findIndex(e => e.index == index) + 1}
          onSelectImage={() =>
            onSelectImage({
              path: item.path,
              index,
            })
          }
          source={item.path}
        />
      </View>
    );
  };
  return (
    <ImageSelectionScreen
      paths={paths}
      source={lastImage && lastImage.path}
      renderItem={renderItem}
      onFolderSelect={setIsFolderSelectButtonClicked}
      onMultiSelect={() =>
        setIsMultiSelectButtonClicked(prev => {
          setPressedImages([]);
          return !prev;
        })
      }
      isFolderSelectButtonClicked={isFolderSelectButtonClicked}
      IsMultiSelectButtonClicked={isMultiSelectButtonClicked}
    />
  );
}
const styles = StyleSheet.create({
  selectButton: {
    padding: 12,
  },
});
