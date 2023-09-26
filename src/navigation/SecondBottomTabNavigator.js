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
  MOODSCREEN,
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
  MoodScreen,
  OtherControl,
  Rgbw,
  ZAudio,
} from '../screens';
import Icon from '../component/common/Icon';
import ScrollBottomTabComponent from './ScrollBottomTabComponent';

const BototmTab = createBottomTabNavigator();

export default function SecondBottomTabNavigator() {
  return (
    <BototmTab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <ScrollBottomTabComponent {...props} />}>
      <BototmTab.Screen
        name={RGBW}
        component={Rgbw}
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <Icon
                style={{
                  color: color,
                }}
                type={'fa5'}
                name={'lightbulb'}
                size={size}
              />
            );
          },
        }}
      />
      <BototmTab.Screen
        name={DMX}
        component={Dmx}
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <Icon
                style={{
                  color: color,
                }}
                type={'entypo'}
                name={'sound-mix'}
                size={size}
              />
            );
          },
        }}
      />
      <BototmTab.Screen
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <Icon
                style={{
                  color: color,
                }}
                type={'fa6'}
                name={'snowflake'}
                size={size}
              />
            );
          },
        }}
        name={HVAC}
        component={Hvac}
      />
      <BototmTab.Screen
        name={MOODSCREEN}
        component={MoodScreen}
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <Icon
                style={{
                  color: color,
                }}
                type={'fa'}
                name={'heart'}
                size={size}
              />
            );
          },
        }}
      />
      <BototmTab.Screen
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <Icon
                style={{
                  color: color,
                }}
                type={'fa6'}
                name={'music'}
                size={size}
              />
            );
          },
        }}
        name={ZAUDIO}
        component={ZAudio}
      />
      <BototmTab.Screen
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <Icon
                style={{
                  color: color,
                }}
                type={'materialCommunity'}
                name={'curtains'}
                size={size}
              />
            );
          },
        }}
        name={CURTAIN}
        component={Curtain}
      />
      <BototmTab.Screen
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <Icon
                style={{
                  color: color,
                }}
                type={'fa6'}
                name={'fan'}
                size={size}
              />
            );
          },
        }}
        name={FAN}
        component={Fan}
      />
      <BototmTab.Screen
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <Icon
                style={{
                  color: color,
                }}
                type={'materialCommunity'}
                name={'controller-classic'}
                size={size}
              />
            );
          },
        }}
        name={OTHERCONTROL}
        component={OtherControl}
      />
      <BototmTab.Screen
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <Icon
                style={{
                  color: color,
                }}
                type={'fa'}
                name={'leaf'}
                size={size}
              />
            );
          },
        }}
        name={IRRIGATION}
        component={Irrigation}
      />
      <BototmTab.Screen
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <Icon
                style={{
                  color: color,
                }}
                type={'fa6'}
                name={'photo-film'}
                size={size}
              />
            );
          },
        }}
        name={MEDIA}
        component={Media}
      />
      <BototmTab.Screen
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <Icon
                style={{
                  color: color,
                }}
                type={'fa6'}
                name={'video'}
                size={size}
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
