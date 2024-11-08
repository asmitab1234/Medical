import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Icon, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const DoctorList = ({ item }) => {
    const colors = useTheme()
    return (
        <View
            style={{
                ...styles.maincard,
                backgroundColor: colors.white,
            }}>
            <Image
                source={item.img}
                style={styles.imgStyl}
            />
            <View
            style={{flex:1}}>
                <View
                    style={{
                        ...styles.rowView,
                        justifyContent: 'space-between',
                    }}>
                    <Text
                        style={styles.nameText}>
                        {item.name}
                    </Text>
                    <View style={{ flex: 1 }} />
                    <View
                        style={{
                            ...styles.ratingBox,
                            backgroundColor: colors.buttonColor
                        }}>
                        <Text
                            style={{
                                ...styles.addressText,
                                color: colors.pageBackgroundColor
                            }}>
                            {item.rating}
                        </Text>
                    </View>
                </View>
                <Text
                    style={styles.degreeText}>
                    {item.degree}
                </Text>
                <Text
                    style={{
                        ...styles.addressText,
                        marginTop:moderateScale(2)}}>
                    {item.address}
                </Text>
                <Text
                    style={styles.experience}>
                    {item.experience}
                </Text>
            </View>
        </View>
    )
}

export default DoctorList

const styles = StyleSheet.create({
    maincard: {
        elevation: 5,
        marginTop: moderateScale(2),
        marginBottom: moderateScale(18),
        borderRadius: moderateScale(8),
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgStyl: {
        height: moderateScale(100),
        width: moderateScale(90),
        borderRadius: moderateScale(10),
        marginRight: moderateScale(8)
    },
    nameText: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(16)
    },
    experience: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(11),
        marginTop:moderateScale(5)
    },
    degreeText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(14),
    },
    addressText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
    },
    ratingBox: {
        paddingHorizontal: moderateScale(8),
        paddingVertical: moderateScale(5),
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: moderateScale(5)
    }
})