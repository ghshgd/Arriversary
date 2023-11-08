// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  limit,
  Timestamp,
  query,
  orderBy,
  startAfter,
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import firebaseConfig from "./firebaseConfig";
let prevTime = 0;
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const exports = module.exports;
exports.db = db;
exports.getTimestamp = async () => {
  const now = await Timestamp.now();
  return now;
};
exports.googleSigninConfigure = async () => {
  await GoogleSignin.configure({
    webClientId:
      "570341580791-ej71j7klhnklun3sra84aulo5p07f5uj.apps.googleusercontent.com",
  });
  console.log(`hiGoogle Signin!`);
};
exports.fetchHashTagData = async ({ name }) => {
  if (name != "") {
    const hashTagCollection = collection(db, "hashTag");
    const q = query(hashTagCollection, where("name", "<=", name), limit(12));
    const tagData = await getDocs(q);
    const datas = [];
    tagData.forEach((e) => {
      datas.push(e.data().name);
    });
    return datas;
  }
  return [];
};
exports.fetchTagData = async ({ name }) => {
  const userCollection = collection(db, "users");
  if (name != "") {
    const users = "users";
    const name_arr = name.split("");
    const q = query(userCollection, where("tag", ">=", name), limit(12));
    const tagData = await getDocs(q);
    const datas = [];
    tagData.forEach((e) => {
      datas.push(e.data().tag);
    });
    return datas;
  }
  return [];
};
exports.getImage = async function (name) {
  const storage = getStorage();
  const reference = ref(storage, "celebs/wonyoung2.jpg");
  return await getDownloadURL(reference).then((x) => {
    return x;
  });
};
exports.getFirstFoldersFromUser = async ({ user }) => {
  console.log(`겟퍼폴프유 실ㅇ행`);
  const folderCollection = collection(db, `users/${user.id}/folders`);
  const q = query(folderCollection, orderBy("name"), limit(12));
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
      `image/${year}/${month}/${day}/${hour}/${minute}/${second}/users/${user.tag}/folders/${data.name}/${uri}`
    );
    const url = await getDownloadURL(storageRef);
    console.log(`url${url}`);
    data.image.url = url;
    folders.push({ ...data, id: doc.id });
    console.log(``);
  }
  return folders;
};
exports.getFoldersFromGroupWithKeyword = async function ({ group, keyword }) {
  const folderCollection = collection(db, `groups/${group.id}/folders`);
  const q = query(
    folderCollection,
    where("name", ">=", keyword),
    orderBy("name"),
    limit(12)
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
      `image/${year}/${month}/${day}/${hour}/${minute}/${second}/groups/${group.name}/folders/${data.name}/${uri}`
    );
    const url = await getDownloadURL(storageRef);
    image.url = url;
    datas.push({ ...data, id: doc.id });
  }
  return datas;
};
exports.getFirstFoldersFromGroup = async function ({ group }) {
  const folderCollection = collection(db, `groups/${group.id}/folders`);
  const q = query(folderCollection, orderBy("name"), limit(12));
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
      `image/${year}/${month}/${day}/${hour}/${minute}/${second}/groups/${group.name}/folders/${data.name}/${uri}`
    );
    const url = await getDownloadURL(storageRef);
    image.url = url;
    datas.push({ ...data, id: doc.id });
  }
  return datas;
};
exports.getFoldersFromGroup = async function ({ user, folder }) {
  const folderCollection = collection(db, `users/${user.id}/folders`);
  const q = query(
    folderCollection,
    orderBy("name"),
    startAfter(folder.name),
    limit(12)
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
      `image/${year}/${month}/${day}/${hour}/${minute}/${second}/users/${user.tag}/folders/${data.name}/${uri}`
    );
    console.log(`startAfter:${data.name}`);
    const url = await getDownloadURL(storageRef);
    image.url = url;
    datas.push({ ...data, id: doc.id });
  }
  return datas;
};
exports.fetchGroups = async function fetchedGroups({ member, keyword }) {
  const groupCollection = collection(db, "groups");
  console.log(`파이어베이스멤버, 이름:${member}, ${keyword}`);
  const wheres = [];
  wheres.push(where("members", "array-contains", member));
  if (keyword) wheres.push(where("name", ">=", keyword));
  const q = query(groupCollection, ...wheres, orderBy("name"), limit(12));
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
      `image/${year}/${month}/${day}/${hour}/${minute}/${second}/groups/${data.name}/${uri}`
    );
    const url = await getDownloadURL(storageRef);
    console.log(`url${url}`);
    data.image.url = url;
    groups.push({ id: doc.id, image: data.image, name: data.name });
    console.log(`페치 그룹스name:${doc.data().name}`);
    console.log(`페치 그룹스id:${doc.id}`);
    console.log(`페치 그룹스members:${doc.data().members}`);
  }
  return groups;
};
exports.getUserInfo = async function (user) {
  const userCollection = collection(db, "users");
  const { email, hashTag, nickname } = user;

  const key = email
    ? "email"
    : hashTag
    ? "hashTag"
    : nickname
    ? "nickname"
    : null;
  const value = email ? email : hashTag ? hashTag : nickname ? nickname : null;

  console.log(`key:${key}`);
  console.log(`value:${value}`);

  const q = query(
    userCollection,
    where(key, "==", value),
    orderBy(key),
    limit(12)
  );
  const docs = (await getDocs(q)).docs;
  console.log(`겟유저ㅏ인포:${docs[0].id}`);
  const doc = { ...docs[0].data(), id: docs[0].id };
  return doc;
};

exports.fetchMsgs = async function fetchMsgs(users, roomName) {
  console.log(`db:${db}`);
  console.log(`db type :${typeof db}`);
  const roomsCollection = collection(db, "collectionA/docA/collectionB");
  console.log(`roomCollection:${roomsCollection}`);
  const roomDocs = await getDocs(roomsCollection);
  roomDocs.forEach((roomDoc) => {
    const data = roomDoc.data();
    console.log("roomDoc.data:", data);
  });
};
