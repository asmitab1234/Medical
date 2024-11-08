import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Card, Icon, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const PostCard = ({ item }) => {
    const colors = useTheme()
    return (
        <Card
            shadow={false}
            style={{
                ...styles.mainCard,
            }}>
            <View
                style={styles.cardHeader}>
                <Image
                    source={item.img}
                    style={styles.userImage}
                />
                <View>
                    <Text numberOfLines={1}
                        style={styles.nameText}>
                        {item.name}
                    </Text>
                    <Text
                        style={styles.date}>
                        {item.date}
                    </Text>
                    <Text
                        style={styles.date}>
                        {item.time}
                    </Text>
                </View>
            </View>

            {/* <View style={{
                ...styles.viewLine,
                backgroundColor: colors.borderColor,
            }} /> */}

            {/* <Text
                style={styles.desc}>
                {item.text}
            </Text> */}

            {item.type == 'img' ?
                <View>
                    <Text
                        style={styles.desc}>
                        {item.text}
                    </Text>
                    <Image
                        source={item.vdo}
                        style={styles.postImagetStl}
                    />
                </View>
                :
                item.type == 'texttyp' ?
                    <Text
                        style={styles.desc}>
                        {item.text}
                    </Text>
                    :
                    item.type == 'video' ?

                        <View>
                            <Text
                                style={styles.desc}>
                                {item.text}
                            </Text>
                            <View>
                                <Image
                                    source={item.vdo}
                                    style={styles.postImagetStl}
                                />
                                <View
                                    style={styles.buttonPlay}
                                >
                                    <Image
                                        style={{
                                            height: moderateScale(25),
                                            width: moderateScale(25)
                                        }}
                                        source={require('../../Assets/home/play-button-arrowhead.png')}
                                        tintColor={'#fff'}
                                    />
                                </View>
                            </View>
                            {/* <Text
                                style={{
                                    ...styles.timeTextforVideo,
                                    color: '#FFFFFF'
                                }}>
                                1:00
                            </Text> */}
                        </View>
                        :
                        null}
        </Card>

    )
}

export default PostCard

const styles = StyleSheet.create({
    mainCard: {
        paddingHorizontal: moderateScale(0),
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10),
        marginBottom: moderateScale(9),
        borderRadius: moderateScale(15)
    },
    userImage: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(100),
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: moderateScale(8),
        // borderWidth:1
    },
    nameText: {
        fontFamily: FONTS.Roboto.medium,
        marginLeft: moderateScale(8),
        fontSize: moderateScale(14)
    },
    desc: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
        marginTop: moderateScale(10),
        marginHorizontal: moderateScale(8)
    },
    date: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(11),
        marginLeft: moderateScale(8),
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        // flex:1
    },
    postImagetStl: {
        height: moderateScale(250),
        width: '100%',
        marginTop: moderateScale(15),
        marginBottom:moderateScale(10)
        // resizeMode: "contain"
    },
    viewLine: {
        height: moderateScale(0.5),
        width: '100%',
        // marginVertical: moderateScale(10),
        marginTop: moderateScale(10)
    },
    buttonPlay: {
        position: 'absolute',
        top: moderateScale(220) / 2,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF91',
        borderRadius: moderateScale(30),
        height: moderateScale(60),
        width: moderateScale(60)
    },
    timeTextforVideo: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13),
        position: 'absolute',
        bottom: moderateScale(16),
        right: moderateScale(10)
    }

})