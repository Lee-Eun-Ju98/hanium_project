// 모의투자 페이지

import React from 'react';
import {StyleSheet, Text, View, Alert, TouchableOpacity, ScrollView} from 'react-native';

export default function Simulation({navigation}) {
    return(
        <View style={styles.MainContainer}>
            <View style={styles.FirstContainer}>
            <TouchableOpacity style={styles.Button1} onPress={()=>{navigation.navigate('BuyETF')}}>
                <Text style={styles.ButtonStyle}>매수</Text></TouchableOpacity>

            <TouchableOpacity style={styles.Button2} onPress={()=>{navigation.navigate('SellETF')}}>
                <Text style={styles.ButtonStyle}>매도</Text></TouchableOpacity>
            <View style={styles.personal}><Text>SERA님의 성향 : 중립형</Text></View>
            </View>

            <View style={styles.SecondContainer}>
            <Text style={styles.graytext}>국내 / 해외 추천 ETF Top 1 수익률 비교</Text>
                <View style={styles.Inner}>
                    <View style={styles.Inner2}>
                    <Text style={styles.etfname2}>KODEX 2차전지산업</Text>
                    <Text style={styles.percent2}>12.64%</Text>
                    </View>
                    <View style={styles.Inner2}>
                    <Text style={styles.etfname2}>SPY SPDR S&P 500 ETF</Text>
                    <Text style={styles.percent2}>11.35%</Text>
                    </View>
                </View>
            </View>

            <View style={styles.ThirdContainer}>
                <ScrollView>
                <TouchableOpacity style={styles.lst}><Text>국내 - 추천 ETF Top 1                                     예상 수익률</Text>
                <Text style={styles.graytext}>긍정</Text>
                <View style={styles.info}><Text style={styles.etfname}>KODEX 2차전지산업</Text>
                <Text style={styles.percent}>12.64%</Text></View></TouchableOpacity>
                <TouchableOpacity style={styles.lst}><Text>국내 - 추천 ETF Top 2                                     예상 수익률</Text>
                <Text style={styles.graytext}>긍정</Text>
                <View style={styles.info}><Text style={styles.etfname}>KODEX 반도체</Text>
                <Text style={styles.percent}>5.96%</Text></View></TouchableOpacity>
                <TouchableOpacity style={styles.lst}><Text>국내 - 추천 ETF Top 3                                     예상 수익률</Text>
                <Text style={styles.graytext}>긍정</Text>
                <View style={styles.info}><Text style={styles.etfname}>KODEX 자동차</Text>
                <Text style={styles.percent}>2.13%</Text></View></TouchableOpacity>
                <TouchableOpacity style={styles.lst}><Text>해외 - 추천 ETF Top 1                                      예상 수익률</Text>
                <Text style={styles.graytext}>긍정</Text>
                <View style={styles.info}><Text style={styles.etfname}>SPY SPDR S&P 500 ETF</Text>
                <Text style={styles.percent}>11.35%</Text></View></TouchableOpacity>
                <TouchableOpacity style={styles.lst}><Text>해외 - 추천 ETF Top 2                                     예상 수익률</Text>
                <Text style={styles.graytext}>긍정</Text>
                <View style={styles.info}><Text style={styles.etfname}>IVV iShares Core S&P 500 ETF</Text>
                <Text style={styles.percent}>8.02%</Text></View></TouchableOpacity>
                <TouchableOpacity style={styles.lst}><Text>해외 - 추천 ETF Top 3                                     예상 수익률</Text>
                <Text style={styles.graytext}>긍정</Text>
                <View style={styles.info}><Text style={styles.etfname}>Invesco QQQ Trust</Text>
                <Text style={styles.percent}>3.31%</Text></View></TouchableOpacity>
                </ScrollView>
            </View>

            <View style={styles.MenuContainer}>
                <TouchableOpacity style={styles.MenuButton} onPress={()=>{navigation.navigate('Dashboard')}}>
                <Text style={styles.ButtonText}>홈</Text></TouchableOpacity>
                <TouchableOpacity style={styles.MenuButton} onPress={()=>{navigation.navigate('ETFinfo')}}>
                <Text style={styles.ButtonText}>ETF</Text></TouchableOpacity>
                <TouchableOpacity style={styles.MenuButton} onPress={function(){Alert.alert('해당화면 입니다!')}}>
                <Text style={styles.ButtonText}>모의투자</Text></TouchableOpacity>
                <TouchableOpacity style={styles.MenuButton} onPress={()=>{navigation.navigate('Invest')}}>
                <Text style={styles.ButtonText}>투자현황</Text></TouchableOpacity>
                <TouchableOpacity style={styles.MenuButton} onPress={()=>{navigation.navigate('Myprofile')}}>
                <Text style={styles.ButtonText}>내정보</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        flex:1,
        backgroundColor:'white'
      },
    FirstContainer: {
        flex:1,
        flexDirection:'row'
      },
    Button1:{
        borderRadius:18,
        backgroundColor:'red',
        margin:10
    },
    Button2:{
        borderRadius:18,
        backgroundColor:'#18A8F1',
        margin:10
    },
    ButtonStyle:{
        fontSize:18,
        padding:13,
        color:'white'
    },
    personal:{
        flex:2,
        alignItems: 'center',
        padding:25
    },

    SecondContainer:{
        flex:2,
        padding:10,
        borderWidth:1,
        borderColor:'gray'
    },
    Inner:{
        flex:1,
        flexDirection:'row'
    },
    Inner2:{
        flex:1,
        justifyContent:'center'
    },
    ThirdContainer: {
        flex:5.5
      },
    lst:{
        flex:2,
        borderWidth:1,
        borderRadius:10,
        padding:10,
        minHeight:100,
        alignItems: 'flex-start',
    },
    info:{
        flexDirection:'row'
    },
    etfname:{
        fontSize:19,
        fontWeight:'700',
        padding:9,
        flex:5
    },
    percent:{
        fontSize:19,
        fontWeight:'700',
        padding:5,
        flex:2,
        color:'red'
    },
    etfname2:{
        fontSize:19,
        fontWeight:'700',
        padding:9,
        textAlign:'center'
    },
    percent2:{
        fontSize:19,
        fontWeight:'700',
        padding:10,
        color:'red',
        textAlign:'center'
    },
    graytext:{
        fontSize:12,
        color:'gray',
        paddingLeft:10
    },

    MenuContainer: {
        flex:0.85,
        backgroundColor:'#82CBC4',
        flexDirection:'row'
      },
    MenuButton: {
        flex:1,
        padding:20
      },
    ButtonText: {
        fontSize:10,
        color:'white',
        fontWeight:'700',
        textAlign:'center'
      }

});