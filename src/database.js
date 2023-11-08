const db = require('./firebase/firebase');

module.exports.fetchMsgs = async function fetchMsgs(users, roomName) {
  console.log(`db:${db}`);
  console.log(`db type :${typeof db}`);
  const roomsCollection = collection(db, 'collectionA/docA/collectionB');
  console.log(`roomCollection:${roomsCollection}`);
  const roomDocs = await getDocs(roomsCollection);
  roomDocs.forEach(roomDoc => {
    const data = roomDoc.data();
    console.log('roomDoc.data:', data);
  });
};
