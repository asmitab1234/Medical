import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppButton, AppTextInput, Icon, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import Star from '../Star/Star'


const AddRating = ({ setVisisbleModal }) => {
    const colors = useTheme()
    return (
        <View
            style={{
                ...styles.modalStyl,
                backgroundColor: colors.white
            }}>

            <Icon
                name='close'
                type='AntDesign'
                color={'#CF0D1D'}
                style={{
                    alignSelf: 'flex-end'
                }}
                onPress={() => setVisisbleModal(false)}
            />
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                <Text
                    style={styles.fontStyl}>
                    Add Rating :
                </Text>

                <View
                    style={{
                        marginLeft: moderateScale(10)
                    }}>
                    <Star
                        ActiveStarColor={colors.buttonColor}
                        starSize={20}
                        DeactivateStarName='star-o'
                        DeactivateStarType='FontAwesome'
                        ActiveStarName='star'
                        ActiveStarType='FontAwesome'
                        DeactivateStarColor={colors.buttonColor}

                    />
                </View>
            </View>

            <AppTextInput
                placeholder='Write A Comment'
                inputStyle={styles.textStyle}
                inputContainerStyle={styles.inputContainerStyle}
                mainContainerStyle={{
                    marginTop: moderateScale(10)
                }}
                textAlignVertical='top'
                numberOfLines={5}
            />

            <AppButton
                title="Submit"
                gradient={true}
                gradientColors={['#13B32E', '#044906']}
                gradientStart={{
                    x: 0, y: 1
                }}
                gradientEnd={{
                    x: 1, y: 1
                }}
                textStyle={styles.textStyle}
                style={styles.buttonStyl}
                onPress={() => setVisisbleModal(false)}
            />
        </View>
    )
}


export default AddRating

const styles = StyleSheet.create({
    modalStyl: {
        // height: height / 2,
        // width: width,
        borderRadius: moderateScale(8),
        padding: moderateScale(20),
    },
    textStyle: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12)
    },
    fontStyl: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(14),
    },
    buttonStyl: {
        height: moderateScale(45),
        borderRadius: moderateScale(5),
        marginHorizontal: 0,
        marginTop: moderateScale(20),
    },
    inputContainerStyle: {
        // height: moderateScale(100),
        borderRadius: moderateScale(8)
    }
})