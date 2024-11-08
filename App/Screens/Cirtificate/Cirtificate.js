import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import { Container, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'


const Cirtificate = () => {
    const colors = useTheme()
    return (
        <Container>
            <BackHeader title='Certificate' />
            <View
                style={{
                    ...styles.certicateBox,
                    backgroundColor: colors.white
                }}>
                <Image
                    source={require('../../Assets/home/png-transparent-creative-certificate-appreciation-award-removebg-preview.png')}
                    style={{
                        height: moderateScale(300),
                        width: moderateScale(300),
                    }}
                    resizeMode='contain'
                />
            </View>
            {/* 
            <Text
                style={styles.textStyl}>
                Online certificate
            </Text> */}
        </Container>
    )
}

export default Cirtificate

const styles = StyleSheet.create({
    textStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(16),
        textAlign: 'center'
    },
    certicateBox: {
        borderRadius: moderateScale(10),
        alignSelf: 'center',
        justifyContent: 'center',
        elevation: 5,
        padding:moderateScale(2),
        marginTop:moderateScale(30)
    }
})