import {View} from 'react-native';
import InfoButton from '../../atoms/buttons/InfoButton';

export default function InfoButtons({
  names,
  followers,
  followings,
  groups,
  size,
  gap,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: gap,
      }}>
      <InfoButton name={'follower'} people={followers} size={size} gap={gap} />
      <InfoButton
        name={'following'}
        people={followings}
        size={size}
        gap={gap}
      />
      <InfoButton name={'group'} people={groups} size={size} gap={gap} />
    </View>
  );
}
