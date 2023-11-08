import {StyleSheet, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchBar from '../../molcules/searchBars/SearchBar';
import Spacer from '../../atoms/Spacer';
import SearchLog from '../../molcules/cards/SearchLog';

export default function SearchScreen({value, setValue}) {
  return (
    <View style={styles.container}>
      {/* 맨위 백버튼하고 검색창 */}
      <View style={styles.searchContainer}>
        <View style={styles.back}>
          <FontAwesome name="long-arrow-left" size={24} color="black" />
        </View>
        <SearchBar value={value} setValue={setValue} />
      </View>
      {/* 검색 기록 리스트 */}
      {[1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 1, 23, 4, 11, 2].map((e, i) => (
        <SearchLog
          key={i}
          source={require('../../../assets/imgs/youjeong1.jpg')}
          name="유정"
        />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  searchContainer: {flexDirection: 'row', alignItems: 'center'},
  back: {
    padding: 8,
  },
});
