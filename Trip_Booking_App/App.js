/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Fragment} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Home from './screens/Home'
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import OnboardingView from './screens/Onboarding/view';
import Onboarding from './screens/Onboarding';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import COLORS, { SIZES } from './constants/theme'
import icons from './constants/icons'
import TabBottomNavigtor from './routers/TabBottomNavigtor';
import { useNavigation } from '@react-navigation/native';
import DestinationDetail from './screens/DestinationDetail';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  const navigation = useNavigation()
  return (
      <Stack.Navigator
        initialRouteName="Onboarding" 
        screenoptions={{
          
        }}
      >
        <Stack.Screen 
            name="Onboarding" 
            component={Onboarding} 
            options={{
              headerShadowVisible: false,
              title: null,
              headerStyle:{
                backgroundColor: COLORS.COLORS.white
              },
              headerLeft:null,
              headerRight: () => (
                <TouchableOpacity
                  style={{padding:SIZES.padding/2}}
                >
                  <Image
                    style={{
                      width:23,
                      height:23
                    }}
                    source={icons.barMenu}
                  />
                </TouchableOpacity>
              )
            }}
        />
        <Stack.Screen 
            name="Home" 
            component={TabBottomNavigtor} 
            options={{
              // headerShown:false,
              headerShadowVisible: false,
              title: null,
              headerStyle:{
                backgroundColor: COLORS.COLORS.white
              },
              headerLeft:() => (
                <TouchableOpacity
                  style={{paddingHorizontal:SIZES.padding/3}}
                  onPress={navigation.goBack}
                >
                  <Image
                    style={{
                      width:23,
                      height:23
                    }}
                    source={icons.back}
                  />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity
                  style={{paddingHorizontal:SIZES.padding/3}}
                >
                  <Image
                    style={{
                      width:23,
                      height:23
                    }}
                    source={icons.menu}
                  />
                </TouchableOpacity>
              )
            }}
        />
        <Stack.Screen 
            name="DestinationDetail" 
            component={DestinationDetail} 
            options={{
              headerShown:false,
              headerShadowVisible: false,
              title: null,
              headerStyle:{
                backgroundColor: COLORS.COLORS.white,
                
              },
              
            }}
        />
      </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  img:{
   
  }
});

export default function App() {
  return (
    <Fragment>
      <NavigationContainer independent={true}>
        <MyStack />
      </NavigationContainer>
    </Fragment>
  );
}
