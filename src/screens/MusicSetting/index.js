import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import styles from './styles';
import Header from '../../component/common/Header';
import BackgroundColor from '../../component/common/BackgroundColor';
import {useNavigation} from '@react-navigation/native';
import LightSettingBoxComponent from '../../component/LightSettingBoxComponent';
import data from './data';
import CustomButton from '../../component/common/CustomButton';
import Container from '../../component/common/Container';
import routeNames from './../../constants/routeNames';

const MusicSetting = () => {
  const {navigate} = useNavigation();
  const navigation = useNavigation();

  const [values, setValues] = useState(data.map(value => value.boxTitle));

  const handleInputChange = (index, newValue) => {
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headreView}>
        <Header
          iconFirst
          iconForth
          title={'Music Setting'}
          type={'ioni'}
          name={'arrow-undo'}
          firstType={'entypo'}
          firstName={'home'}
          secondType={'entypo'}
          secondName={'home'}
          thirdType={'entypo'}
          thirdName={'menu'}
          size={24}
          onPressFirst={() => Alert.alert('Drawer button pressed')}
          onPressSecond={() => {
            navigate(routeNames.HOME);
          }}
        />
      </View>
      <BackgroundColor>
        <View style={styles.boxTitleContainer}>
          <Container>
            <View style={styles.lightSettingStyle}>
              {/* <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({item}) => (
                <LightSettingBoxComponent
                  mainTitle={item.mainTitle}
                    boxTitle={item.boxTitle}
                    container={styles.lightSettingBoxComponentContainer}
                    value={values[index]}
                    onChangeText={newValue =>
                      handleInputChange(index, newValue)
                    }
                    keyboardType={item.keyboardType}
                    editable={item.edit}
                />
              )}
            /> */}
              {data.map((item, index) => {
                return (
                  <LightSettingBoxComponent
                    key={index}
                    mainTitle={item.mainTitle}
                    boxTitle={item.boxTitle}
                    container={styles.lightSettingBoxComponentContainer}
                    value={values[index]}
                    onChangeText={newValue =>
                      handleInputChange(index, newValue)
                    }
                    keyboardType={item.keyboardType}
                    editable={item.edit}
                  />
                );
              })}
            </View>
          </Container>
          <View style={styles.customButtonContainer}>
            <CustomButton
              style={styles.customButtonStyle}
              secondary
              title="UPDATE"
              onPress={() => {
                Alert.alert('Updated Successfully');
                navigation.goBack();
              }}
            />
          </View>
        </View>
      </BackgroundColor>
    </View>
  );
};

export default MusicSetting;
