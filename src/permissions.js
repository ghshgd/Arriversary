const {
  PERMISSIONS,
  checkMultiple,
  requestMultiple,
} = require('react-native-permissions');
const {Platform} = require('react-native');
const read_image_permission =
  Platform.OS == 'android'
    ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
    : PERMISSIONS.IOS.READ_MEDIA_IMAGES;
const read_external_storage_permission =
  Platform.OS == 'android'
    ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
    : PERMISSIONS.IOS.READ_EXTERNAL_STORAGE;
const write_external_storage_permission = (Platform.OS = 'android'
  ? PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
  : PERMISSIONS.IOS.WRITE_EXTERNAL_STORAGE);
const permissions = [
  read_image_permission,
  read_external_storage_permission,
  write_external_storage_permission,
];
export async function check_and_request_permissions() {
  await checkMultiple(permissions)
    .then(statuses => {
      console.log(
        `statuses[read_iamge_permission]:${statuses[read_image_permission]}`,
      );
      console.log('read_media_images', statuses[read_image_permission]);
      console.log(
        'read_external_storage',
        statuses[read_external_storage_permission],
      );
      console.log(
        'write_external_storage',
        statuses[write_external_storage_permission],
      );
      const request_permissions = [];
      if (statuses[read_image_permission] != 'granted') {
        request_permissions.push(read_image_permission);
      }
      if (statuses[read_external_storage_permission] != 'granted') {
        request_permissions.push(read_external_storage_permission);
      }
      if (statuses[write_external_storage_permission] != 'granted') {
        request_permissions.push(write_external_storage_permission);
      }
      if (request_permissions.length > 0)
        requestMultiple(request_permissions)
          .then(statuses => {
            console.log('read_media_images', statuses[read_image_permission]);
            console.log(
              'read_external_storage',
              statuses[read_external_storage_permission],
            );
            console.log(
              'write_external_storage',
              statuses[write_external_storage_permission],
            );
          })
          .catch(error => {
            console.log(`request_permissions_error_message:${error.message}`);
          });
    })
    .catch(error => {
      console.log(`check_permissions_error_message:${error.message}`);
    });
}
