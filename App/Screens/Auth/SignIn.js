import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { AppButton, AppTextInput, CheckBox, Container, Icon, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const SignIn = () => {
    const colors = useTheme()
    const [check, setCheck] = useState(false);
    return (
        <Container>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}>

                <Image
                    source={require('../../Assets/logo1.png')}
                    style={styles.imageLogo}
                    resizeMode='contain'
                />

                <AppTextInput
                    placeholder='Enter Your Email Id'
                    inputStyle={styles.plceholderStyl}
                    title='Email Id :'
                    titleStyle={styles.titleStyl}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle,
                        borderColor: colors.primaryFontColor,
                    }}
                    mainContainerStyle={{
                        // marginTop: moderateScale(35)
                    }}
                    keyboardType='email-address'
                    leftIcon={{
                        name: 'mail',
                        type: 'Entypo'
                    }}
                />

                <AppTextInput
                    placeholder='Enter Your Password '
                    inputStyle={styles.plceholderStyl}
                    title='Password :'
                    titleStyle={styles.titleStyl}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle,
                        borderColor: colors.primaryFontColor,
                    }}
                    mainContainerStyle={{
                        marginTop: moderateScale(10)
                    }}
                    secureTextEntry={true}
                    leftIcon={{
                        name: 'key',
                        type: 'Entypo'
                    }}
                    rightAction={
                        // Eye ?
                        < Icon
                            name='eye'
                            type='Entypo'
                            onPress={() => onClick()}
                        />
                        //             :
                        //             < Icon
                        //                 name='eye-with-line'
                        //                 type='Entypo'
                        //             />

                        //  
                    }
                />
                {/* <View
                    style={{
                        ...styles.row,
                        marginTop: moderateScale(2),
                        justifyContent: 'space-between',
                        marginTop: moderateScale(10)
                    }}>
                    <View
                        style={styles.row}>
                        <CheckBox
                            checked={check}
                            onChange={(val) => setCheck(val)}
                            size={20}
                            containerStyle={{
                                borderWidth: moderateScale(1)
                            }}
                            activeColor={colors.secondaryButtoncolor}
                        />
                        <Text
                            style={styles.rememberText}>
                            Remember Me
                        </Text>
                    </View>

                    <View
                        style={styles.row}>
                        <Text
                            style={styles.rememberText}>
                            Forgot Password
                        </Text>
                        <Icon
                            name='question'
                            type='AntDesign'
                        />
                    </View>
                </View> */}

                <AppButton
                    title="Login"
                    gradient={true}
                    gradientColors={['#13B32E', '#044906']}
                    gradientStart={{
                        x: 0, y: 1
                    }}
                    gradientEnd={{
                        x: 1, y: 1
                    }}
                    textStyle={styles.buttonText}
                    style={styles.buttonStyl}
                    onPress={() => NavigationService.navigate('AppStack')}
                />
                <View
                    style={{
                        ...styles.row,
                        marginBottom: moderateScale(40),
                        alignSelf: 'center'
                    }}>
                    <Text
                        style={styles.plceholderStyl}>
                        Don't Have An Account ?
                    </Text>
                    <Pressable
                        onPress={() => NavigationService.navigate('SignUp')}>
                        <Text
                            style={styles.titleStyl}>
                            Register
                        </Text>
                    </Pressable>
                </View>

            </ScrollView>
        </Container>
    )
}

export default SignIn

const styles = StyleSheet.create({
    imageLogo: {
        height: moderateScale(280),
        width: moderateScale(280),
        alignSelf: 'center'
    },
    plceholderStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13)
    },
    titleStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(14),
        textTransform: 'none',
        marginLeft: moderateScale(5)
    },
    inputContainerStyle: {
        height: moderateScale(45),
        borderRadius: moderateScale(10),
    },
    buttonText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(15),
    },
    buttonStyl: {
        height: moderateScale(45),
        borderRadius: moderateScale(10),
        marginTop: moderateScale(40),
        marginHorizontal: 0
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rememberText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
        marginLeft: moderateScale(10)
    },

})