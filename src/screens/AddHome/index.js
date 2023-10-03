import React, {useRef, useState} from 'react';
import {View, Text, Alert, Image} from 'react-native';
import styles from './styles';
import ImagePicker from '../../component/common/ImagePicker';
import RBSheet from 'react-native-raw-bottom-sheet';
import CustomButton from '../../component/common/CustomButton';
import Input from '../../component/common/Input';

const AddHome = ({navigation}) => {
  const refRBSheet = useRef();
  const [imagePath, setImagePath] = useState(null);
  const [text, setText] = useState('');

  const handleImageSelected = path => {
    setImagePath(path);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainViewStyle}>
        <View style={styles.innerViewStyle}>
          <View style={styles.imageView}>
            {imagePath && (
              <Image
                source={{uri: imagePath}}
                width={150}
                height={150}
                alt="image"
              />
            )}
            <Text style={styles.textStyle}>{text}</Text>
          </View>
          <Input
            placeholder={'Enter Name Here'}
            value={text}
            onChangeText={value => setText(value)}
          />
          <CustomButton
            secondary
            title="Select Image"
            onPress={() => refRBSheet.current.open()}
          />
          <RBSheet
            ref={refRBSheet}
            height={150}
            openDuration={250}
            dragFromTopOnly
            closeOnDragDown
            closeOnPressBack
            customStyles={{
              container: {
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                paddingLeft: 30,
              },
            }}>
            <ImagePicker imagePathProps={handleImageSelected} />
          </RBSheet>
        </View>
      </View>
      <View style={styles.savebuttonContainer}>
        <CustomButton
          style={styles.saveButton}
          secondary
          title="Save"
          onPress={() => {
            Alert.alert('Added Successfully');
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};

export default AddHome;
