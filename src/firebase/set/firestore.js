import firestore from '@react-native-firebase/firestore';
import {storePostImagesOfUser} from './storage';
import {getTimestamp} from '../get/firestore';

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

export async function createPostOfUser({user, paths, description}) {
  let usersCollection;
  let userDoc;
  let folderDoc;
  let folderPostsCollection;
  let userPostsCollection;
  usersCollection = firestore().collection('users');
  userDoc = usersCollection.doc(user.id);
  const followersCollection = userDoc.collection('followers');
  if (user.folder) {
    folderDoc = userDoc.collection('folders').doc(user.folder.id);
  }
  const timestamp = await getTimestamp();

  if (folderDoc) folderPostsCollection = folderDoc.collection('posts');
  userPostsCollection = userDoc.collection('posts');
  /* 그룹일 때하고 유저일 때 다른 함수를 호출하거나 함수를 통합 */
  const urls = await storePostImagesOfUser({
    userId: user.id,
    paths,
    timestamp: timestamp.toDate(),
  });

  let postId;
  if (folderPostsCollection) {
    postId = (
      await folderPostsCollection.add({
        description,
        photoUrls: urls,
        createdAt: timestamp,
        likes: 0,
        comments: 0,
      })
    ).id;
    await userPostsCollection.add({
      createdAt: timestamp,
      id: {
        folder: user.folder.id,
        post: postId,
      },
    });
  } else {
    postId = (
      await userPostsCollection.add({
        description,
        photoUrls: urls,
        createdAt: timestamp,
        likes: 0,
        comments: 0,
      })
    ).id;
  }
  const docs = (await followersCollection.get()).docs;
  for (const doc of docs) {
    const followerId = doc.data().id;
    const feedsCollection = usersCollection.doc(followerId).collection('feeds');
    const json = {
      uploader: user.id,
      post: postId,
    };
    const folder = user.folder;
    if (folder) {
      json.folder = folder.id;
    }
    await feedsCollection.add(json);
  }
}
export async function createPostOfGroup({group, postInfo, membersInfo}) {
  let groupsCollection;
  let groupDoc;
  let folderDoc;
  let folderPostsCollection;
  let groupPostsCollection;
  groupsCollection = firestore().collection('groups');
  groupDoc = groupsCollection.doc(group.id);
  const followersCollection = groupDoc.collection('followers');
  if (group.folders) {
    folderDoc = groupDoc.collection('folders').doc(group.folders[0].id);
    folderPostsCollection = folderDoc.collection('posts');
  }
  const timestamp = await getTimestamp();

  groupPostsCollection = groupDoc.collection('posts');
  /* 그룹일 때하고 유저일 때 다른 함수를 호출하거나 함수를 통합 */
  const postMap = [];
  const urls = [];
  const membersMap = [];
  for (const info in postInfo) {
    postMap.push({
      photoUrl: info.photoUrl,
      id: info.memberId,
    });
    urls.push(info.photoUrl);
  } /* 
  for (const memberInfo of membersInfo) {
    membersMap.push({
      id: memberInfo.id,
      description: memberInfo.description,
    });
  } */
  await storePostImagesOfGroup({
    groupId: group.id,
    photoUrls: urls,
    timestamp: timestamp.toDate(),
  });

  const postId = await getPostIdAndUploadPostOfGroup({
    description,
    members: memberMap,
    timestamp,
    fpc: folderPostsCollection,
    gpc: groupPostsCollection,
    folderId: group.folders[0].id,
  });
  const docs = (await followersCollection.get()).docs;
  for (const doc of docs) {
    const followerId = doc.data().id;
    const feedsCollection = groupCollection.doc(followerId).collection('feeds');
    const json = {
      id: {
        uploader: group.id,
        post: postId,
        folders: [group.folders[0]?.id],
      },
      createdAt: timestamp,
    };
    await feedsCollection.add(json);
  }
}
async function getPostIdAndUploadPostOfGroup({
  description,
  members,
  timestamp,
  fpc,
  gpc,
  folderId,
}) {
  if (folderPostsCollection) {
    postId = (
      await fpc.add({
        groupDescription: description,
        members: members,
        createdAt: timestamp,
        likes: 0,
        comments: 0,
      })
    ).id;
    await gpc.add({
      createdAt: timestamp,
      id: {
        folders: [folderId],
        post: postId,
      },
    });
  } else {
    postId = (
      await gpc.add({
        description: description,
        members: members,
        createdAt: timestamp,
        likes: 0,
        comments: 0,
      })
    ).id;
  }
  return postId;
}
