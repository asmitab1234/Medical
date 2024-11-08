import { StyleSheet, View } from 'react-native'
import React from 'react'
import { AppBar, Container } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
import { moderateScale } from '../../Constants/PixelRatio'

const BackHeader = ({ title = ' ', }) => {
    return (
        <AppBar.Back
            title={title}
            titleStyle={styles.tittleStyl}
            onLeftIconPress={() => NavigationService.back()}
            icon={{
                name: 'chevron-small-left',
                type: 'Entypo',
                size:moderateScale(35)
            }}
            titlePosition='left'
        />
    )
}

export default BackHeader

const styles = StyleSheet.create({
    tittleStyl: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(15)
    }
})