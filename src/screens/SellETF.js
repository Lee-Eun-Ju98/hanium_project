import * as React from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, Keyboard } from 'react-native';
import * as Animate from 'react-native-animatable';

const listItems = [
    'KODEX 단기채권',
    'KODEX 단기채권 PLUS',
    'KODEX 2차전지산업',
    'KODEX 종합채권(AA-이상)액티브',
    'TIGER 단기통안채',
    'TIGER 200 IT',
    'TIGER KRX2차전지K-뉴딜',
    'TIGER 2차전지테마',
    'KODEX 자동차',
    'KODEX 반도체',
    'TIGER 단기채권액티브',
    'KINDEX 단기통안채',
    'KBSTAR 단기통안채',
  ];

export default class SellETF extends React.Component {
  state = {
    searchBarFocused: false,
    userInput: '',
    etfs:[]
  };

  handleChange = (e) => {
    this.setState({ userInput: e.target.value })
  }

  componentDidMount() {
    this.keyboardDidShow = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow
    );
    this.keyboardWillShow = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardWillShow
    );
    this.keyboardWillHide = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardWillHide
    );
  }

  keyboardDidShow = () => {
    this.setState({ searchBarFocused: true });
  };

  keyboardWillShow = () => {
    this.setState({ searchBarFocused: true });
  };

  keyboardWillHide = () => {
    this.setState({ searchBarFocused: false });
  };

  render() {
    const filteredETF = this.state.etfs.filter((listItems) =>
    listItems.includes(this.state.userInput));

    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 80,
            minWidth: '70%',
            backgroundColor: 'rgb(48,101,172)',
            justifyContent: 'center',
            paddingHorizontal: 5
          }}>
          <Animate.View
            animation="slideInRight"
            style={{
              height: 50,
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            <TextInput
              placeholder='매도하고 싶은 ETF명을 입력하세요.'
              style={{ fontSize: 20, paddingLeft: 15 }}
            />
          </Animate.View>
        </View>
        <FlatList
          style={{
            backgroundColor: this.state.searchBarFocused
              ? 'rgba(0,0,0,0.3)'
              : 'white',
          }}
          data={listItems}
          renderItem={({ item }) => (
            <Text style={{ padding: 20, fontSize: 20 }}>{item}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}