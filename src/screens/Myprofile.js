// 내정보 페이지

import StatusBar from 'expo-status-bar'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { loginUser, logoutUser } from '../api/auth-api'
import firebase from 'firebase/app'

const user = firebase.auth().currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}

export default function Myprofile({ navigation, route, component }) {

  const isLoggined = async () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        alert(uid)
        navigation.navigate('SurveyScreen')
      } else {
        // User is not logged in
        alert("로그인 후 이용하세요!") 
      }
    })
  }
    
  return (
    <View style={styles.MainContainer}>
      <View style={styles.FirstContainer}>
        <Text style={styles.Title}>개인정보관리</Text>
        <TouchableOpacity style={styles.SubButton}>
          <Text style={styles.SubText}>내 정보</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SubButton}>
          <Text style={styles.SubText}>비밀번호 변경</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.SecondContainer}>
        <Text style={styles.Title}>투자성향관리</Text>
        <TouchableOpacity
          style={styles.SubButton}
          onPress={isLoggined}
        >
          <Text style={styles.SubText}>투자성향 설문조사</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ThirdContainer}>
        <Text style={styles.Title}>앱 설정</Text>
        <TouchableOpacity
          style={styles.SubButton}
          onPress={() => {
            navigation.navigate('StartScreen')
          }}
        >
          <Text style={styles.SubText}>로그인/로그아웃</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SubButton}>
          <Text style={styles.SubText}>회원 탈퇴</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SubButton}>
          <Text style={styles.SubText}>알림 설정</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.MenuContainer}>
        <TouchableOpacity
          style={styles.MenuButton}
          onPress={() => {
            navigation.navigate('Dashboard')
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
          onPress={function () {
            Alert.alert('해당화면 입니다!')
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
  },
  FirstContainer: {
    flex: 3,
    paddingTop:25
  },
  SecondContainer: {
    flex: 3,
    paddingTop:40
  },
  ThirdContainer: {
    flex: 5
  },
  Title: {
    fontSize: 15,
    fontWeight: '700',
    padding: 15,
    color:'gray'
  },
  SubButton: {
    padding:5,
    borderWidth:1,
    borderColor:'gray',
    backgroundColor:'white'
  },
  SubText: {
    fontSize: 17,
    padding: 10,
    color:'black'
  },

  MenuContainer: {
    flex: 1.15,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    borderWidth:1
  },
  MenuButton: {
    flex: 1,
    padding: 20
  },
  ButtonText: {
    fontSize: 10,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
})
