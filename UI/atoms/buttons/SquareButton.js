import {Pressable} from 'react-native';

export default function SquareButton({size, style, onPress, children}) {
  console.log(`himaru@`);
  return (
    <Pressable
      style={[
        style,
        {
          width: size,
          height: size,
          borderWidth: 1,
          borderRadius: 4,
          borderColor: 'black',
        },
      ]}
      onPress={onPress}>
      {children}
    </Pressable>
  );
}
