import React, {useState} from 'react';
import {View, FlatList, Alert} from 'react-native';
import CardComponent from '../CardComponent';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {ADDHOME, SPLASH} from '../../constants/routeNames';
import dummyData from './dummyData';
import ButtonWithLoader from '../common/ButtonWithLoader';
import actions from '../../redux/actions';
import {useSelector} from 'react-redux';
import Routes from '../../navigation/Routes';

const Card = () => {
  const {navigate} = useNavigation();

  const [isLoading, setIsLoading] = useState(false);

  const onLogOutPress = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out',
      [{text: 'Yes', onPress: logout}, {text: 'No'}],
      {cancelable: true},
    );
  };

  const logout = () => {
    setIsLoading(true);
    setTimeout(() => {
      actions.logout();
      setIsLoading(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dummyData}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <>
              <View style={{paddingHorizontal: 4}} />
              <CardComponent title={item.title} source={item.source} />
              <View style={{paddingHorizontal: 4}} />
            </>
          )}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
      <View style={styles.buttonViewContainer}>
        <ButtonWithLoader
          title={'Log out'}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.textStyle}
          isLoading={isLoading}
          onPress={onLogOutPress}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          style={styles.innerButton}
          secondary
          title="Add More Area"
          onPress={() => {
            navigate(ADDHOME);
          }}
        />
      </View>
    </View>
  );
};

export default Card;
