import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import images from '../constants/images';
import { Image,StyleSheet } from 'react-native';
import icons from '../constants/icons';
import React from 'react';
import { COLORS } from '../constants/theme';

const Tab = createBottomTabNavigator();

const TabBottomNavigtor = ({route}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarShowLabel:false,
        tabBarInActiveTintColor:'#000',
        tabBarStyle: {
            borderTopWidth: 0.5,
            borderTopColor: "#ddd",
            paddingHorizontal: 5,
            backgroundColor: COLORS.white,
            // shadowColor: "#000",
            // shadowOffset: {
            //     height: 3,
            // },
            // shadowOpacity: 0.25,
            // shadowRadius: 3.84,
            // elevation: 5,
            // shadowRadius:3
        },
      }}
      
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
            headerShown:false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size,focused }) => (
            <Image
                source={icons.home}
                style={[styles.img,{tintColor:focused?COLORS.primary:COLORS.secondary}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
            headerShown:false,
            tabBarIcon: ({ color, size,focused }) => (
                <Image
                    source={icons.search}
                    style={[styles.img,{tintColor:focused?COLORS.primary:COLORS.secondary}]}
                />
          ),
        }}
      />
      <Tab.Screen
        name="BookMark"
        component={Home}
        options={{
            headerShown:false,
            tabBarIcon: ({ color, size,focused }) => (
            <Image
                source={icons.bookmark}
                style={[styles.img,{tintColor:focused?COLORS.primary:COLORS.secondary}]}
            />
            ),
            }}
      />
      <Tab.Screen
        name="User"
        component={Home}
        options={{
            headerShown:false,
            tabBarIcon: ({ color, size,focused }) => (
                <Image
                    source={icons.user}
                    style={[styles.img,{tintColor:focused?COLORS.primary:COLORS.secondary}]}
                />
            ),
            }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    img:{
        width:25,
        height:25,
        tintColor:'pink',
        marginTop:20
    }
})

export default TabBottomNavigtor;
