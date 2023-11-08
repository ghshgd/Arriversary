import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Text, View} from 'react-native';

export default function Option({viewStyle, name, size}) {
  return (
    <View style={viewStyle}>
      <FontAwesome5 name={name} size={size} color="black" />
      <Text>6.8m</Text>
    </View>
  );
}
