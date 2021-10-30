import { firebase_db } from '../core/config'
import firebase from 'firebase/app'
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native'

export default class inputNumber extends Component {
  state = {
    text: '',
    inputText: '',
  }
  submitBtn = () => {
    this.setState({ text: this.state.inputText })
  }

  render() {
    firebase_db.goOnline()
    var db_ref = firebase_db.ref('users/Test/buy_etf')
    db_ref.set({
      'KODEX 200IT TR': {
        가격: 12600,
        수량: this.state.inputText,
        총구매가격: 12600 * this.state.inputText,
      },
    })

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.headerText}>KODEX 200IT TR</Text>
        </View>

        <TextInput
          placeholder="매수하실 수량을 입력하세요."
          underlineColorAndroid="transparent"
          style={styles.TextInputStyle}
          onChangeText={(text) => {
            this.setState({ inputText: text })
          }}
          keyboardType={'numeric'}
        />

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Simulation')
          }}
        >
          <Text style={styles.buttontext}>{this.state.text}확인</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 30,
    marginLeft: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  TextInputStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    height: 40,
    borderRadius: 5,
    borderWidth: 2,
    width: 250,
    borderColor: '#82CBC4',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  buttontext: {
    fontSize: 17,
    height: 35,
    marginHorizontal: 100,
    marginVertical: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#82CBC4',
    borderRadius: 10,
  },
})
