import {getTimestamp} from '../../get/firestore';
import {storePostImagesOfUser} from '../../set/storage';

/* 아직 안 만듬 */
export async function createFolderOfUser({user, folder}) {
  const folderCollection = firestore()
    .collection('users')
    .doc(user.id)
    .collection('folders');
  const timestamp = await getTimestamp();
  const url = await uploadFolderImageOfUser({
    user,
    folder,
  });
}

export async function createPostOfUser({userId, paths, description}) {
  const postsCollection = firestore()
    .collection('users')
    .doc(userId)
    .collection('posts');
  const timestamp = await getTimestamp();

  const urls = await storePostImagesOfUser({
    userId,
    paths,
    timestamp: timestamp.toDate(),
  });
  await postsCollection.add({
    description,
    image: {
      urls,
      createdAt: timestamp,
    },
    createdAt: timestamp,
  });
}
export async function createPostOfUserInGroup({
  userId,
  group,
  paths,
  description,
}) {
  const postsCollection = firestore()
    .collection('group')
    .doc(group.id)
    .collection('posts');
  const timestamp = getTimestamp();
  const date = timestamp.toDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const time = date.getTime();
  const {members} = group;

  const urls = [];
  for (const path of paths) {
    const lastIndex = path.lastIndexOf('/');
    const name = path.substring(lastIndex + 1);
    const storagePath = `images/${year}/${month}/${day}/${hour}/${minute}/${second}/groups/${group.id}/posts/${time}_${name}`;
    const reference = storage().ref(storagePath);
    await reference.putFile(path);
    const url = await storage().ref(storagePath).getDownloadURL();
    urls.push(url);
    console.log(`rul:${url}`);
  }
  await postsCollection.add({
    uploader: userId,
    description,
    image: {
      urls,
      createdAt: timestamp,
    },
    createdAt: timestamp,
    likes: 0,
    comments: 0,
  });
  const userPostCollection = firestore()
    .collection('users')
    .doc(userId)
    .collection('posts');
  userPostCollection.add({
    groupId: group.id,
    description,
    image: {
      urls,
      createdAt: timestamp,
    },
    createdAt: timestamp,
  });
}
