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
import Korinfo from '../components/KorInfo'

export default function KorDetailPage({ content }) {
  let korinfo = Korinfo
  return (
    <View style={styles.title}>
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>{content.종목코드}</Text>
        <Text style={styles.cardDesc}>{content.종목명}</Text>
        <Text style={styles.cardDate}>{content.투자위험등급}</Text>
        <Text style={styles.cardDate}>{content.테마}</Text>
        <Text style={styles.cardDate}>{content.비교지수정보}</Text>
        <Text style={styles.cardDate}>{content.순자산총액}</Text>
        <Text style={styles.cardDate}>{content.상장일}</Text>
        <Text style={styles.cardDate}>{content.총보수}</Text>
        <Text style={styles.cardDate}>{content.분배금지급}</Text>
        <Text style={styles.cardDate}>{content.최소거래단위}</Text>
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
  cardImage: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardText: {
    flex: 2,
    flexDirection: 'column',
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  cardDesc: {
    fontSize: 15,
  },
  cardDate: {
    fontSize: 10,
    color: '#A6A6A6',
  },
})
