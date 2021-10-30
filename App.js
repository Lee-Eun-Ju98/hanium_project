import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import firebase from 'firebase/app'
import 'firebase/auth'
import { theme } from './src/core/theme'
import {
  AuthLoadingScreen,
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  ETFinfo,
  Dashboard,
  Invest,
  Simulation,
  Myprofile,
  SurveyScreen,
  KorDetailPage,
  externalETFinfo,
  SurveyCompletedScreen,
  BuyETF,
  SellETF,
  Dashboardno,
  inputNumber,
  Loading,
} from './src/screens'
import { FIREBASE_CONFIG } from './src/core/config'
import { LogBox } from 'react-native'

const Stack = createStackNavigator()
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG)
}

export default function App() {
  LogBox.ignoreLogs(['Setting a timer', 'Require cycle'])
  console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed']
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Loading"
          screenOptions={{
            headerShown: false,
          }}
          screenOptions={{
            headerStyle: {
            backgroundColor: 'white',
            borderBottomColor: 'white',
            shadowColor: 'white',
            height: 100,
            },
            headerTintColor: '#000',
            headerBackTitleVisible: false,
           }}
        >
          <Stack.Screen
            name="AuthLoadingScreen"
            component={AuthLoadingScreen}
          />
          <Stack.Screen name="SurveyScreen" component={SurveyScreen} />
          <Stack.Screen name="Myprofile" component={Myprofile} />
          <Stack.Screen name="ETFinfo" component={ETFinfo} />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Dashboardno" component={Dashboardno} />
          <Stack.Screen name="Invest" component={Invest} />
          <Stack.Screen name="Simulation" component={Simulation} />
          <Stack.Screen name="BuyETF" component={BuyETF} />
          <Stack.Screen name="SellETF" component={SellETF} />
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="inputNumber" component={inputNumber} />
          <Stack.Screen name="KorDetailPage" component={KorDetailPage} />
          <Stack.Screen name="externalETFinfo" component={externalETFinfo} />
          <Stack.Screen
            name="SurveyCompletedScreen"
            component={SurveyCompletedScreen}
          />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
