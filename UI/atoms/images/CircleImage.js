import {Image} from 'react-native';

export default function CircleImage({style, size, source}) {
  return (
    <Image
      style={[{width: size, height: size, borderRadius: size * 0.5}, style]}
      source={source}
    />
  );
}
