import React from 'react'
import firebase from 'firebase/app'
import { StatusBar } from 'expo-status-bar';


import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native'

  

export default function Dashboard({ navigation }) {

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      var displayName = displayName;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  return (
    <View style={styles.MainContainer }>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" translucent = {true} />
      <View style={styles.FirstContainer}>
        <Text style={styles.FirstTitle}>사용자님의 모의투자 금액은 19,402,000 원 입니다.</Text>
      </View>

      <View style={styles.SecondContainer}>
        <Text style={styles.Title}>대표지수</Text>
      </View>
      <View style={styles.ThirdContainer}>
        <Text style={styles.Title}>지금 나오는 최신 뉴스는?</Text>
        <ScrollView>
          <TouchableOpacity style={styles.News}>
            <Text style={styles.NewsText}>뉴스1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.News}>
            <Text style={styles.NewsText}>뉴스2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.News}>
            <Text style={styles.NewsText}>뉴스3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.News}>
            <Text style={styles.NewsText}>뉴스4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.News}>
            <Text style={styles.NewsText}>뉴스5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.News}>
            <Text style={styles.NewsText}>뉴스6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.News}>
            <Text style={styles.NewsText}>뉴스7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.News}>
            <Text style={styles.NewsText}>뉴스8</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.MenuContainer}>
        <TouchableOpacity
          style={styles.MenuButton}
          onPress={function () {
            Alert.alert('해당화면 입니다!')
          }}
        >
          <Text style={styles.ButtonText}>홈</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.MenuButton}
          onPress={() => {
            navigation.navigate('ETFinfo')
          }}
        >
          <Text style={styles.ButtonText}>ETF</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.MenuButton}
          onPress={() => {
            navigation.navigate('Simulation')
          }}
        >
          <Text style={styles.ButtonText}>모의투자</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.MenuButton}
          onPress={() => {
            navigation.navigate('Invest')
          }}
        >
          <Text style={styles.ButtonText}>투자현황</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.MenuButton}
          onPress={() => {
            navigation.navigate('Myprofile')
          }}
        >
          <Text style={styles.ButtonText}>내정보</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor:'white'
  },
  FirstContainer: {
    flex: 3.5
  },
  SecondContainer: {
    flex: 3.5,
    borderWidth: 1,
    borderColor:'gray'
  },
  ThirdContainer: {
    flex: 4
  },

  FirstTitle: {
    fontSize: 20,
    padding: 15,
    fontWeight: '700',
  },
  Title: {
    fontSize: 15,
    fontWeight: '700',
    padding: 15,
    color:'gray'
  },

  News: {
    padding: 10,
  },
  NewsText: {
    fontSize: 15,
  },

  MenuContainer: {
    flex: 1,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
  },
  MenuButton: {
    flex: 1,
    padding: 20,
  },
  ButtonText: {
    fontSize: 10,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
})
