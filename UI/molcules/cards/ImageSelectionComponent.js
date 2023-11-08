import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from 'react';
export default function ImageSelectionComponent({
  onSelectImage,
  width,
  order,
  style,
  source,
  isMultiSelectButtonClicked,
  index,
}) {
  const [size, setSize] = useState({width: 0, height: 0});
  const getImageSize = () => {
    Image.getSize(
      'file://' + source,
      (width, height) => {
        console.log('Width:', width);
        console.log('Height:', height);
      },
      error => {
        console.error(error);
      },
    );
  };
  return (
    <TouchableOpacity
      onPress={() => {
        Image.getSize(
          'file://' + source,
          (width, height) => {
            const size = width / height;
            const isCorrectSize = size > 1 / 3 && size < 3;
            if (isCorrectSize) onSelectImage(order);
          },
          error => {
            console.error(error);
          },
        );
      }}
      style={{marginHorizontal: index % 3 == 1 ? 1 : 0}}>
      <View
        style={{
          backgroundColor: order != 0 && 'white',
          opacity: order != 0 ? 0.3 : 1,
        }}>
        <Image
          source={{uri: 'file://' + source}}
          style={[styles.image, {width, height: width}, style]}
        />
      </View>
      {isMultiSelectButtonClicked && (
        <View
          style={[
            {
              width: width * 0.24,
              height: width * 0.24,
              borderRadius: width * 0.12,
            },
            styles.numberContainer,
          ]}>
          <View
            style={[
              styles.backgroundColor,
              {
                width: width * 0.24,
                height: width * 0.24,
                backgroundColor: order != 0 ? '#ddd' : 'white',
                opacity: order != 0 ? 1 : 0.3,
              },
            ]}
          />
          <Text style={styles.number}>{order != 0 && order}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  selectCircle: {
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberContainer: {
    borderColor: 'white',
    borderWidth: 2,
    position: 'absolute',
    top: 4,
    left: 4,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  backgroundColor: {
    position: 'absolute',
    flex: 1,
    opacity: 0.5,
  },
  number: {
    color: 'black',
  },
});
