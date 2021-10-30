import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import firebase from 'firebase/app'
import { theme } from '../core/theme'

export default function Loading({ navigation }) {
  setTimeout(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is logged in
        navigation.reset({
          index: 0,
          routes: [{ name: 'Dashboard' }],
        })
      } else {
        // User is not logged in
        navigation.reset({
          index: 0,
          routes: [{ name: 'Dashboardno' }],
        })
      }
    })
  }, 2000)

  return (
    <Background>
      <Logo />
    </Background>
  )
}
