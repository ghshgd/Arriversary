import Entypo from 'react-native-vector-icons/Entypo';
import SquareButton from '../buttons/SquareButton';

export default function InstagramButton({size}) {
  function goToInstagramHandler() {}
  return (
    <SquareButton
      style={{
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      size={size}>
      <Entypo name="instagram" size={size * 0.6} color="black" />
    </SquareButton>
  );
}
