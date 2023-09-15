import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import colors from '../assets/theme/colors';
import {
  CAMERA,
  CURTAIN,
  DMX,
  FAN,
  HVAC,
  IRRIGATION,
  MEDIA,
  OTHERCONTROL,
  RGBW,
  ZAUDIO,
} from '../constants/routeNames';
import {
  Camera,
  Curtain,
  Dmx,
  Fan,
  Hvac,
  Irrigation,
  Media,
  OtherControl,
  Rgbw,
  ZAudio,
} from '../screens';
import Icon from '../component/common/Icon';

const BototmTab = createBottomTabNavigator();

export default function SecondBottomTabNavigator() {
  return (
    <BototmTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: colors.inActive,
        tabBarActiveTintColor: colors.themeColor,
        tabBarStyle: {height: 65},
        tabBarShowLabel: false,
      }}>
      <BototmTab.Screen
        name={RGBW}
        component={Rgbw}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                style={{
                  color: focused ? colors.themeColor : colors.inActive,
                }}
                type={'materialCommunity'}
                name={'lightbulb'}
                size={20}
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
                size={20}
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
                size={20}
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
                size={20}
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
                size={20}
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
                size={20}
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
                size={20}
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
                size={20}
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
                size={20}
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
                size={20}
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
