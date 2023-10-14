import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Icon from '../component/common/Icon';
import ScrollBottomTabComponent from './ScrollBottomTabComponent';
import routeNames from './../constants/routeNames';
import screens from './../screens/index';

const BototmTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BototmTab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <ScrollBottomTabComponent {...props} />}>
      <BototmTab.Screen
        name={routeNames.LIGHT}
        component={screens.Light}
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
        name={routeNames.DMX}
        component={screens.Dmx}
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
        name={routeNames.HVAC}
        component={screens.Hvac}
      />
      <BototmTab.Screen
        name={routeNames.MOODSCREEN}
        component={screens.MoodScreen}
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
        name={routeNames.ZAUDIO}
        component={screens.ZAudio}
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
        name={routeNames.CURTAIN}
        component={screens.Curtain}
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
        name={routeNames.FAN}
        component={screens.Fan}
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
        name={routeNames.IRRIGATION}
        component={screens.Irrigation}
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
        name={routeNames.MEDIA}
        component={screens.Media}
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
        name={routeNames.CAMERA}
        component={screens.Camera}
      />
    </BototmTab.Navigator>
  );
}
