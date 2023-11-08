import {ScrollView, StyleSheet, View} from 'react-native';
import Lengths from '../../assets/values/Lengths';
import Colaborator from '../molcules/imgs/Colaborator';
import Spacer from '../atoms/Spacer';
const width = Lengths.width;
export default function Colaborators() {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(element => (
        <View key={element} style={styles.colaborator}>
          <Colaborator
            name="yihyun1"
            source={require('../../assets/imgs/yihyun2.jpg')}
            size={width * 0.16}
          />
          <Spacer width={width * 0.04} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 12,
    left: 4,
  },
  colaborator: {flexDirection: 'row'},
});
