import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const NotificationComponent = ({ item }) => {
    return (
        <TouchableOpacity
            style={styles.mainView}
        >
            <Image
                source={item.img}
                style={styles.imgStyl}
            />
            <View>
                <Text
                    style={styles.notifyText}>
                    {item.notify}
                </Text>
                <Text
                    style={styles.timeText}>
                    {item.time}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default NotificationComponent

const styles = StyleSheet.create({
    mainView: {
        marginBottom: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgStyl: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(90)
    },
    notifyText: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12),
        width: '80%',
        marginLeft: moderateScale(10)
    },
    timeText: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(11),
        marginLeft: moderateScale(10),
        marginTop: moderateScale(5)
    }
})