import {
  Timestamp,
  collection,
  getDocs,
  limit,
  query,
  where,
} from 'firebase/firestore';

export async function getTimestamp() {
  const now = await Timestamp.now();
  return now;
}
export const getFirstFoldersFromUser = async ({user}) => {
  console.log(`겟퍼폴프유 실ㅇ행`);
  const folderCollection = collection(db, `users/${user.id}/folders`);
  const q = query(folderCollection, orderBy('name'), limit(12));
  const docs = (await getDocs(q)).docs;
  const folders = [];
  for (const doc of docs) {
    const data = doc.data();
    const image = data.image;
    const uri = image.uri;
    const created = image.created.toDate();
    const year = created.getFullYear();
    const month = created.getMonth() + 1;
    const day = created.getDate();
    const hour = created.getHours();
    const minute = created.getMinutes();
    const second = created.getSeconds();
    const storage = getStorage();
    const storageRef = ref(
      storage,
      `image/${year}/${month}/${day}/${hour}/${minute}/${second}/users/${user.tag}/folders/${data.name}/${uri}`,
    );
    const url = await getDownloadURL(storageRef);
    console.log(`url${url}`);
    data.image.url = url;
    folders.push({...data, id: data.id});
  }
  return folders;
};
export const getFoldersFromGroupWithKeyword = async function ({
  group,
  keyword,
}) {
  const folderCollection = collection(db, `groups/${group.id}/folders`);
  const q = query(
    folderCollection,
    where('name', '>=', keyword),
    orderBy('name'),
    limit(12),
  );
  const docs = (await getDocs(q)).docs;
  const datas = [];
  for (const doc of docs) {
    const data = doc.data();
    const image = data.image;
    const uri = image.uri;
    const created = image.created.toDate();
    const year = created.getFullYear();
    const month = created.getMonth() + 1;
    const day = created.getDate();
    const hour = created.getHours();
    const minute = created.getMinutes();
    const second = created.getSeconds();
    const storage = getStorage();
    const storageRef = ref(
      storage,
      `image/${year}/${month}/${day}/${hour}/${minute}/${second}/groups/${group.name}/folders/${data.name}/${uri}`,
    );
    const url = await getDownloadURL(storageRef);
    image.url = url;
    datas.push({...data, id: doc.id});
  }
  return datas;
};
export const getFirstFoldersFromGroup = async function ({group}) {
  const folderCollection = collection(db, `groups/${group.id}/folders`);
  const q = query(folderCollection, orderBy('name'), limit(12));
  const docs = (await getDocs(q)).docs;
  const datas = [];
  for (const doc of docs) {
    const data = doc.data();
    const image = data.image;
    const uri = image.uri;
    const created = image.created.toDate();
    const year = created.getFullYear();
    const month = created.getMonth() + 1;
    const day = created.getDate();
    const hour = created.getHours();
    const minute = created.getMinutes();
    const second = created.getSeconds();
    const storage = getStorage();
    const storageRef = ref(
      storage,
      `image/${year}/${month}/${day}/${hour}/${minute}/${second}/groups/${group.name}/folders/${data.name}/${uri}`,
    );
    const url = await getDownloadURL(storageRef);
    image.url = url;
    datas.push({...data, id: doc.id});
  }
  return datas;
};
export const getFoldersFromGroup = async function ({user, folder}) {
  const folderCollection = collection(db, `users/${user.id}/folders`);
  const q = query(
    folderCollection,
    orderBy('name'),
    startAfter(folder.name),
    limit(12),
  );
  const docs = (await getDocs(q)).docs;
  const datas = [];
  for (const doc of docs) {
    const data = doc.data();
    const image = data.image;
    const uri = image.uri;
    const created = image.created.toDate();
    const year = created.getFullYear();
    const month = created.getMonth() + 1;
    const day = created.getDate();
    const hour = created.getHours();
    const minute = created.getMinutes();
    const second = created.getSeconds();
    const storage = getStorage();
    const storageRef = ref(
      storage,
      `image/${year}/${month}/${day}/${hour}/${minute}/${second}/users/${user.tag}/folders/${data.name}/${uri}`,
    );
    console.log(`startAfter:${data.name}`);
    const url = await getDownloadURL(storageRef);
    image.url = url;
    datas.push({...data, id: doc.id});
  }
  return datas;
};
export const fetchGroups = async function fetchedGroups({member, keyword}) {
  const groupCollection = collection(db, 'groups');
  console.log(`파이어베이스멤버, 이름:${member}, ${keyword}`);
  const wheres = [];
  wheres.push(where('members', 'array-contains', member));
  if (keyword) wheres.push(where('name', '>=', keyword));
  const q = query(groupCollection, ...wheres, orderBy('name'), limit(12));
  const docs = (await getDocs(q)).docs;
  const groups = [];
  for (const doc of docs) {
    const image = doc.data().image;
    const uri = image.uri;
    const created = image.created.toDate();
    const year = created.getFullYear();
    const month = created.getMonth() + 1;
    const day = created.getDate();
    const hour = created.getHours();
    const minute = created.getMinutes();
    const second = created.getSeconds();
    const data = doc.data();
    const storage = getStorage();
    const storageRef = ref(
      storage,
      `image/${year}/${month}/${day}/${hour}/${minute}/${second}/groups/${data.name}/${uri}`,
    );
    const url = await getDownloadURL(storageRef);
    console.log(`url${url}`);
    data.image.url = url;
    groups.push({id: doc.id, image: data.image, name: data.name});
    console.log(`페치 그룹스name:${doc.data().name}`);
    console.log(`페치 그룹스id:${doc.id}`);
    console.log(`페치 그룹스members:${doc.data().members}`);
  }
  return groups;
};
export const getUserInfo = async function (user) {
  const userCollection = collection(db, 'users');
  const {email, hashTag, nickname} = user;

  const key = email
    ? 'email'
    : hashTag
    ? 'hashTag'
    : nickname
    ? 'nickname'
    : null;
  const value = email ? email : hashTag ? hashTag : nickname ? nickname : null;

  console.log(`key:${key}`);
  console.log(`value:${value}`);

  const q = query(
    userCollection,
    where(key, '==', value),
    orderBy(key),
    limit(12),
  );
  const docs = (await getDocs(q)).docs;
  console.log(`겟유저ㅏ인포:${docs[0].id}`);
  const doc = {...docs[0].data(), id: docs[0].id};
  return doc;
};

export const fetchHashTagData = async ({name}) => {
  if (name != '') {
    const hashTagCollection = collection(db, 'hashTag');
    const q = query(hashTagCollection, where('name', '<=', name), limit(12));
    const tagData = await getDocs(q);
    const datas = [];
    tagData.forEach(e => {
      datas.push(e.data().name);
    });
    return datas;
  }
  return [];
};
export const fetchTagData = async ({name}) => {
  const userCollection = collection(db, 'users');
  if (name != '') {
    const users = 'users';
    const name_arr = name.split('');
    const q = query(userCollection, where('tag', '>=', name), limit(12));
    const tagData = await getDocs(q);
    const datas = [];
    tagData.forEach(e => {
      datas.push(e.data().tag);
    });
    return datas;
  }
  return [];
};
