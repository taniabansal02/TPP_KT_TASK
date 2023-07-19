import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Task1 from '../screen/task1';
import DetailPage from '../screen/detailPage';
import {styles} from './style';
import {colors} from '../assets/theme/color';
import Screen1 from '../screen/screen1';
import Screen2 from '../screen/screen2';
import {Icons} from '../assets/is';
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from '../components/responsiveSize';
import Home from '../screen/Home';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const Navigation = () => {
 

  const DrawerNavigation = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} options={{headerShown: false}} />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {/* <Drawer.Navigator>
        <Drawer.Screen name="BottomNavigation" component={BottomNavigation} />
        <Drawer.Screen name="Screen2" component={Screen2} />
      </Drawer.Navigator> */}

      <Stack.Navigator>
        <Stack.Screen
          component={DrawerNavigation}
          name="DrawerNavigation"
          options={{headerShown: false}}
        />
        <Stack.Screen component={Screen2} name="Screen2" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
