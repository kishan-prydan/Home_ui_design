import * as React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import colors from '../assets/theme/colors';
import {
  scale,
  moderateScale,
} from 'react-native-size-matters';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: scale(32), fontWeight: 'bold', color: '#000000'}}>
        Home Welcome
      </Text>
    </View>
  );
}

function FirstScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: scale(32), fontWeight: 'bold', color: '#000000'}}>
        Tab1 Welcome
      </Text>
    </View>
  );
}

function SecondScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: scale(32), fontWeight: 'bold', color: '#000000'}}>
        Tab2 Welcome
      </Text>
    </View>
  );
}

function ThirdScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: scale(32), fontWeight: 'bold', color: '#000000'}}>
        Tab3 Welcome
      </Text>
    </View>
  );
}

function ForthScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: scale(32), fontWeight: 'bold', color: '#000000'}}>
        Tab4 Welcome
      </Text>
    </View>
  );
}

function FifthScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: scale(32), fontWeight: 'bold', color: '#000000'}}>
        Tab5 Welcome
      </Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function AppDrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          width: moderateScale(200),
        },
        headerTintColor: colors.header,
        headerStyle: {
          height: moderateScale(80),
        },

        headerTitleStyle: {
          color: colors.header,
        },
        drawerActiveBackgroundColor: colors.secondary,
        drawerActiveTintColor: 'white',
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Tab1" component={FirstScreen} />
      <Drawer.Screen name="Tab2" component={SecondScreen} />
      <Drawer.Screen name="Tab3" component={ThirdScreen} />
      <Drawer.Screen name="Tab4" component={ForthScreen} />
      <Drawer.Screen name="Tab5" component={FifthScreen} />
    </Drawer.Navigator>
  );
}
