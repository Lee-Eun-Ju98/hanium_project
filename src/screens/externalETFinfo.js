// 모든 ETF 확인 페이지

import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native'
import external from './etfData.json'
import Korinfo from '../components/KorInfo'
import { Searchbar } from 'react-native-paper'
import { TextInput } from 'react-native-gesture-handler'
import contactinfo from '../components/contactinfo'

export default function externalETFinfo({ navigation }) {
  let externalinfo = external.externaletf

  return (
    <View style={styles.MainContainer}>
      <View style={styles.FirstContainer}>
        <View style={styles.SubMenu}>
          <TouchableOpacity
            style={styles.InnerSub}
            onPress={() => {
              navigation.navigate('ETFinfo')
            }}
          >
            <Text>국내ETF</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.InnerSub}
            onPress={() => {
              Alert.alert('현재 해외ETF 화면입니다.')
            }}
          >
            <Text>해외ETF</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.SecondContainer}>
        <TextInput
          type="text"
          placeholder="검색어를 입력해주세요"
          className="prompt"
        />
        <View style={styles.ButtonInner2}></View>
      </View>

      <View style={styles.ThirdContainer}>
        <ScrollView>
          {externalinfo.map((content, i) => {
            return <Korinfo content={content} key={i} />
          })}
        </ScrollView>
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
          onPress={function () {
            Alert.alert('해당화면 입니다!')
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
  },
  FirstContainer: {
    flex: 1,
    borderWidth: 1,
  },
  SubMenu: {
    flexDirection: 'row',
  },
  InnerSub: {
    flex: 1,
    padding: 25,
    borderWidth: 1,
    alignItems: 'center',
  },

  SecondContainer: {
    flex: 1,
    borderWidth: 1,
    flexDirection: 'row',
  },
  ButtonInner1: {
    flex: 1,
    borderWidth: 1,
  },
  ButtonInner2: {
    flex: 2,
  },
  ButtonStyle: {
    fontSize: 15,
  },

  ThirdContainer: {
    flex: 7,
    borderWidth: 1,
  },
  Title: {
    fontSize: 20,
    padding: 15,
  },

  MenuContainer: {
    flex: 0.85,
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
