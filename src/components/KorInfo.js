import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native'

export default function Korinfo({ content }) {
  return (
    <View style={styles.title}>
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}> 종목코드 : {content.종목코드}</Text>
        <Text style={styles.cardDesc}>종목명 : {content.종목명}</Text>
        <Text style={styles.cardRank}>
          투자위험등급 : {content.투자위험등급}
        </Text>
        <Text style={styles.cardDate}>테마 : {content.테마}</Text>
        <Text style={styles.cardDate}>
          비교지수정보 : {content.비교지수정보}
        </Text>
        <Text style={styles.cardDate}>순자산총액 : {content.순자산총액}</Text>
        <Text style={styles.cardDate}>상장일 : {content.상장일}</Text>
        <Text style={styles.cardDate}>총보수 : {content.총보수}</Text>
        <Text style={styles.cardDate}>분배금 지급 : {content.분배금지급}</Text>
        <Text style={styles.cardDate}>
          최소거래단위 : {content.최소거래단위}
        </Text>
        <Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    //컨텐츠들을 가로로 나열
    //세로로 나열은 column <- 디폴트 값임
    flexDirection: 'row',
    margin: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },

  cardText: {
    flex: 2,
    flexDirection: 'column',
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  cardDesc: {
    fontSize: 20,
  },
  cardDate: {
    fontSize: 15,
    color: '#A6A6A6',
  },
  cardRank: {
    fontSize: 15,
    color: '#ff0000',
  },
})
