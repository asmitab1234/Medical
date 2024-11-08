import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { Icon } from 'react-native-basic-elements'

const PostSmallPhoto = ({ item }) => {
    return (
        <View
            style={{ marginRight: moderateScale(15) }}>
            <View
                style={styles.crossBos}>
                <Icon
                    name='close'
                    type='AntDesign'
                    size={16}
                />
            </View>
            <Image
                source={item.img}
                style={styles.imgStgyl}
            />
        </View>
    )
}

export default PostSmallPhoto

const styles = StyleSheet.create({
    imgStgyl: {
        height: moderateScale(60),
        width: moderateScale(60),
        borderRadius: moderateScale(8),
        // marginRight: moderateScale(15)
    },
    crossBos: {
        backgroundColor: '#F1EDEDD4',
        alignItems: 'center',
        justifyContent: 'center',
        height: moderateScale(20),
        width: moderateScale(20),
        borderRadius: moderateScale(20),
        position: 'absolute',
        top: moderateScale(4),
        right: moderateScale(4),
        zIndex: 2,
        elevation: 1,
        borderWidth: moderateScale(0.2)
    }
})