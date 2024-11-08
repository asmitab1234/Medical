import { Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import BackHeader from '../../Components/Header/BackHeader'
import { AppButton, Container, Icon, Text, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'

const MeetingLink = () => {
    const colors = useTheme()
    const buttonArr = [
        { title: 'Join' },
        { title: 'Maybe' },
        { title: 'Not-Join' },
    ]
    const [Index, setIndex] = useState(0)
    return (
        <Container>
            <BackHeader title='Meeting Link' />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}>
                <View
                    style={{
                        ...styles.rowView,
                        borderColor: colors.buttonColor
                    }}>
                    <Text
                        style={styles.linkText}>
                        https://www.w3.org/Provider/Style/dummy.html
                    </Text>
                    <Icon
                        color={colors.buttonColor}
                        name='copy'
                        type='Octicons'
                        size={24}
                    />
                </View>

                <View
                    style={styles.buttonView}>
                    {buttonArr.map((item, index) => (
                        <Pressable
                            key={index}
                            onPress={() => setIndex(index)}
                            style={{
                                ...styles.buttonStyl,
                                borderColor: index == Index ? colors.pageBackgroundColor : colors.buttonColor,
                                backgroundColor: index == Index ? colors.buttonColor : colors.pageBackgroundColor,
                                borderWidth: index == Index ? 0 : moderateScale(1),
                            }}>

                            <Text
                                style={styles.buttonText}>
                                {item.title}
                            </Text>
                        </Pressable>
                    ))}
                </View>

            </ScrollView>
        </Container>
    )
}

export default MeetingLink

const styles = StyleSheet.create({
    rowView: {
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(8)
    },
    linkText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13),
        width: '70%'

    },
    buttonText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(15),
    },
    buttonStyl: {
        marginHorizontal: moderateScale(5),
        height: moderateScale(40),
        borderRadius: moderateScale(6),
        width: '30%',
        marginVertical: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})