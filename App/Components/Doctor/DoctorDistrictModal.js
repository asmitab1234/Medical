import { StyleSheet, View, TouchableOpacity, Dimensions, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
import { AppButton, AppTextInput, Icon, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import Star from '../Star/Star'
const { height, width } = Dimensions.get('window')

const DoctorDistrictModal = ({ setVisisbleModal }) => {
    const colors = useTheme()
    const districtArr = [
        { title: 'Alipurduar' },
        { title: 'Bankura' },
        { title: 'Birbhum' },
        { title: 'Cooch Behar' },
        { title: 'Dakshin Dinajpur' },
        { title: 'Darjeeling' },
        { title: 'Hooghly' },
        { title: 'Kolkata' },
    ]
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

            <ScrollView
                showsVerticalScrollIndicator={false}>
                {districtArr.map((item, index) => (
                    <TouchableOpacity
                        style={{
                            ...styles.rowView,
                            borderWidth: moderateScale(1),
                            borderColor: colors.buttonColor,
                            paddingHorizontal: moderateScale(15),
                            paddingVertical: moderateScale(8),
                            borderRadius: moderateScale(20),
                            marginVertical: moderateScale(10)
                        }}>
                        <Image
                            source={require('../../Assets/Profile/location.png')}
                            style={{
                                height: moderateScale(16),
                                width: moderateScale(16),
                                marginRight: moderateScale(8)
                            }}
                        />
                        <Text
                            style={styles.fontStyl}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

        </View>
    )
}


export default DoctorDistrictModal

const styles = StyleSheet.create({
    modalStyl: {
        height: height / 1.7,
        width: width,
        borderTopRightRadius: moderateScale(8),
        borderTopLeftRadius: moderateScale(8),
        padding: moderateScale(20),
    },
    fontStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13),
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})