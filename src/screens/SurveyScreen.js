import React, { Component } from 'react';
import { StyleSheet, Button, ScrollView, Text, TextInput, View } from 'react-native';
import { SimpleSurvey } from 'react-native-simple-survey';

const GREEN = 'rgba(141,196,63,1)';
const COLOR = '#82CBC4';

const survey = [
    {
        questionType: 'Info',
        questionText: '사용자의 투자성향을 파악하여 맞춤 ETF를 추천해주기 위한 설문조사 입니다.'
    },
    {
        questionType: 'SelectionGroup',
        questionText: '1. 국내 ETF와 해외 ETF 중 어떤 것을 추천받고 싶으신가요?',
        questionId: 'ETFtype',
        options: [
            {
                optionText: '국내 ETF',
                value: '국내'
            },
            {
                optionText: '해외 ETF',
                value: '해외'
            },
            {
                optionText: '국내ETF 와 해외 ETF 모두',
                value: '모두'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText: '2. ETF에 투자하는 목적은 무엇인가요?',
        questionId: 'Investpurpose',
        options: [
            {
                optionText: '예적금 수익률이 적어서',
                value: '예적금'
            },
            {
                optionText: '투자 수익을 얻기 위해',
                value: '투자수익'
            },
            {
                optionText: '목적 뭐쓰지???',
                value: '목적 뭐쓰지???'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText: '3. ETF에 대해 어느 정도 알고계신가요?',
        questionId: 'understand',
        options: [
            {
                optionText: '잘 알지 못한다.',
                value: '잘모름'
            },
            {
                optionText: '기본적인 이해는 하고 있다.',
                value: '중간'
            },
            {
                optionText: 'ETF를 잘 이해하고 있다.',
                value: '잘안다'
            }
        ]
    },
    {
        questionType: 'TextInput',
        questionText: '4. 현재 보유하고 계신 ETF 종목이 있으신가요?',
        questionId: 'ETFname',
        placeholderText: '없는 경우 없음을 입력해주세요!',
    },
    {
        questionType: 'SelectionGroup',
        questionText: '5. 관심있는 ETF테마를 선택해주세요.',
        questionId: 'ETFtheme',
        options: [
            {
                optionText: '채권',
                value: 0,
                theme: '채권'

            },
            {
                optionText: '통안채',
                value: 0,
                theme: '통안채'
            },
            {
                optionText: '2차 전지',
                value: 10,
                theme: '2차 전지'
            },
            {
                optionText: '국내 기술주',
                value: 10,
                theme: '국내 기술주'
            },
            {
                optionText: '국내 반도체',
                value: 20,
                theme: '국내 반도체'
            },
            {
                optionText: '자동차',
                value: 20,
                theme: '자동차'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText: '6. 투자 시 발생하는 손실을 어느 정도 견디실 수 있으신가요?',
        questionId: 'InvestLoss',
        options: [
            {
                optionText: '손실 못견뎌요.',
                value: 0,
                loss: '못견딤'
            },
            {
                optionText: '낮은 손실은 괜찮아요.',
                value: 5,
                loss: '낮은 손실 가능'
            },
            {
                optionText: '5%까지는 괜찮아요.',
                value: 10,
                loss: '5% 까지 가능'
            },
            {
                optionText: '10%까지는 괜찮아요.',
                value: 20,
                loss: '10% 까지 가능'
            },
            {
                optionText: '높은 손실도 견딜 수 있어요.',
                value: 30,
                loss: '높은 손실 가능'
            }
        ]
    },{
        questionType: 'SelectionGroup',
        questionText: '7. 투자 시 생각하는 수익과 위험의 밸런스는 어느 정도이신가요?',
        questionId: 'balance',
        options: [
            {
                optionText: '낮은 위험만',
                value: 0,
                bal: '낮은 위험만'
            },
            {
                optionText: '낮은 위험, 낮은 수익',
                value: 5,
                bal: '낮은 위험과 수익'
            },
            {
                optionText: '적당한 위험, 적당한 수익',
                value: 10,
                bal: '적당한 위험과 수익'
            },
            {
                optionText: '높은 위험, 높은 수익',
                value: 20,
                bal: '높은 위험과 수익'
            },
            {
                optionText: '높은 위험만',
                value: 30,
                bal: '높은 위험만'
            }
        ]
    },
    {
        questionType: 'Info',
        questionText: '설문이 끝났습니다. 수고하셨습니다!'
    },
];

export default class SurveyScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { backgroundColor: COLOR, answersSoFar: '' };
    }

    onSurveyFinished(answers) {

        const infoQuestionsRemoved = [...answers];
        const answersAsObj = {};
        for (const elem of infoQuestionsRemoved) { answersAsObj[elem.questionId] = elem.value; }

        this.props.navigation.navigate('SurveyCompletedScreen', { surveyAnswers: answersAsObj });
    }

    onAnswerSubmitted() {
        this.setState({ answersSoFar: JSON.stringify(this.surveyRef.getAnswers(), 2) });}

    renderPreviousButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={GREEN}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={GREEN}
                    title={'Previous'}
                />
            </View>
        );
    }

    renderNextButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={GREEN}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={GREEN}
                    title={'Next'}
                />
            </View>
        );
    }

    renderFinishedButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    title={'Finished'}
                    onPress={onPress}
                    disabled={!enabled}
                    color={GREEN}

                />
            </View>
        );
    }

    renderButton(data, index, isSelected, onPress) {
        return (
            <View
                key={`selection_button_view_${index}`}
                style={{ marginTop: 5, marginBottom: 5, justifyContent: 'flex-start' }}
            >
                <Button
                    title={data.optionText}
                    onPress={onPress}
                    color={isSelected ? GREEN : COLOR}
                    style={isSelected ? { fontWeight: 'bold' } : {}} 
                    key={`button_${index}`}
                />
            </View>
        );
    }

    renderQuestionText(questionText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text numLines={1} style={styles.questionText}>{questionText}</Text>
            </View>
        );
    }

    renderTextBox(onChange, value, placeholder, onBlur) {
        return (
            <View>
                <TextInput
                    style={styles.textBox}
                    onChangeText={text => onChange(text)}
                    numberOfLines={1}
                    underlineColorAndroid={'white'}
                    placeholder={placeholder}
                    placeholderTextColor={'rgba(184,184,184,1)'}
                    value={value}
                    multiline
                    onBlur={onBlur}
                    blurOnSubmit
                    returnKeyType='done'
                />
            </View>
        );
    }

    renderNumericInput(onChange, value, placeholder, onBlur) {
        return (<TextInput 
            style={styles.numericInput}
            onChangeText={text => { onChange(text); }}
            underlineColorAndroid={'white'}
            placeholderTextColor={'rgba(184,184,184,1)'}
            value={String(value)}
            placeholder={placeholder}
            keyboardType={'numeric'}
            onBlur={onBlur}
            maxLength={3}
        />);
    }

    renderInfoText(infoText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={styles.infoText}>{infoText}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={[styles.background, { backgroundColor: this.state.backgroundColor }]}>
                <View style={styles.container}>
                    <SimpleSurvey
                        ref={(s) => { this.surveyRef = s; }}
                        survey={survey}
                        renderSelector={this.renderButton.bind(this)}
                        containerStyle={styles.surveyContainer}
                        selectionGroupContainerStyle={styles.selectionGroupContainer}
                        navButtonContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around' }}
                        renderPrevious={this.renderPreviousButton.bind(this)}
                        renderNext={this.renderNextButton.bind(this)}
                        renderFinished={this.renderFinishedButton.bind(this)}
                        renderQuestionText={this.renderQuestionText}
                        onSurveyFinished={(answers) => this.onSurveyFinished(answers)}
                        onAnswerSubmitted={(answer) => this.onAnswerSubmitted(answer)}
                        renderTextInput={this.renderTextBox}
                        renderNumericInput={this.renderNumericInput}
                        renderInfo={this.renderInfoText}
                    />
                    
                </View>
                
                <ScrollView style={styles.answersContainer}>
                    <Text style={{textAlign:'center'}}>JSON output</Text>
                    <Text>{this.state.answersSoFar}</Text>
                </ScrollView>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        height: 30,
        width: 140,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        
        
        borderRadius: 10,
        flex: 1, 
    },
    answersContainer: {
        width: '90%',
        maxHeight: '20%',
        marginTop: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    surveyContainer: {
        width: 'auto',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignContent: 'center',
        padding: 5,
        flexGrow: 0,
        elevation: 20,
    },
    selectionGroupContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        alignContent: 'flex-end',
    },
    navButtonText: {
        margin: 10,
        fontSize: 20,
        color: 'white',
        
        
        width: 'auto'
    },
    answers: {
        alignSelf: 'center',
        marginBottom: 10,
    },
    navigationButton: {
        
        minHeight: 40,
        backgroundColor: GREEN,
        padding: 0,
        borderRadius: 100,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
    textBox: {
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,1)',
        backgroundColor: 'white',
        borderRadius: 10,
        
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    numericInput: {
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,1)',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    infoText: {
        marginBottom: 20,
        fontSize: 20,
        marginLeft: 10
    },
});