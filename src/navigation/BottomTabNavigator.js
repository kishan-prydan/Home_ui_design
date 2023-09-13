import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Image} from 'react-native';
import colors from '../assets/theme/colors';
import imagePath from '../constants/imagePath';
import {
  CAMERA,
  CURTAIN,
  DMX,
  FAN,
  HVAC,
  IRRIGATION,
  LIGHT,
  MEDIA,
  OTHERCONTROL,
  ZAUDIO,
} from '../constants/routeNames';
import {
  Camera,
  Curtain,
  Dmx,
  Fan,
  Hvac,
  Irrigation,
  Light,
  Media,
  OtherControl,
  ZAudio,
} from '../screens';
import Icon from '../component/common/Icon';

const BototmTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BototmTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: colors.inActive,
        tabBarActiveTintColor: colors.themeColor,
        tabBarStyle: {height: 60},
        tabBarShowLabel: false,
        tabBarOptions: {
          scrollEnabled: true,
          style: {
            backgroundColor: 'purple',
          },
          labelStyle: {
            fontSize: 12,
          },
          tabStyle: {
            width: 60,
          },
          indicatorStyle: {
            backgroundColor: 'teal',
          },
        },
      }}>
      <BototmTab.Screen
        name={LIGHT}
        component={Light}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                style={{
                  color: focused ? colors.themeColor : colors.inActive,
                }}
                type={'fa5'}
                name={'lightbulb'}
                size={25}
              />
            );
          },
        }}
      />
      <BototmTab.Screen
        name={DMX}
        component={Dmx}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                style={{
                  color: focused ? colors.themeColor : colors.inActive,
                }}
                type={'entypo'}
                name={'sound-mix'}
                size={25}
              />
            );
          },
        }}
      />
      <BototmTab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                style={{
                  color: focused ? colors.themeColor : colors.inActive,
                }}
                type={'fa6'}
                name={'snowflake'}
                size={25}
              />
            );
          },
        }}
        name={HVAC}
        component={Hvac}
      />
      <BototmTab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                style={{
                  color: focused ? colors.themeColor : colors.inActive,
                }}
                type={'fa6'}
                name={'music'}
                size={25}
              />
            );
          },
        }}
        name={ZAUDIO}
        component={ZAudio}
      />
      <BototmTab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                style={{
                  color: focused ? colors.themeColor : colors.inActive,
                }}
                type={'materialCommunity'}
                name={'curtains'}
                size={25}
              />
            );
          },
        }}
        name={CURTAIN}
        component={Curtain}
      />
      <BototmTab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                style={{
                  color: focused ? colors.themeColor : colors.inActive,
                }}
                type={'fa6'}
                name={'fan'}
                size={25}
              />
            );
          },
        }}
        name={FAN}
        component={Fan}
      />
      <BototmTab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                style={{
                  color: focused ? colors.themeColor : colors.inActive,
                }}
                type={'materialCommunity'}
                name={'controller-classic'}
                size={25}
              />
            );
          },
        }}
        name={OTHERCONTROL}
        component={OtherControl}
      />
      <BototmTab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                style={{
                  color: focused ? colors.themeColor : colors.inActive,
                }}
                type={'fa'}
                name={'leaf'}
                size={25}
              />
            );
          },
        }}
        name={IRRIGATION}
        component={Irrigation}
      />
      <BototmTab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                style={{
                  color: focused ? colors.themeColor : colors.inActive,
                }}
                type={'fa6'}
                name={'photo-film'}
                size={25}
              />
            );
          },
        }}
        name={MEDIA}
        component={Media}
      />
      <BototmTab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                style={{
                  color: focused ? colors.themeColor : colors.inActive,
                }}
                type={'fa6'}
                name={'video'}
                size={25}
              />
            );
          },
        }}
        name={CAMERA}
        component={Camera}
      />
    </BototmTab.Navigator>
  );
}
