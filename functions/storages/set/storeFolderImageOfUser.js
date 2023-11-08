import storage from '@react-native-firebase/storage';
export default storeFolderImageOfUser = async ({
  timestamp,
  user,
  path,
  folder,
}) => {
  const year = timestamp.getFullYear();
  const month = timestamp.getMonth() + 1;
  const day = timestamp.getDate();
  const hour = timestamp.getHours();
  const minute = timestamp.getMinutes();
  const second = timestamp.getSeconds();
  console.log(`${year}년${month}월${day}일${hour}시${minute}분${second}초`);
  const time = timestamp.getTime();
  const lastIndex = path.lastIndexOf('/');
  const name = path.substring(lastIndex + 1);
  const reference = storage().ref(
    `image/${year}/${month}/${day}/${hour}/${minute}/${second}/users/${user.id}/folders/${folder.id}/${time}_${name}`,
  );
  await reference.putFile(path);
};
export const storePostImagesOfUser = async ({timestamp, userId, paths}) => {
  const year = timestamp.getFullYear();
  const month = timestamp.getMonth() + 1;
  const day = timestamp.getDate();
  const hour = timestamp.getHours();
  const minute = timestamp.getMinutes();
  const second = timestamp.getSeconds();
  const time = timestamp.getTime();
  const urls = [];
  for (const path of paths) {
    console.log(`storage path:${path}`);
    const lastIndex = path.lastIndexOf('/');
    const name = path.substring(lastIndex + 1);
    const storagePath = `images/${year}/${month}/${day}/${hour}/${minute}/${second}/users/${userId}/posts/${time}_${name}`;
    const reference = storage().ref(storagePath);
    await reference.putFile(path);
    const url = await storage().ref(storagePath).getDownloadURL();
    urls.push(url);
    console.log(`rul:${url}`);
  }
  return urls;
};
/* storeProfileImageFromUser;
storePostImagesFromUser;
storeFolderImageFromGroup;
storeProfileImageFromGroup;
storePostImagesFromGroup;
 */
