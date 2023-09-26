import React from 'react';
import {ScrollView, TouchableOpacity, Text, StyleSheet, Platform} from 'react-native';
import {useNavigationState} from '@react-navigation/native';
import colors from '../assets/theme/colors';
import {View} from 'react-native';
import { moderateScale } from 'react-native-size-matters';

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
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const renderIcon = () => {
          if (options.tabBarIcon) {
            return options.tabBarIcon({
              color: isFocused ? colors.themeColor : colors.inActive,
              size: 20,
            });
          }
          return null;
        };

        return (
          <TouchableOpacity
            activeOpacity={1}
            key={route.key}
            onPress={onPress}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            style={styles.tab}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 10,
                // borderBottomWidth: isFocused ? 2 : 0,
              }}>
              {renderIcon()}
              {/* <Text style={{color: isFocused ? colors.themeColor : colors.inActive}}>{label}</Text> */}
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: moderateScale(60),
    elevation: Platform.OS === 'android' ? 5 : 0,
    shadowColor: Platform.OS === 'ios' ? 'black' : undefined,
    shadowOffset: Platform.OS === 'ios' ? {width: 0, height: 2} : undefined,
    shadowOpacity: Platform.OS === 'ios' ? 0.3 : undefined,
    shadowRadius: Platform.OS === 'ios' ? 4 : undefined,
  },
  tab: {
    paddingHorizontal: 20,
  },
});

export default ScrollBottomTabComponent;
