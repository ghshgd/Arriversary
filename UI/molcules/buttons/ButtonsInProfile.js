import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../../atoms/buttons/Button';
import InstagramButton from '../../atoms/icons/InstagramButton';
import Spacer from '../../atoms/Spacer';
export default function ButtonsInProfile({size, marginTop}) {
  const [isFollowing, setIsFollowing] = useState(false);
  const gap = size / 5;

  return (
    <View style={{...styles.container, marginTop}}>
      <Button size={size} gap={gap} name="follow" />
      <Spacer width={size * 0.2} />
      <InstagramButton size={size} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  instagramButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
  },
});
