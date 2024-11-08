import { Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import NavigationService from '../../Services/Navigation'
import { moderateScale } from '../../Constants/PixelRatio'
import { Icon, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'

const HomeHeader = () => {
    const colors = useTheme()
    return (
        <>
            <StatusBar backgroundColor={colors.pageBackgroundColor} />

            <View
                style={{
                    ...styles.rowView,
                    justifyContent: 'space-between',
                    marginTop: moderateScale(20),
                    marginHorizontal: moderateScale(15),
                    marginBottom: moderateScale(5)
                }}>
                <View
                    style={styles.rowView}>
                    <Pressable
                        onPress={() => NavigationService.openDrawer()}>
                        <Icon
                            name='three-bars'
                            type='Octicons'
                        />
                    </Pressable>
                    <View
                        style={{ marginLeft: moderateScale(15) }}>
                        <Text
                            style={styles.welcome}>
                            Welcome
                        </Text>
                        <Text
                            style={styles.name}>
                            Sara Tylor
                        </Text>
                    </View>
                </View>
                <Icon
                    name='notifications-sharp'
                    type='Ionicon'
                    size={28}
                    onPress={() => NavigationService.navigate('Notification')}
                />
            </View>

        </>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageStyl: {
        height: moderateScale(50),
        width: moderateScale(50),
        borderRadius: moderateScale(80)
    },
    welcome: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(19)
    },
    name: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(12)
    }
})