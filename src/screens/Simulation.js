// 모의투자 페이지
import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native'
import firebase from 'firebase/app'

export default function Simulation({ navigation }) {
  const [ex1, setEx1] = useState([])
  const [ex2, setEx2] = useState([])
  const [ex3, setEx3] = useState([])
  const [kr1, setKr1] = useState([])
  const [kr2, setKr2] = useState([])
  const [kr3, setKr3] = useState([])
  const [senti, setSenti] = useState([])
  const user = firebase.auth().currentUser

  useEffect(() => {
    const dbRef = firebase.database().ref()

    dbRef
      .child('recommend')
      .child('2')
      .child('externaltop1')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setEx1(snapshot.val())
        } else {
          console.log('No data available')
        }
      })

    dbRef
      .child('recommend')
      .child('2')
      .child('externaltop2')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setEx2(snapshot.val())
        } else {
          console.log('No data available')
        }
      })

    dbRef
      .child('recommend')
      .child('2')
      .child('externaltop3')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setEx3(snapshot.val())
        } else {
          console.log('No data available')
        }
      })

    dbRef
      .child('recommend')
      .child('2')
      .child('koreatop1')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setKr1(snapshot.val())
        } else {
          console.log('No data available')
        }
      })

    dbRef
      .child('recommend')
      .child('2')
      .child('koreatop2')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setKr2(snapshot.val())
        } else {
          console.log('No data available')
        }
      })

    dbRef
      .child('recommend')
      .child('2')
      .child('koreatop3')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setKr3(snapshot.val())
        } else {
          console.log('No data available')
        }
      })

    dbRef
      .child('users')
      .child(user.displayName)
      .child('survey')
      .child('사용자성향')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setSenti(snapshot.val())
        } else {
          console.log('No data available')
        }
      })
  }, [])
  return (
    <View style={styles.MainContainer}>
      <View style={styles.FirstContainer}>
        <TouchableOpacity
          style={styles.Button1}
          onPress={() => {
            navigation.navigate('BuyETF')
          }}
        >
          <Text style={styles.ButtonStyle}>매수</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Button2}
          onPress={() => {
            navigation.navigate('SellETF')
          }}
        >
          <Text style={styles.ButtonStyle}>매도</Text>
        </TouchableOpacity>
        <View style={styles.personal}>
          <Text>SERA님의 성향 : {senti}</Text>
        </View>
      </View>

      <View style={styles.SContainer}>
        <Text style={styles.graytext}>
          국내 / 해외 BEST ETF 1년간 동향 비교
        </Text>
        <View style={styles.Inner}>
          <View style={styles.Inner2}>
            <Text style={styles.etfname2}>TIGER KRX2차전지K-뉴딜</Text>
            <Text style={styles.percent2}>171.23%</Text>
          </View>
          <View style={styles.Inner2}>
            <Text style={styles.etfname2}>ProShares UltraPro QQQ</Text>
            <Text style={styles.percent2}>214.45%</Text>
          </View>
        </View>
      </View>
      <View style={styles.DContainer}>
        <Text style={styles.recommendText}> SERA's Today Pick</Text>
      </View>

      <View style={styles.ThirdContainer}>
        <ScrollView>
          <TouchableOpacity
            style={styles.lst}
            onPress={() => {
              navigation.navigate('inputNumber')
            }}
          >
            <Text>국내 - 추천 ETF Top 1 예상 수익률</Text>
            <Text style={styles.graytext}>감성지수 : {kr1.sentiment}</Text>
            <Text style={styles.graytext}>상승여부 : {kr1.up}</Text>
            <View style={styles.info}>
              <Text style={styles.etfname}>{kr1.name}</Text>
              <Text style={styles.percent_red}>{kr1.rate}%</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.lst}
            onPress={() => {
              navigation.navigate('inputNumber')
            }}
          >
            <Text>국내 - 추천 ETF Top 2 예상 수익률</Text>
            <Text style={styles.graytext}>감성지수 : {kr2.sentiment}</Text>
            <Text style={styles.graytext}>상승여부 : {kr2.up}</Text>
            <View style={styles.info}>
              <Text style={styles.etfname}>{kr2.name}</Text>
              <Text style={styles.percent_blue}>{kr2.rate}%</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.lst}
            onPress={() => {
              navigation.navigate('inputNumber')
            }}
          >
            <Text>국내 - 추천 ETF Top 3 예상 수익률</Text>
            <Text style={styles.graytext}>감성지수 : {kr3.sentiment}</Text>
            <Text style={styles.graytext}>상승여부 : {kr3.up}</Text>
            <View style={styles.info}>
              <Text style={styles.etfname}>{kr3.name}</Text>
              <Text style={styles.percent_blue}>{kr3.rate}%</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.lst}
            onPress={() => {
              navigation.navigate('inputNumber')
            }}
          >
            <Text>해외 - 추천 ETF Top 1 예상 수익률</Text>
            <Text style={styles.graytext}>상승여부 : {ex1.up}</Text>
            <View style={styles.info}>
              <Text style={styles.etfname}>{ex1.name}</Text>
              <Text style={styles.percent_red}>{ex1.rate}%</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.lst}
            onPress={() => {
              navigation.navigate('inputNumber')
            }}
          >
            <Text>해외 - 추천 ETF Top 2 예상 수익률</Text>
            <Text style={styles.graytext}>상승여부 : {ex2.up}</Text>
            <View style={styles.info}>
              <Text style={styles.etfname}>{ex2.name}</Text>
              <Text style={styles.percent_red}>{ex2.rate}%</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.lst}
            onPress={() => {
              navigation.navigate('inputNumber')
            }}
          >
            <Text>해외 - 추천 ETF Top 3 예상 수익률</Text>
            <Text style={styles.graytext}>상승여부 : {ex3.up}</Text>
            <View style={styles.info}>
              <Text style={styles.etfname}>{ex3.name}</Text>
              <Text style={styles.percent_red}>{ex3.rate}%</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
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
          onPress={function () {
            Alert.alert('해당화면 입니다!')
          }}
        >
          <Image
            source={require('../assets/invest.png')}
            style={styles.thisimage}
          />
          <Text style={styles.thisbutton}>모의투자</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.MenuButton}
          onPress={() => {
            navigation.navigate('Invest')
          }}
        >
          <Image
            source={require('../assets/simulation.png')}
            style={styles.image}
          />
          <Text style={styles.ButtonText}>투자현황</Text>
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
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  FirstContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  Button1: {
    borderRadius: 18,
    backgroundColor: 'red',
    margin: 10,
  },
  Button2: {
    borderRadius: 18,
    backgroundColor: '#18A8F1',
    margin: 10,
  },
  ButtonStyle: {
    fontSize: 18,
    padding: 13,
    color: 'white',
  },
  personal: {
    flex: 2,
    alignItems: 'center',
    padding: 25,
  },

  SecondContainer: {
    flex: 2,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  DContainer: {
    flex: 0.5,
    padding: 10,

    borderColor: 'gray',
  },
  SContainer: {
    flex: 2,
    padding: 10,
    backgroundColor: '#82CBC4',
  },
  Inner: {
    flex: 1,
    flexDirection: 'row',
  },
  Inner2: {
    flex: 1,
    justifyContent: 'center',
  },
  ThirdContainer: {
    flex: 5.5,
  },
  lst: {
    flex: 2,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    minHeight: 100,
    alignItems: 'flex-start',
  },
  info: {
    flexDirection: 'row',
  },
  etfname: {
    fontSize: 19,
    fontWeight: '700',
    padding: 9,
    flex: 5,
  },
  recommendText: {
    fontSize: 16,
    fontWeight: '700',
    padding: 6,
    flex: 5,
  },
  percent_red: {
    fontSize: 19,
    fontWeight: '700',
    padding: 5,
    flex: 2,
    color: 'red',
  },
  percent_blue: {
    fontSize: 19,
    fontWeight: '700',
    padding: 5,
    flex: 2,
    color: 'blue',
  },
  etfname2: {
    fontSize: 19,
    fontWeight: '700',
    padding: 9,
    textAlign: 'center',
  },
  percent2: {
    fontSize: 19,
    fontWeight: '700',
    padding: 10,
    color: 'red',
    textAlign: 'center',
  },
  graytext: {
    fontSize: 12,
    color: 'gray',
    paddingLeft: 10,
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
