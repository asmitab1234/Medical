import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppButton, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const QuizComponent = ({ item, index, Index, setIndex }) => {

    const colors = useTheme()

    return (

        <Pressable
            onPress={() => setIndex(index)}
            style={{
                ...styles.ansView,
                borderColor: index == Index ? colors.pageBackgroundColor : colors.buttonColor,
                backgroundColor: index == Index ? colors.secondaryButtoncolor : colors.pageBackgroundColor
            }}>
            <Text
                style={{
                    ...styles.qnText,
                    color: index == Index ? colors.pageBackgroundColor : colors.buttonColor,

                }}>
                {item.option}.{' '}
                <Text
                    style={{
                        ...styles.ansText,
                        color: index == Index ? colors.pageBackgroundColor : colors.primaryFontColor,
                    }}>
                    {item.title}
                </Text>
            </Text>
        </Pressable>


    )
}

export default QuizComponent

const styles = StyleSheet.create({
    mainView: {
        elevation: 4,
        marginVertical: moderateScale(10),
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
        width: '48%'
    },
    RatebuttonStyl: {
        marginHorizontal: 0,
        height: moderateScale(45),
        borderRadius: moderateScale(6),
        backgroundColor: 'transparent',
        borderWidth: moderateScale(1),
        width: '48%'
    },
    rightAnsText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12)
    },

})