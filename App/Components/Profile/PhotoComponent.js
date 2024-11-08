import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'

const PhotoComponent = ({ item }) => {
    return (
        <Image
            source={item.img}
            style={styles.imgStyl}
        />
    )
}

export default PhotoComponent

const styles = StyleSheet.create({
    imgStyl: {
        height: moderateScale(100),
        width: moderateScale(100),
        borderRadius: moderateScale(3)
    }
})