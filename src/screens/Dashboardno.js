import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
  Linking,
} from 'react-native'
import { StartScreen } from '.'

export default function Dashboard({ navigation }) {
  const [titles, setTitles] = useState([])
  const [href, setHref] = useState([])
  const [kospi, setKospi] = useState([])
  const [nasdaq, setNasdaq] = useState([])
  const [sp500, setSp500] = useState([])
  const [dollar, setDollar] = useState([])

  useEffect(() => {
    const dbRef = firebase.database().ref()

    dbRef
      .child('news')
      .child('title')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setTitles(snapshot.val())
        } else {
          console.log('No data available')
        }
      })

    dbRef
      .child('news')
      .child('href')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setHref(snapshot.val())
        } else {
          console.log('No data available')
        }
      })

    dbRef
      .child('king')
      .child('kospi')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setKospi(snapshot.val())
          console.log(kospi.price)
        } else {
          console.log('No data available')
        }
      })

    dbRef
      .child('king')
      .child('nasdaq')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setNasdaq(snapshot.val())
        } else {
          console.log('No data available')
        }
      })

    dbRef
      .child('king')
      .child('s%p500')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setSp500(snapshot.val())
        } else {
          console.log('No data available')
        }
      })

    dbRef
      .child('king')
      .child('dollar')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setDollar(snapshot.val())
        } else {
          console.log('No data available')
        }
      })
  }, [])

  return (
    <View style={styles.MainContainer}>
      <View style={styles.zeroContainer}>
        <Text style={styles.Title_3}>SERA</Text>
      </View>

      <View style={styles.FirstContainer}>
        <Text style={styles.FirstTitle}>
          로그인 후 모의투자를 이용해보세요.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate(StartScreen)}>
          <Text style={styles.FirstTitle}>로그인하기 ></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.blackContainer}></View>
      <View style={styles.SecondContainer}>
        <View style={styles.zeroContainer}>
          <Text style={styles.Title}>주요지수</Text>
          <View style={styles.zeroContainer}>
            <View style={styles.MainContainer}>
              <View style={styles.Info}>
                <View style={styles.MainContainer}>
                  <Text style={styles.TitleText_1}>KOSPI :</Text>
                  <Text style={styles.TitleText_2_blue}>{kospi.price}</Text>
                  <Text style={styles.TitleText_3_blue}>{kospi.up}</Text>
                </View>
                <View style={styles.MainContainer}>
                  <Text style={styles.TitleText_1}>NASDAQ :</Text>
                  <Text style={styles.TitleText_2_red}>{nasdaq.price}</Text>
                  <Text style={styles.TitleText_3_red}>{nasdaq.up}</Text>
                </View>
              </View>
            </View>
            <View style={styles.MainContainer}>
              <View style={styles.Info}>
                <View style={styles.MainContainer}>
                  <Text style={styles.TitleText_1}>S&P500 :</Text>
                  <Text style={styles.TitleText_2_red}>{sp500.price}</Text>
                  <Text style={styles.TitleText_3_red}>{sp500.up}</Text>
                </View>
                <View style={styles.MainContainer}>
                  <Text style={styles.TitleText_1}>DOLLAR :</Text>
                  <Text style={styles.TitleText_2_red}>{dollar.price}</Text>
                  <Text style={styles.TitleText_3_red}>{dollar.up}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.blackContainer}></View>
      <View style={styles.ThirdContainer}>
        <ScrollView>
          <Text style={styles.Title}>금융 최신 뉴스</Text>
          <TouchableOpacity onPress={() => Linking.openURL(href[0])}>
            <Text style={styles.NewsText}>{titles[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(href[1])}>
            <Text style={styles.NewsText}>{titles[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(href[2])}>
            <Text style={styles.NewsText}>{titles[2]}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(href[3])}>
            <Text style={styles.NewsText}>{titles[3]}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(href[4])}>
            <Text style={styles.NewsText}>{titles[4]}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(href[5])}>
            <Text style={styles.NewsText}>{titles[5]}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(href[6])}>
            <Text style={styles.NewsText}>{titles[6]}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(href[7])}>
            <Text style={styles.NewsText}>{titles[7]}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(href[8])}>
            <Text style={styles.NewsText}>{titles[8]}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(href[9])}>
            <Text style={styles.NewsText}>{titles[9]}</Text>
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
          <Image
            source={require('../assets/home.png')}
            style={styles.thisimage}
          />
          <Text style={styles.thisbutton}>홈</Text>
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
  zeroContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  blackContainer: {
    flex: 0.1,
    backgroundColor: 'white',
  },
  MainContainer: {
    flex: 1,
  },
  FirstContainer: {
    flex: 2,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#82CBC4',
    backgroundColor: '#82CBC4',
  },
  SecondContainer: {
    flex: 5,
    backgroundColor: 'white',
  },
  ThirdContainer: {
    flex: 4,
    backgroundColor: 'white',
  },
  Inner: {
    flex: 1,
    flexDirection: 'row',
  },
  Info: {
    flex: 1,
    flexDirection: 'row',
  },

  FirstTitle: {
    fontSize: 20,
    padding: 10,
    fontWeight: '700',
    color: '#F5F5F5',
    marginTop: 10,
    marginLeft: 15,
  },
  FirstSub: {
    fontSize: 30,
    padding: 1,
    marginLeft: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  Title: {
    fontSize: 25,
    fontWeight: '700',
    padding: 10,
    backgroundColor: 'white',
    marginTop: 5,
  },
  Title_2: {
    fontSize: 25,
    fontWeight: '700',
    padding: 10,
    backgroundColor: 'white',
    marginTop: 40,
  },
  Title_3: {
    fontSize: 25,
    fontWeight: '700',
    padding: 10,
    backgroundColor: 'white',
    textAlign: 'center',
  },

  TitleText_1: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 5,
  },
  TitleText_2_red: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 5,
    color: 'red',
  },
  TitleText_2_blue: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 5,
    color: 'blue',
  },
  TitleText_3_red: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 5,
    color: 'red',
  },
  TitleText_3_blue: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 5,
    color: 'blue',
  },
  Titlered: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 5,
    color: 'red',
  },
  Titleblue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 5,
    color: 'blue',
  },

  News: {
    padding: 10,
    backgroundColor: 'white',
  },
  NewsText: {
    fontSize: 15,
    backgroundColor: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },

  pricetext: {
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 30,
    textDecorationLine: 'underline',
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
