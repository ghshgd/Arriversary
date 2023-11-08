import {useLayoutEffect, useState} from 'react';
import FolderSelectionScreen from '../../pages/upload/FolderSelectionScreen';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  getFirstFoldersFromUser,
  getFoldersFromGroup,
} from '../../../src/firebase/firebase';
import Lengths from '../../../assets/values/Lengths';
export default function FolderSelection_Template({route, navigation}) {
  const {
    params: {image, user, group},
  } = route;
  const paths = image?.paths;
  console.log(`폴더셀렉션템플릿유ㅜ저:${JSON.stringify(user)}`);
  const [folders, setFolders] = useState([]);
  const [name, setName] = useState('');
  const [call, setCall] = useState(-1);
  const onSelectFolder = selectedFolder => {
    navigation.navigate('FileUpload_Template', {
      image: {paths},
      folder: selectedFolder,
      group,
    });
  };
  const onScroll = async ({
    nativeEvent: {
      contentOffset: {y},
    },
  }) => {
    const height = Lengths.height;
    const n = Math.floor(y / height);

    if (n > call) {
      if (y % height > height / 4) {
        setCall(n);
        const f = await getFoldersFromGroup({
          user,
          folder: folders[folders.length - 1],
        });
        setFolders(prev => {
          return prev.concat(f);
        });
      }
    }
  }; /* 
  useLayoutEffect(() => {
    (async () => {
      await navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            style={{padding: 12}}
            onPress={async () => {
              const f = await getFoldersFromGroup({
                user,
                folder: folders[folders.length - 1],
              });
              setFolders(prev => {
                return prev.concat(f);
              });
            }}>
            <Text style={styles.text}>확인</Text>
          </TouchableOpacity>
        ),
      });
    })();
  }, [folders]); */
  useLayoutEffect(() => {
    (async () => {
      const f = await getFirstFoldersFromUser({user});
      setFolders(f);
    })();
  }, []);
  return (
    <FolderSelectionScreen
      folders={folders}
      onSelectFolder={onSelectFolder}
      name={name}
      setName={setName}
    />
  );
}
const styles = StyleSheet.create({
  text: {color: 'skyblue', fontWeight: 'bold'},
});
