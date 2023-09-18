import React from 'react';
import {ScrollView, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigationState} from '@react-navigation/native';
import colors from '../assets/theme/colors';
import {View} from 'react-native';
import Icon from './../component/common/Icon/index';

const ScrollBottomTabComponent = ({state, descriptors, navigation}) => {
  const routeNames = useNavigationState(state =>
    state.routes.map(route => route.name),
  );
//   console.log(state.options);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            activeOpacity={1}
            key={route.key}
            onPress={onPress}
            style={[
              styles.tab,
                // {backgroundColor: isFocused ? 'blue' : 'white'},
            ]}>
            {/* <Text style={{color: isFocused ? colors.themeColor : colors.inActive}}> */}
            <View>
              <Text
                style={{
                  color: isFocused ? colors.themeColor : colors.inActive,
                }}>
                {route.name}
              </Text>
              <Icon
                type={[route.type]}
                name={[route.name]}
                size={24}
                // color={isFocused ? 'white' : 'black'}
              />
            </View>
            {/* </Text> */}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
    position: 'absolute',
    bottom: 0,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'white',
  },
});

export default ScrollBottomTabComponent;
