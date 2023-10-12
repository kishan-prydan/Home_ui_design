import React from 'react';
import {
  HOME,
  ADDHOME,
  HOMEVIEW,
  SWEETHOME,
  APPDRAWERNAVIGATION,
  BOTTOMTABNAVIGATOR,
  SECONDBOTTOMTABNAVIGATOR,
  LIGHTSETTING,
  RGBWCOMPONENT,
  HVAC,
  FAHRENHEITSCREEN,
  CELSIUSSCREEN,
  ACSETTING,
  ZAUDIO,
  MUSICSETTING,
  CURTAIN,
  TESTCURTAIN,
  MODSETTING,
  MOODSCREEN,
  FANSETTING,
  OTHERCONTROL,
  FAN,
  IRRIGATIONSETTING,
  MEDIA,
  MEDIASETTING,
  WATCHTVSCREEN,
  MEDIAOTHERSETTING,
  WATCHDVD,
  WATCHAPPLETV,
  WATCHROKU,
  WATCHSATELLITE,
  IRRIGATION,
  CAMERA,
  SCENCECONTROLSETTINGS,
  CAMERASETTING,
} from '../constants/routeNames';
import {
  AcSettings,
  AddHome,
  Camera,
  CameraSettings,
  Curtain,
  FahrenheitScreen,
  Fan,
  FanSetting,
  Home,
  HomeView,
  Hvac,
  Irrigation,
  IrrigationSetting,
  LightSetting,
  Media,
  MediaOtherSettings,
  MediaSetting,
  MoodScreen,
  MoodSetting,
  MusicSetting,
  OtherControl,
  RgbwComponent,
  ScenceControlSettings,
  SweetHome,
  TestCurtain,
  WatchAppleTV,
  WatchDVD,
  WatchRoku,
  WatchSatellite,
  WatchTVScreen,
  ZAudio,
} from '../screens';
import AppDrawerNavigation from './AppDrawerNavigation';
import BottomTabNavigator from './BottomTabNavigator';
import SecondBottomTabNavigator from './SecondBottomTabNavigator';
import CelsiusScreen from '../screens/CelsiusScreen';

export default function HomeStack(Stack) {
  return (
    <>
      <Stack.Screen
        name={HOME}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={HOMEVIEW}
        component={HomeView}
        options={{headerShown: false}}
      />
      <Stack.Screen name={ADDHOME} component={AddHome} />
      <Stack.Screen
        name={SWEETHOME}
        component={SweetHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={APPDRAWERNAVIGATION}
        component={AppDrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={BOTTOMTABNAVIGATOR}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SECONDBOTTOMTABNAVIGATOR}
        component={SecondBottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={LIGHTSETTING}
        component={LightSetting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RGBWCOMPONENT}
        component={RgbwComponent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={HVAC}
        component={Hvac}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={FAHRENHEITSCREEN}
        component={FahrenheitScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={CELSIUSSCREEN}
        component={CelsiusScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ACSETTING}
        component={AcSettings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ZAUDIO}
        component={ZAudio}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={MUSICSETTING}
        component={MusicSetting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={CURTAIN}
        component={Curtain}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={TESTCURTAIN}
        component={TestCurtain}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={MOODSCREEN}
        component={MoodScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={MODSETTING}
        component={MoodSetting}
        options={{headerShown: false}}
      />
      <Stack.Screen name={FAN} component={Fan} options={{headerShown: false}} />
      <Stack.Screen
        name={FANSETTING}
        component={FanSetting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={OTHERCONTROL}
        component={OtherControl}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={IRRIGATIONSETTING}
        component={IrrigationSetting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={MEDIA}
        component={Media}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={MEDIASETTING}
        component={MediaSetting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={MEDIAOTHERSETTING}
        component={MediaOtherSettings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={WATCHTVSCREEN}
        component={WatchTVScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={WATCHDVD}
        component={WatchDVD}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={WATCHAPPLETV}
        component={WatchAppleTV}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={WATCHROKU}
        component={WatchRoku}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={WATCHSATELLITE}
        component={WatchSatellite}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={IRRIGATION}
        component={Irrigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={CAMERA}
        component={Camera}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={CAMERASETTING}
        component={CameraSettings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCENCECONTROLSETTINGS}
        component={ScenceControlSettings}
        options={{headerShown: false}}
      />
    </>
  );
}
