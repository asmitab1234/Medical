import { Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppButton, AppTextInput, Container, Icon, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
import ImageCropPicker from 'react-native-image-crop-picker'
import BackHeader from '../../Components/Header/BackHeader'

const ProfileEdit = () => {
    const colors = useTheme()
    const pick = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
        });
    };
    return (
        <Container>
            <BackHeader title='Edit Profile' />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}>

                <AppTextInput
                    placeholder='Enter Your Name'
                    inputStyle={styles.plceholderStyl}
                    title='Name :'
                    titleStyle={styles.titleStyl}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle,
                        borderColor: colors.primaryFontColor,
                    }}
                    mainContainerStyle={{
                    }}
                    keyboardType='email-address'
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
                        marginTop: moderateScale(10)
                    }}
                    keyboardType='email-address'
                />

                <AppTextInput
                    placeholder='Enter Your Mobile No'
                    inputStyle={styles.plceholderStyl}
                    title='Mobile No :'
                    titleStyle={styles.titleStyl}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle,
                        borderColor: colors.primaryFontColor,
                    }}
                    mainContainerStyle={{
                        marginTop: moderateScale(10)
                    }}
                    keyboardType='email-address'
                />

                <AppTextInput
                    placeholder='Enter Your Address'
                    inputStyle={styles.plceholderStyl}
                    title='Address :'
                    titleStyle={styles.titleStyl}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle,
                        borderColor: colors.primaryFontColor,
                    }}
                    mainContainerStyle={{
                        marginTop: moderateScale(10)
                    }}
                    keyboardType='email-address'
                />

                <AppTextInput
                    placeholder='Enter Your State'
                    inputStyle={styles.plceholderStyl}
                    title='State :'
                    titleStyle={styles.titleStyl}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle,
                        borderColor: colors.primaryFontColor,
                    }}
                    mainContainerStyle={{
                        marginTop: moderateScale(10)
                    }}
                    keyboardType='email-address'
                />

                <AppTextInput
                    placeholder='Enter Your District'
                    inputStyle={styles.plceholderStyl}
                    title='District :'
                    titleStyle={styles.titleStyl}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle,
                        borderColor: colors.primaryFontColor,
                    }}
                    mainContainerStyle={{
                        marginTop: moderateScale(10)
                    }}
                    keyboardType='email-address'
                />

                <AppTextInput
                    placeholder='Enter Your Pin Code'
                    inputStyle={styles.plceholderStyl}
                    title='Pin Code :'
                    titleStyle={styles.titleStyl}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle,
                        borderColor: colors.primaryFontColor,
                    }}
                    mainContainerStyle={{
                        marginTop: moderateScale(10)
                    }}
                    keyboardType='email-address'
                />

                {/* <Text
                    style={{
                        ...styles.titleStyl,
                        marginTop: moderateScale(10)
                    }}>
                    Profile Picture :
                </Text>
                <TouchableOpacity
                    onPress={() => pick()}
                    style={styles.boxUpload}>
                    <Icon
                        name='upload'
                        type='Entypo'
                        style={{
                            marginBottom: moderateScale(10)
                        }}
                    />
                    <Text
                        style={styles.plceholderStyl}>
                        Upload Your Photo
                    </Text>
                </TouchableOpacity> */}

                <AppTextInput
                    placeholder='Enter Your Gender'
                    inputStyle={styles.plceholderStyl}
                    title='Gender :'
                    titleStyle={styles.titleStyl}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle,
                        borderColor: colors.primaryFontColor,
                    }}
                    mainContainerStyle={{
                        marginTop: moderateScale(10)
                    }}
                    keyboardType='email-address'
                />

                <AppTextInput
                    placeholder='Enter Your Age'
                    inputStyle={styles.plceholderStyl}
                    title='Age :'
                    titleStyle={styles.titleStyl}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle,
                        borderColor: colors.primaryFontColor,
                    }}
                    mainContainerStyle={{
                        marginTop: moderateScale(10)
                    }}
                    keyboardType='email-address'
                />

                <AppTextInput
                    placeholder='Enter Your Password'
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

                <AppTextInput
                    placeholder='Enter Your Confirm Password'
                    inputStyle={styles.plceholderStyl}
                    title='Confirm Password :'
                    titleStyle={styles.titleStyl}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle,
                        borderColor: colors.primaryFontColor,
                    }}
                    mainContainerStyle={{
                        marginTop: moderateScale(10)
                    }}
                    secureTextEntry={true}
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

                <AppButton
                    title="Save"
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
                    onPress={() => NavigationService.navigate('Profile')}
                />

            </ScrollView>
        </Container>
    )
}

export default ProfileEdit

const styles = StyleSheet.create({
    heading: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(25),
        marginTop: moderateScale(40)
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
        marginVertical: moderateScale(20),
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
    boxUpload: {
        borderWidth: moderateScale(1),
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(20),
        marginTop: moderateScale(10),
        borderRadius: moderateScale(10),
        borderStyle: 'dashed',
        alignItems: 'center'
    }
})