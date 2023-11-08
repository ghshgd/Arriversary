import {PermissionsAndroid} from 'react-native';
const read_image_permission = PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES;
export async function check_and_request_read_image_permission() {
  const check_result = await PermissionsAndroid.check(read_image_permission);
  if (!check_result) {
    const request_result = await PermissionsAndroid.request(
      read_image_permission,
    ).catch(e => console.log(`error message:${e.message}`));
    return request_result;
  }
  return false;
}
