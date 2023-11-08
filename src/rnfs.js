import RNFS from 'react-native-fs';

const dirs = RNFS.ExternalStorageDirectoryPath;
const folder = {
  name: `Arriversary`,
  previous: {
    path: `${dirs}/DCIM`,
  },
};
folder.path = `${folder.previous.path}/${folder.name}`;
export const readDirs = async path => {
  const paths = [];
  const dirs = await RNFS.readDir(path);

  for (const dir of dirs) {
    if (dir.isDirectory()) {
      p = dir.path;
      paths.push({
        path: p,
        name: p.substring(p.lastIndexOf('/') + 1),
      });
    }
  }
  return paths;
};
export const readFiles = {};
export const readEveryFiles = async path => {
  const paths = [];
  const dirs = await RNFS.readDir(path);

  for (const dir of dirs) {
    if (dir.isDirectory()) {
      const files = await RNFS.readDir(dir.path);
      for (const file of files) {
        if (file.isFile())
          paths.push({
            path: file.path,
            update_time: new Date(file.mtime),
          });
      }

      /*paths.push({});
     const last_path=paths[paths.length-1]
    last_path.dir = dir.path;
    last_path.file = [];
    for (const file of files) {
      last_path.file.push({
        path: file.path,
        update_time: new Date(file.mtime),
      });
    } */
    }
  }
  paths.sort((a, b) => {
    const aTime = a.update_time;
    const bTime = b.update_time;
    return bTime - aTime;
  });
  return paths;
};
export const galleryPath = folder.previous.path;
export const filePath = fileName => {
  RNFS.exists(folder.path)
    .then(exists => {
      if (exists) {
        console.log(`Directory ${folder.path} already exists`);
      } else {
        RNFS.mkdir(folder.path)
          .then(() => {
            console.log(`Directory ${folder.path} created`);
          })
          .catch(error => {
            console.warn(error.message);
          });
      }
    })
    .catch(error => {
      console.warn(error.message);
    });
  console.log(`커스텀 이미지 경로:${folder.path}/${fileName}`);
  if (fileName) return `${folder.path}/${fileName}`;
  else return folder.path;
};
