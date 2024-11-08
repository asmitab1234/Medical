import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { AppButton, Container, Icon, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import * as Progress from 'react-native-progress'
import QuizComponent from '../../Components/Quiz/QuizComponent'

const Quiz = () => {
    const colors = useTheme()
    const [Index, setIndex] = useState(0)
    const QuizArr = [

        {
            option: 'A',
            title: 'Orange'
        },
        {
            option: 'B',
            title: 'Black'
        },
        {
            option: 'C',
            title: 'Blue'
        },
        {
            option: 'D',
            title: 'None'
        },
    ]
    return (
        <Container>
            <BackHeader title='Question & Answer' />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}>

                <View
                    style={styles.horizontalSpaceView}>
                    <Text
                        style={{
                            ...styles.TextStyl,
                            color: colors.buttonColor
                        }}>
                        1 <Text>
                            / 10
                        </Text>
                    </Text>
                    <View
                        style={styles.row}>
                        <Text
                            style={styles.TextStyl}>
                            Time: 4:52 min
                        </Text>
                        <Icon
                            name='stopwatch'
                            type='Octicons'
                            color={colors.buttonColor}
                            style={{
                                marginLeft: moderateScale(8)
                            }}
                        />
                    </View>
                </View>

                <Progress.Bar
                    progress={0.2}
                    width={330}
                    color={colors.buttonColor}
                    borderColor={colors.buttonColor}
                    style={{
                        marginVertical: moderateScale(8)
                    }}
                />

                <View
                    style={{
                        ...styles.mainView,
                        backgroundColor: colors.white
                    }}>
                    <Text
                        style={styles.qnText}>
                        1. What is the opposite of Red?
                    </Text>

                    {QuizArr.map((item, index) => (
                        <QuizComponent
                            key={index}
                            index={index}
                            item={item}
                            Index={Index}
                            setIndex={setIndex}
                        />
                    ))}

                    <View
                        style={styles.rowSpace}>

                        <AppButton
                            title="Skip"
                            // gradient={true}
                            // gradientColors={['#13B32E', '#044906']}
                            // gradientStart={{
                            //     x: 0, y: 1
                            // }}
                            // gradientEnd={{
                            //     x: 1, y: 1
                            // }}
                            textStyle={styles.qnText}
                            style={styles.RatebuttonStyl}
                        />

                        <AppButton
                            title="Next"
                            gradient={true}
                            gradientColors={['#13B32E', '#044906']}
                            gradientStart={{
                                x: 0, y: 1
                            }}
                            gradientEnd={{
                                x: 1, y: 1
                            }}
                            textStyle={styles.qnText}
                            style={styles.buttonStyl}
                        />
                    </View>

                    <View
                        style={{
                            ...styles.ansView,
                            borderColor: colors.buttonColor,
                            marginVertical: moderateScale(15)
                        }}>
                        <Text
                            style={{
                                ...styles.qnText,
                                color: colors.buttonColor
                            }} >
                            Right Answer
                        </Text>
                        <Text
                            style={{
                                ...styles.rightAnsText,
                            }} >
                            Blue
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </Container>
    )
}

export default Quiz

const styles = StyleSheet.create({
    TextStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13)
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    horizontalSpaceView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    mainView: {
        elevation: 4,
        marginVertical: moderateScale(20),
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(8),
        borderRadius: moderateScale(8)

    },
    qnText: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(15)
    },
    ansView: {
        paddingHorizontal: moderateScale(12),
        paddingVertical: moderateScale(12),
        borderWidth: moderateScale(0.8),
        marginTop: moderateScale(10),
        borderRadius: moderateScale(8)
    },
    ansText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(14)
    },
    rowSpace: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: moderateScale(20),
        marginBottom: moderateScale(10)
    },
    buttonStyl: {
        marginHorizontal: 0,
        height: moderateScale(45),
        borderRadius: moderateScale(6),
        width: '42%'
    },
    RatebuttonStyl: {
        marginHorizontal: 0,
        height: moderateScale(45),
        borderRadius: moderateScale(6),
        backgroundColor: 'transparent',
        borderWidth: moderateScale(1),
        width: '42%'
    },
    rightAnsText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12)
    },
})