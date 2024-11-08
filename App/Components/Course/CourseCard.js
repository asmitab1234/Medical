import { Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Icon, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
import Star from '../Star/Star'

const CourseCard = ({ item }) => {
    const colors = useTheme()
    return (
        <Pressable
            onPress={() => NavigationService.navigate('CourseSingleScreen')}
            style={{
                ...styles.mainCard,
                backgroundColor: colors.white,
            }}>
            <View>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1523289333742-be1143f6b766?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D' }}
                    style={styles.courseImage}
                />
                <Icon
                    name='play'
                    type='FontAwesome5'
                    size={30}
                    color={'#FFFFFF'}
                    style={styles.buttonPlay}
                />
                <Text
                    style={{
                        ...styles.timeTextforVideo,
                        color: '#FFFFFF'
                    }}>
                    {item.time}
                </Text>
            </View>
            <View
                style={{
                    marginLeft: moderateScale(10),
                    flex: 1
                }}>
                <Text
                    style={styles.titleTesxt}>
                    {item.title}
                </Text>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: moderateScale(5),
                    }}>
                    <Star
                        ActiveStarColor={colors.buttonColor}
                        starSize={15}
                        DeactivateStarName='star-o'
                        DeactivateStarType='FontAwesome'
                        ActiveStarName='star'
                        ActiveStarType='FontAwesome'
                        DeactivateStarColor={colors.buttonColor}

                    />
                    <Text
                        style={{
                            fontFamily: FONTS.Roboto.light,
                            fontSize: moderateScale(13),
                            marginLeft: moderateScale(5)
                        }}>
                        (4)
                    </Text>
                </View>

                <Text
                    style={styles.descTesxt}>
                    {item.desc} ...
                </Text>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                    <Text
                        style={styles.byText}>
                        By: {item.by}
                    </Text>
                    <View style={{ flex: 1 }} />
                    <Text
                        style={{
                            ...styles.byText,
                        }}>
                        Date:{'\n'}22.05.24
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

export default CourseCard

const styles = StyleSheet.create({
    mainCard: {
        elevation: 5,
        marginTop: moderateScale(2),
        marginBottom: moderateScale(10),
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(8),
        borderRadius: moderateScale(8),
        borderWidth: moderateScale(0.2),
        flexDirection: 'row',
        // alignItems: 'center',
        shadowOffset: {
            height: 2,
            width: 0.2
        },
        shadowColor: '#000',
        shadowOpacity: 0.2
    },
    courseImage: {
        height: moderateScale(120),
        width: moderateScale(120),
        borderRadius: moderateScale(8)
    },
    titleTesxt: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(15)
    },
    descTesxt: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(13),
        width: '80%',
        marginVertical: moderateScale(4)
    },
    byText: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(11)
    },
    buttonPlay: {
        position: 'absolute',
        top: moderateScale(90) / 2,
        alignSelf: 'center'
    },
    timeTextforVideo: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13),
        position: 'absolute',
        bottom: moderateScale(5),
        right: moderateScale(10)
    }
})