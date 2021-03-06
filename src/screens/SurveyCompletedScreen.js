import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { firebase_db } from '../core/config'
import firebase from 'firebase/app'

const GREEN = 'rgba(141,196,63,1)'
const COLOR = '#82CBC4'

export default class SurveyCompletedScreen extends Component {
  render() {
    console.ignoredYellowBox = ['Setting a timer']
    const user = firebase.auth().currentUser
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        const answers = this.props.route.params.surveyAnswers

        firebase_db.goOnline()
        var db_ref = firebase_db.ref('users/' + user.displayName + '/survey')

        db_ref.set({
          추천받고싶은ETF: answers.ETFtype.value,
          투자목적: answers.Investpurpose.value,
          ETF이해도: answers.understand.value,
          보유종목: answers.ETFname,
          관심테마: answers.ETFtheme.theme,
          투자손해정도: answers.InvestLoss.loss,
          위험_수익밸런스: answers.balance.bal,
          사용자성향: Addresult(
            answers.ETFtheme.value,
            answers.InvestLoss.value,
            answers.balance.value
          ),
        })

        // ...
      } else {
        // User is signed out
        // ...
      }
    })

    const answers = this.props.route.params.surveyAnswers
    const { navigate } = this.props.navigation

    function Addresult(a, b, c) {
      const resultadd = Number(a) + Number(b) + Number(c)
      if (resultadd <= 20) {
        return '안정형'
      } else if (20 < resultadd <= 50) {
        return '중립형'
      } else if (resultadd <= 100) {
        return '공격형'
      }
    }
    function Addresult_screen(a, b, c) {
      const resultadd = Number(a) + Number(b) + Number(c)
      if (resultadd <= 20) {
        return '고객님의 투자성향은 "안정형"입니다.'
      } else if (20 < resultadd <= 50) {
        return '고객님의 투자성향은 "중립형"입니다.'
      } else if (resultadd <= 100) {
        return '고객님의 투자성향은 "공격형"입니다.'
      }
    }

    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.ResultText}>
            {Addresult_screen(
              answers.ETFtheme.value,
              answers.InvestLoss.value,
              answers.balance.value
            )}
          </Text>
          <TouchableOpacity
            style={styles.Buttonstyle}
            onPress={() => {
              navigate('Dashboard')
            }}
          >
            <Text style={styles.ButtonText}>시작하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR,
  },
  container: {
    minWidth: '70%',
    maxWidth: '90%',
    alignItems: 'flex-end',
    padding: 5,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    maxHeight: '80%',
  },
  Buttonstyle: {
    backgroundColor: GREEN,
    borderRadius: 10,
  },
  ButtonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'right',
    padding: 10,
  },
  ResultText: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: '700',
  },
})
