import {ScrollView, Text} from 'react-native';

export default function TagDropdown({data, renderItem, style}) {
  console.log(`태그 드랍다운 데이터는 배열인가? :${Array.isArray(data)}`);
  console.log(`태그 드랍다운 데이터:${data}`);
  console.log(`태그 드랍다운 []는 배열인가:${Array.isArray([])}`);
  console.log(`태그 드랍다운 []의 타입은?${typeof []}`);
  console.log(`태그 드랍다운 데이터 타입은?:${typeof data}`);
  return (
    <ScrollView style={style}>
      {data.map((tag, idx) => (
        <Text key={idx}>{tag}</Text>
      ))}
    </ScrollView>
  );
}
