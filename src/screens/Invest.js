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
          <Text style={styles.Innertitle2}>10,900,000원 (+9%)</Text>
        </View>
        <View style={styles.Inner2}>
          <Text style={styles.Innertitle}>투자 ETF 보유 비율</Text>
        </View>
        <View style={styles.Inner3}>
          <Text style={styles.Innertitle}>ETF 보유자산</Text>
          <ScrollView style={styles.etf}>
            <TouchableOpacity style={styles.etfButton}>
                <View style={styles.info}><Text style={styles.etfname}>TIGER 200 IT</Text>
                <Text style={styles.percent}>17.11%</Text></View></TouchableOpacity>
            <TouchableOpacity style={styles.etfButton}>
                <View style={styles.info}><Text style={styles.etfname}>KODEX 반도체</Text>
                <Text style={styles.percent}>10.35%</Text></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.etfButton}>
                <View style={styles.info}><Text style={styles.etfname}>SPY SPDR S&P 500 ETF</Text>
                <Text style={styles.percent}>13.05%</Text></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.etfButton}>
                <View style={styles.info}><Text style={styles.etfname}>Invesco QQQ Trust</Text>
                <Text style={styles.percent}>5.47%</Text></View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.Inner4}>
          <View style={styles.Left}>
            <Text style={styles.Innertitle}>배당금 예정일</Text>
            <Text style={styles.Innertitle2}>2021년 12월 13일</Text>
          </View>
          <View style={styles.Right}>
            <Text style={styles.Innertitle}>수수료</Text>
            <Text style={styles.Innertitle2}>0.9%</Text>
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
    backgroundColor:'white'
  },

  SubContainer: {
    flex: 11
  },

  Inner1: {
    flex: 1
  },
  Inner2: {
    flex: 2.5,
    borderWidth: 1,
  },
  Inner3: {
    flex: 2.5
  },
  Inner4: {
    flex: 1,
    flexDirection: 'row', // 가로 설정
    borderWidth: 1,
  },
  Left: {
    flex: 1
  },
  Right: {
    flex: 1
  },
  Innertitle: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 10,
    fontWeight:'700',
    color:'gray'
  },
  Innertitle2: {
    fontSize: 18,
    textAlign:'center',
    padding:10,
    color:'black'
  },

  etf: {
    padding: 10,
  },
  etfButton: {
    flex: 1,
    padding: 5,
  },
  etfText: {
    fontSize: 12,
  },

  info:{
    flexDirection:'row'
  },
  etfname:{
    fontSize:19,
    flex:5,
    padding:5
  },
  percent:{
    fontSize:19,
    flex:2,
    color:'red',
    padding:5,
    paddingLeft:40
  },

  MenuContainer: {
    flex: 1,
    backgroundColor: '#82CBC4',
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
