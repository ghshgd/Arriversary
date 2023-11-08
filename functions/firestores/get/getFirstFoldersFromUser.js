import {getFirestore} from 'firebase-admin/firestore';

const firestore = getFirestore();
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
    folders.push(data);
  }
  return folders;
};
