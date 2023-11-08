import {View, Image, StyleSheet} from 'react-native'
import {useState} from 'react'
import Lengths from '../../../assets/values/Lengths';
export default function UploadingImage({source, host}) {
  const imageSize = Lengths.height * 0.12;
  const [imageLength, setImageLength] = useState({
    width: imageSize,
    height: imageSize,
  });
  return <View style={styles.container}>
  <Image
    style={[styles.content, imageLength]}
    source={source}
  />
    <Image style={[styles.content, styles.host, {width: imageLength.width / 3, height: imageLength.height / 3, borderRadius: imageLength.width / 6}]} source={host}/>
</View>
}

const styles = StyleSheet.create({
  container: {},
  content: {resizeMode: 'cover', borderRadius: 12},
  host: {position: 'absolute',bottom: 8, left:8 }
  
})