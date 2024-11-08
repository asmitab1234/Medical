import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const TestimonialComponent = ({ item }) => {
    const colors = useTheme()
    return (
        <View
            style={{
                ...styles.maincard,
                backgroundColor: colors.white
            }}>
            <View
                style={styles.rowView}>
                <Image
                    source={item.img}
                    style={styles.imgStyl}
                />
                <View>
                    <Text
                        style={styles.nameText}>
                        {item.name}
                    </Text>
                    <Text
                        style={styles.dateText}>
                        {item.date}
                    </Text>
                </View>
            </View>
            <Text
                style={styles.quoteText}>
                " {item.quote} "
            </Text>
        </View>
    )
}

export default TestimonialComponent

const styles = StyleSheet.create({
    maincard: {
        elevation: 5,
        marginTop: moderateScale(2),
        marginBottom: moderateScale(18),
        borderRadius: moderateScale(8),
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(8)
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgStyl: {
        height: moderateScale(60),
        width: moderateScale(60),
        borderRadius: moderateScale(30),
        marginRight: moderateScale(8)
    },
    nameText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(14)
    },
    dateText: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(12)
    },
    quoteText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
        marginTop:moderateScale(10)
    }
})