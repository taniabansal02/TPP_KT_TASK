import React from "react";
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Task1 from "../task1";
import Screen1 from "../screen1";
import { moderateScale, moderateScaleVertical } from "../../components/responsiveSize";
import { colors } from "../../assets/theme/color"; 
import DetailPage from "../detailPage";
import { Icons } from "../../assets/images";
import { styles } from "../../navigation/style";

const BottomTabs = createBottomTabNavigator();

 const Home = () => {
    return (
      <BottomTabs.Navigator initialRouteName="Task1">
      <BottomTabs.Screen
        component={Task1}
        name="Task1"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.iconView}>
                <Icons.convo
                  height={moderateScaleVertical(24)}
                  width={moderateScale(24)}
                  color={'#E6427A'}
                />
                <Text style={styles.tabBarActiveLabel}>Task1</Text>
              </View>
            ) : (
              <View style={styles.iconView}>
                <Icons.convo
                  height={moderateScaleVertical(24)}
                  width={moderateScale(24)}
                  color={'#707070'}
                />
                <Text style={styles.tabBarInactiveLabel}>Task1</Text>
              </View>
            ),
          tabBarStyle: {
            backgroundColor: colors.white,
            position: 'absolute',
            height: moderateScaleVertical(88),
            shadowColor: '#00000033',
            shadowOffset: {width: 20, height: 50},
            elevation: 5,
          },
        }}
      />

      <BottomTabs.Screen
        component={Screen1}
        name="Screen1"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.iconView}>
                <Icons.shop
                  height={moderateScaleVertical(24)}
                  width={moderateScale(24)}
                  color={'#E6427A'}
                />
                <Text style={styles.tabBarActiveLabel}>Task2</Text>
              </View>
            ) : (
              <View style={styles.iconView}>
                <Icons.shop
                  height={moderateScaleVertical(24)}
                  width={moderateScale(24)}
                  color={'#707070'}
                />
                <Text style={styles.tabBarInactiveLabel}>Task2</Text>
              </View>
            ),
          tabBarStyle: {
            backgroundColor: colors.white,
            position: 'absolute',
            height: moderateScaleVertical(88),
            shadowColor: '#00000033',
            shadowOffset: {width: 20, height: 50},
            elevation: 5,
          },
        }}
      />

      <BottomTabs.Screen
        component={DetailPage}
        name="DetailPage"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.iconView}>
                <Icons.directory
                  height={moderateScaleVertical(24)}
                  width={moderateScale(24)}
                  color={'#E6427A'}
                />
                <Text style={styles.tabBarActiveLabel}>Task3</Text>
              </View>
            ) : (
              <View style={styles.iconView}>
                <Icons.directory
                  height={moderateScaleVertical(24)}
                  width={moderateScale(24)}
                  color={'#707070'}
                />
                <Text style={styles.tabBarInactiveLabel}>Task3</Text>
              </View>
            ),
          tabBarStyle: {
            backgroundColor: colors.white,
            position: 'absolute',
            height: moderateScaleVertical(88),
            shadowColor: '#00000033',
            shadowOffset: {width: 20, height: 50},
            elevation: 5,
          },
        }}
      />
    </BottomTabs.Navigator>
    );
  };

  export default Home;