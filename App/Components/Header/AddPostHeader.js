import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppBar, Container, Text, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
import { moderateScale } from '../../Constants/PixelRatio'

const AddPostHeader = ({ title = ' ', }) => {
    const colors = useTheme()
    return (
        <AppBar.Back
            title={title}
            shadow={true}
            titleStyle={styles.tittleStyl}
            onLeftIconPress={() => NavigationService.back()}
            icon={{
                name: 'chevron-small-left',
                type: 'Entypo',
                size: moderateScale(35)
            }}
            titlePosition='left'
            rightActions={[
                {
                    icon: (
                        <TouchableOpacity
                            style={{
                                ...styles.boxNext,
                                backgroundColor: colors.secondaryButtoncolor
                            }}>
                            <Text
                                style={{
                                    ...styles.tittleStyl,
                                    color: colors.pageBackgroundColor,
                                    fontFamily:FONTS.Roboto.regular
                                }}>
                                Post
                            </Text>
                        </TouchableOpacity>
                    )
                }
            ]}
        />
    )
}

export default AddPostHeader

const styles = StyleSheet.create({
    tittleStyl: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(15)
    },
    boxNext: {
        elevation: 3,
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(5),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:moderateScale(8)
    }
})