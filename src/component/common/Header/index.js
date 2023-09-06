import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../../../assets/theme/colors';
import styles from './styles';
import Icon from '../../common/Icon';

const Header = ({
  onPressFirst,
  onPressSecond,
  onPressThird,
  onPressForth,
  onPressFifth,
  headerStyle,
  title,
  size,
  name,
  type,
  imgView,
  iconFirst,
  iconSecond,
  iconThird,
  iconForth,
  firstName,
  firstType,
  secondName,
  secondType,
  thirdName,
  thirdType,
  forthName,
  forthType,
}) => {
  const navigation = useNavigation();
  return (
    <View style={{...styles.headerStyle, ...headerStyle}}>
      {!!iconForth ? null : <View />}
      <View>
        {!!iconFirst ? (
          <View style={styles.iconContainer}>
            <View>
              <TouchableOpacity
                onPress={
                  !!onPressFirst ? onPressFirst : () => navigation.goBack()
                }>
                <Icon
                  style={{...styles.imgView, ...imgView}}
                  size={size}
                  name={thirdName}
                  type={thirdType}
                />
              </TouchableOpacity>
            </View>
            <View style={{paddingLeft: 20}}>
              <TouchableOpacity
                onPress={
                  !!onPressSecond ? onPressSecond : () => navigation.goBack()
                }>
                <Icon
                  style={{...styles.imgView, ...imgView}}
                  size={size}
                  name={secondName}
                  type={secondType}
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
      <View>
        {!!iconSecond ? (
          <TouchableOpacity
            onPress={!!onPressThird ? onPressThird : () => navigation.goBack()}>
            <Icon
              style={{...styles.imgView, ...imgView}}
              size={size}
              name={firstName}
              type={firstType}
            />
          </TouchableOpacity>
        ) : (
          <Text style={styles.textView}>{title}</Text>
        )}
      </View>
      <View>
        {!!iconThird ? (
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingRight: 20}}>
              <TouchableOpacity
                onPress={
                  !!onPressForth ? onPressForth : () => navigation.goBack()
                }>
                <Icon
                  style={{...styles.imgView, ...imgView}}
                  size={size}
                  name={name}
                  type={type}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={
                !!onPressFifth ? onPressFifth : () => navigation.goBack()
              }>
              <Icon
                style={{...styles.imgView, ...imgView}}
                size={size}
                name={forthName}
                type={forthType}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={!!onPressForth ? onPressForth : () => navigation.goBack()}>
            <Icon
              style={{...styles.imgView, ...imgView}}
              size={size}
              name={name}
              type={type}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default Header;
