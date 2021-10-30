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
  Image,
} from 'react-native'
// import data from '../data.json'

import { PieChart } from 'react-native-chart-kit'

export default function Invest({ navigation }) {
  console.disableYellowBox = true

  // let tip = data.tip;

  return (
    <View style={styles.Container}>
      <View style={styles.SubContainer}>
        <View style={styles.Inner1}>
          <Text style={styles.Innertitle}>총 보유자산</Text>
          <Text style={styles.Innertitle2}>1,030,370원 (+0.6%)</Text>
        </View>
        <View style={styles.Inner2}>
          <Text style={styles.Innertitle}>투자 ETF 보유 비율</Text>
          <PieChart
            data={[
              {
                name: 'KODEX 200IT TR',
                population: 21500000,
                color: '#55A29E',
                legendFontColor: '#7F7F7F',
                legendFontSize: 12,
              },
              {
                name: 'KODEX 반도체',
                population: 2800000,
                color: '#3F7687',
                legendFontColor: '#7F7F7F',
                legendFontSize: 12,
              },
              {
                name: 'SPY S&P 500 ETF',
                population: 11920000,
                color: '#285256',
                legendFontColor: '#7F7F7F',
                legendFontSize: 12,
              },
              {
                name: 'Invesco QQQ Trust',
                population: 8538000,
                color: '#133130',
                legendFontColor: '#7F7F7F',
                legendFontSize: 12,
              },
            ]}
            width={350}
            height={200}
            chartConfig={{
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 10,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 10,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="10"
          />
        </View>
        <View style={styles.Inner3}>
          <Text style={styles.Innertitle}>ETF 보유자산</Text>
          <ScrollView style={styles.etf}>
            <TouchableOpacity style={styles.etfButton}>
              <Text style={styles.etfname}>KODEX 200IT TR</Text>
              <View style={styles.info}>
                <Text style={styles.percent}>504,000 </Text>
                <Text style={styles.percent}>0% </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.etfButton}>
              <Text style={styles.etfname}>KODEX 반도체</Text>
              <View style={styles.info}>
                <Text style={styles.percent}>61,860 </Text>
                <Text style={styles.percent}>3.1% </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.etfButton}>
              <Text style={styles.etfname}>SPY SPDR S&P 500 ETF</Text>
              <View style={styles.info}>
                <Text style={styles.percent}>272,970 </Text>
                <Text style={styles.percent}>1.1% </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.etfButton}>
              <Text style={styles.etfname}>Invesco QQQ Trust</Text>
              <View style={styles.info}>
                <Text style={styles.percent}>191,900 </Text>
                <Text style={styles.percent}>0.1% </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>

      <View style={styles.MenuContainer}>
        <TouchableOpacity
          style={styles.MenuButton}
          onPress={() => {
            navigation.navigate('AuthLoadingScreen')
          }}
        >
          <Image source={require('../assets/home.png')} style={styles.image} />
          <Text style={styles.ButtonText}>홈</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.MenuButton}
          onPress={() => {
            navigation.navigate('ETFinfo')
          }}
        >
          <Image
            source={require('../assets/ETFinfo.png')}
            style={styles.image}
          />
          <Text style={styles.ButtonText}>ETF</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.MenuButton}
          onPress={() => {
            navigation.navigate('Simulation')
          }}
        >
          <Image
            source={require('../assets/invest.png')}
            style={styles.image}
          />
          <Text style={styles.ButtonText}>모의투자</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.MenuButton}
          onPress={function () {
            Alert.alert('해당화면 입니다!')
          }}
        >
          <Image
            source={require('../assets/simulation.png')}
            style={styles.thisimage}
          />
          <Text style={styles.thisbutton}>투자현황</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.MenuButton}
          onPress={() => {
            navigation.navigate('Myprofile')
          }}
        >
          <Image
            source={require('../assets/myprofile.png')}
            style={styles.image}
          />
          <Text style={styles.ButtonText}>내정보</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },

  SubContainer: {
    flex: 11,
  },

  Inner1: {
    flex: 1,
  },
  Inner2: {
    flex: 2.5,
    borderWidth: 1,
  },
  Inner3: {
    flex: 2.5,
  },
  Inner4: {
    flex: 1,
    flexDirection: 'row', // 가로 설정
    borderWidth: 1,
  },
  Left: {
    flex: 1,
  },
  Right: {
    flex: 1,
  },
  Innertitle: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 10,
    fontWeight: '700',
    color: 'gray',
  },
  Innertitle2: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: 'black',
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

  info: {
    flexDirection: 'row',
  },
  etfname: {
    fontSize: 19,
    flex: 5,
    padding: 5,
  },
  percent: {
    fontSize: 19,
    flex: 2,
    color: 'red',
    textAlign: 'center',
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
    textAlign: 'center',
  },
  MenuContainer: {
    flex: 1.1,
    backgroundColor: '#D3D3D3',
    flexDirection: 'row',
  },
  MenuButton: {
    flex: 1,
    padding: 20,
  },
  ButtonText: {
    fontSize: 10,
    color: 'black',
    fontWeight: '700',
    textAlign: 'center',
  },

  image: {
    width: 15,
    height: 15,
    padding: 10,
    tintColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  thisimage: {
    width: 15,
    height: 15,
    padding: 10,
    tintColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  thisbutton: {
    fontSize: 10,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
})
