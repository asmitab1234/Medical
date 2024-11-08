import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const LessonsSection = ({ item }) => {
    const colors = useTheme()
    return (
        <View
            style={styles.mainView}>
            <View
                style={{
                    ...styles.row,
                }}>
                <View
                    style={{
                        ...styles.playButtonCircle,
                        backgroundColor: colors.buttonColor
                    }}
                >
                    <Image
                        source={require('../../Assets/home/play-button-arrowhead.png')}
                        style={styles.playButton}
                        tintColor={'#fff'}
                    />
                </View>
                <Text
                    style={{
                        ...styles.titleText,
                        marginLeft: moderateScale(10)
                    }}>
                    {item.title}
                </Text>
            </View>

            <Text
                style={styles.timeText}>
                {item.time}
            </Text>
        </View>
    )
}

export default LessonsSection

const styles = StyleSheet.create({
    mainView: {
        marginTop: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: moderateScale(0.2),
        alignItems: 'center',
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(8),
        borderRadius: moderateScale(8)
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    playButtonCircle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: moderateScale(30),
        width: moderateScale(30),
        borderRadius: moderateScale(40),
        // backgroundColor:'#0AE419E6'
    },
    playButton: {
        height: moderateScale(14),
        width: moderateScale(14)
    },
    titleText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(12),
        width: '70%'
    },
    timeText: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(11),
    }
})