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
import korea from './etfData.json'
import Korinfo from '../components/KorInfo'
import { Searchbar } from 'react-native-paper'
import { TextInput } from 'react-native-gesture-handler'
import contactinfo from '../components/contactinfo'

export default function ETFinfo({ navigation }) {
  let korinfo = korea.koretf

  return (
    <View style={styles.MainContainer}>
      <View style={styles.FirstContainer}>
        <View style={styles.SubMenu}>
          <TouchableOpacity
            style={styles.InnerSub}
            onPress={() => {
              Alert.alert('현재 국내주식 화면입니다.')
            }}
          >
            <Text style={styles.InnerText}>국내ETF</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Inner2Sub}
            onPress={() => {
              navigation.navigate('externalETFinfo')
            }}
          >
            <Text style={styles.InnerText}>해외ETF</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.blackContainer}></View>
      <View style={styles.SecondContainer}>
        <TextInput
          style={styles.InnerText}
          type="text"
          placeholder="검색어를 입력해주세요"
          className="prompt"
        />
        <View style={styles.ButtonInner2}></View>
      </View>
      <View style={styles.blackContainer}></View>
      <View style={styles.ThirdContainer}>
        <ScrollView>
          {korinfo.map((content, i) => {
            return <Korinfo content={content} key={i} />
          })}
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
          onPress={function () {
            Alert.alert('해당화면 입니다!')
          }}
        >
          <Image
            source={require('../assets/ETFinfo.png')}
            style={styles.thisimage}
          />
          <Text style={styles.thisbutton}>ETF</Text>
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
  MainContainer: {
    flex: 1,
  },
  FirstContainer: {
    flex: 1,
  },
  blackContainer: {
    flex: 0.1,
    backgroundColor: 'white',
  },
  SubMenu: {
    flexDirection: 'row',
    backgroundColor: '#82CBC4',
  },
  InnerText: {
    fontSize: 20,
    color: 'black',
  },
  Inner2Text: {
    fontSize: 20,
  },
  InnerSub: {
    flex: 1,
    padding: 25,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  Inner2Sub: {
    flex: 1,
    padding: 25,
    alignItems: 'center',
  },

  SecondContainer: {
    flex: 0.5,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 5,
  },
  ButtonInner1: {
    flex: 1,
  },
  ButtonInner2: {
    flex: 2,
  },
  ButtonStyle: {
    fontSize: 15,
  },

  ThirdContainer: {
    flex: 7,
    backgroundColor: 'white',
  },
  Title: {
    fontSize: 20,
    padding: 15,
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
