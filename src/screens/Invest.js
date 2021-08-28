// 모의투자 현황 확인 페이지

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
// import data from '../data.json'

export default function Invest({ navigation }) {
  console.disableYellowBox = true

  // let tip = data.tip;

  return (
    <View style={styles.Container}>
      <View style={styles.SubContainer}>
        <View style={styles.Inner1}>
          <Text style={styles.Innertitle}>총 보유자산</Text>
          <Text style={styles.Innertitle}>10,900,000원 (+9%)</Text>
        </View>
        <View style={styles.Inner2}>
          <Text style={styles.Innertitle}>투자 ETF 보유 비율</Text>
        </View>
        <View style={styles.Inner3}>
          <Text style={styles.Innertitle}>ETF 보유자산</Text>
          <ScrollView style={styles.etf}>
            <TouchableOpacity style={styles.etfButton}>
              <Text style={styles.etfText}>ETF1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.etfButton}>
              <Text style={styles.etfText}>ETF2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.etfButton}>
              <Text style={styles.etfText}>ETF3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.etfButton}>
              <Text style={styles.etfText}>ETF4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.etfButton}>
              <Text style={styles.etfText}>ETF5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.etfButton}>
              <Text style={styles.etfText}>ETF6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.etfButton}>
              <Text style={styles.etfText}>ETF7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.etfButton}>
              <Text style={styles.etfText}>ETF8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.etfButton}>
              <Text style={styles.etfText}>ETF9</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.Inner4}>
          <View style={styles.Left}>
            <Text style={styles.Innertitle}>배당금 예정일</Text>
            <Text style={styles.Innertitle}>OOOO년 OO월 OO일</Text>
          </View>
          <View style={styles.Right}>
            <Text style={styles.Innertitle}>수수료</Text>
            <Text style={styles.Innertitle}>0.9%</Text>
          </View>
        </View>
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
          onPress={function () {
            Alert.alert('해당화면 입니다!')
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
  Container: {
    flex: 1,
  },

  SubContainer: {
    flex: 11
  },

  Inner1: {
    flex: 1,
    borderWidth: 1,
  },
  Inner2: {
    flex: 2.5,
    borderWidth: 1,
  },
  Inner3: {
    flex: 2.5,
    borderWidth: 1,
  },
  Inner4: {
    flex: 1,
    flexDirection: 'row', // 가로 설정
  },
  Left: {
    flex: 1,
    borderWidth: 1,
  },
  Right: {
    flex: 1,
    borderWidth: 1,
  },
  Innertitle: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
  },

  etf: {
    padding: 10,
  },
  etfButton: {
    flex: 1,
    padding: 10,
  },
  etfText: {
    fontSize: 12,
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
    textAlign: 'center', // text 가운데 위치
  },
})
