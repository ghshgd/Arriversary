import FileUploadScreen from '../../pages/upload/FileUploadScreen';
import {useState, useEffect} from 'react';
import {
  fetchTagData,
  fetchHashTagData,
  getUserInfo,
  getTimestamp,
} from '../../../src/firebase/firebase';
import {
  storeFolderImageOfUser,
  storePostImagesOfUser,
} from '../../../src/firebase/set/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createPostOfUser} from '../../../src/firebase/set/firestore';
import functions from '@react-native-firebase/functions';

export default function FileUpload_Template({navigation, route}) {
  const {
    params: {image, group, folder},
  } = route;
  const paths = image?.paths;
  const [inputText, setInputText] = useState('');
  const [tag, setTag] = useState({name: '', hasSelected: false});
  const [user, setUser] = useState({});
  const [hashTag, setHashTag] = useState({name: '', hasSelected: false});
  const [hasHidedLike, setHasHidedLike] = useState(false);
  const [isCommentFunctionOn, setIsCommentFunctionOn] = useState(true);
  const [selection, setSelection] = useState({start: 0, end: 0});
  const onSelectionChange = async ({
    nativeEvent: {
      selection: {start},
    },
  }) => {
    const words = inputText.substring(0, start).split(' ');
    const word = words[words.length - 1];
    const char = word[0];
    const isTag = char == '@';
    const isHashTag = char == '#';
    if (isTag) {
      const original = word.substring(1);
      const arr = original.match(/[0-9a-z._]/g);
      const reproduce = arr !== null ? arr.join('') : '';
      if (reproduce == original) {
        setTag({
          name: reproduce,
          hasSelected: true,
          data: await fetchTagData({name: reproduce}),
        });
      } else {
        setTag({name: '', hasSelected: false, data: []});
      }
      setHashTag({hasSelected: false, name: ''});
    } else if (isHashTag) {
      const name = word.substring(1);
      if (name.indexOf(' ') < 0) {
        const fhtd = await fetchHashTagData({name});
        setHashTag({name, hasSelected: true, data: fhtd});
        setTag({hasSelected: false, name: '', data: []});
      }
    } else {
      setHashTag({name: '', hasSelected: false, data: []});
      setTag({name: '', hasSelected: false, data: []});
    }
    setSelection(selection);
  };
  useEffect(() => {
    (async () => {
      const item = await AsyncStorage.getItem('user');
      const json = JSON.parse(item);
      const email = json.email;
      const user = await getUserInfo({email});
      setUser(user);
    })();
  }, []);

  const onClickGroup = () =>
    navigation.navigate('GroupSelection_Template', {
      image: {paths},
      user,
      folder,
      group,
    });
  const onFolderClick = () =>
    navigation.navigate('FolderSelection_Template', {
      image: {paths},
      user,
      folder,
      group,
    });
  const onTemporaryStoreButtonClicked = async () => {
    const ps = paths.map(p => p.path);
    try {
      const timestamp = (await getTimestamp()).toDate();
      await createPostOfUser({folder, user, description: inputText, paths: ps});
      /* const onCall = functions().httpsCallable('storeFolderImageOfUser');
      onCall({folder, user, timestamp, paths: ps}).then(res => {
        console.log(`result:${JSON.stringify(res)}`);
        console.log(`res}`);
      }); */
      /* if (group) {
        await createPostOfUserInGroup({
          user,
          group,
          paths: ps,
          description: inputText,
        });
      } else {
        console.log(`그룹이 없ㅅ흡니다.`);
      } */
    } catch (e) {
      console.log(`e.message:${e.message}`);
    }
  };
  return (
    <FileUploadScreen
      onTemporaryStoreButtonClicked={onTemporaryStoreButtonClicked}
      hasHidedLike={hasHidedLike}
      setHasHidedLike={setHasHidedLike}
      isCommentFunctionOn={isCommentFunctionOn}
      setIsCommentFunctionOn={setIsCommentFunctionOn}
      inputText={inputText}
      setInputText={setInputText}
      tag={tag}
      hashTag={hashTag}
      onSelectionChange={onSelectionChange}
      paths={paths}
      onClickGroup={onClickGroup}
      group={group}
      folder={folder}
      onFolderClick={onFolderClick}
    />
  );
}
