import React, {useRef, useState} from 'react';
import {View, Text, Alert, Image} from 'react-native';
import styles from './styles';
import ImagePicker from '../../component/common/ImagePicker';
import RBSheet from 'react-native-raw-bottom-sheet';
import CustomButton from '../../component/common/CustomButton';
import Input from '../../component/common/Input';
import {apiPost} from '../../utils/utils';
import {ADD_AREA} from '../../config/urls';
import validator from '../../utils/validations';
import {showError} from '../../utils/helperFunction';
import ButtonWithLoader from '../../component/common/ButtonWithLoader';

const AddHome = ({navigation}) => {
  const refRBSheet = useRef();

  const [state, setState] = useState({
    isLoading: false,
    addArea: '',
    subnetID: '',
    imagePath: null,
  });

  const {isLoading, addArea, subnetID, imagePath} = state;

  const updateState = data => setState(prevState => ({...prevState, ...data}));

  const handleImageSelected = path => {
    updateState({imagePath: path});
  };

  const isValidData = () => {
    const error = validator({
      addArea,
      subnetID,
    });
    if (error) {
      showError(error);
      return false;
    }

    if (!imagePath) {
      showError('Please select an image');
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    let params = {
      title: addArea,
      subnetID,
      image: imagePath,
    };

    const checkValid = isValidData();
    if (checkValid) {
      updateState({isLoading: true});
      try {
        const res = await apiPost(ADD_AREA, params);

        console.log('API Response: ', res);
        updateState({isLoading: false});
      } catch (error) {
        console.log(error);
        updateState({isLoading: false});
      }

      // Alert.alert('kishan')
      console.log('data in params: ', params);
    }
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
            <View style={{paddingTop: 12}} />
          </View>
          <Input
            placeholder={'Enter Area Name'}
            value={addArea}
            onChangeText={addArea => updateState({addArea})}
          />
          <Input
            placeholder="Enter Subnet ID"
            keyboardType="numeric"
            value={subnetID}
            onChangeText={subnetID => updateState({subnetID})}
          />
          <View style={{paddingTop: 12}} />
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
        <ButtonWithLoader
          title="Save"
          onPress={handleSubmit}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
};

export default AddHome;
