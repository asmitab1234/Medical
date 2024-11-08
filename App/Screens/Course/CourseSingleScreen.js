import { Dimensions, Image, ImageBackground, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { AppButton, Container, Icon, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import CouseVideoPlayer from './CouseVideoPlayer'
import LessonsSection from '../../Components/Course/LessonsSection'
import Star from '../../Components/Star/Star'
const { height, width } = Dimensions.get('window')
import Modal from "react-native-modal";
import AddRating from '../../Components/Course/AddRating'
import NavigationService from '../../Services/Navigation'

const CourseSingleScreen = () => {
    const colors = useTheme()

    const [seeMore, setSeeMore] = useState('')
    const onClick = () => {
        setSeeMore(!seeMore)
    }

    const [isVisisbleModal, setVisisbleModal] = useState(false);
    const toggleModal = () => {
        setVisisbleModal(!isVisisbleModal);
    }
    const lessonsArr = [
        {
            title: 'Lorem Ipsum is simply dummy text of the printing',
            time: '5:00'
        },
        {
            title: 'Lorem Ipsum is simply dummy text of the printing',
            time: '5:00'
        },
        {
            title: 'Lorem Ipsum is simply dummy text of the printing',
            time: '5:00'
        },
        {
            title: 'Lorem Ipsum is simply dummy text of the printing',
            time: '5:00'
        },
        {
            title: 'Lorem Ipsum is simply dummy text of the printing',
            time: '5:00'
        },
        {
            title: 'Lorem Ipsum is simply dummy text of the printing',
            time: '5:00'
        },
    ]

    return (
        <Container>
            <StatusBar backgroundColor={'transparent'} barStyle='dark-content' />

            <View style={{
                width: '100%',
                height: moderateScale(230),
                backgroundColor: "#000"
            }}>
                <CouseVideoPlayer url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' />
            </View>

            {/* <ImageBackground
                    source={{ uri: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlfGVufDB8fDB8fHww' }}
                    style={styles.imageStyl}
                >
                    <Icon
                        name='play'
                        type='AntDesign'
                        color={'#FFFFFF'}
                        style={styles.iconStyl}
                        size={40}
                    />
                </ImageBackground> */}

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}>
                <Text
                    style={styles.title}>
                    Lorem Ipsum is simply dummy text
                </Text>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: moderateScale(8)

                    }}>
                    <Image
                        source={require('../../Assets/home/user2.jpg')}
                        style={styles.userImg}
                    />
                    <View>
                        {/* <Text
                        style={{
                            ...styles.lableText,
                            marginLeft: moderateScale(10),
                        }}>
                        Mentor : {' '} */}
                        <Text
                            style={{
                                ...styles.lableText,
                                marginLeft: moderateScale(10),
                            }}>
                            Aditi Borthakur
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: moderateScale(5),
                                marginLeft: moderateScale(10),
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
                        {/* </Text> */}
                    </View>
                </View>

                <Text
                    style={{
                        ...styles.lableText,
                        marginTop: moderateScale(15)
                    }}>
                    Description :
                </Text>

                <View>
                    <Text
                        style={{
                            ...styles.textStyl,
                            // marginTop: moderateScale(5)
                            // width: '70%'
                        }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galleyLorem Ipsum is simply dummy text{' '}
                    </Text>
                    {/* <Pressable>
                            <Text
                                style={{
                                    ...styles.lableText,
                                    fontSize: moderateScale(13)
                                }}>
                                Read More...
                            </Text>
                        </Pressable> */}

                </View>
                <Text
                    style={{
                        ...styles.lableText,
                        marginTop: moderateScale(10)
                    }}>
                    Language : {' '}
                    <Text
                        style={{
                            ...styles.textStyl,
                        }}>
                        Hindi
                    </Text>
                </Text>

                <Text
                    style={{
                        ...styles.lableText,
                    }}>
                    Date : {' '}
                    <Text
                        style={{
                            ...styles.textStyl,
                        }}>
                        22.05.24
                    </Text>
                </Text>

                <Text
                    style={{
                        ...styles.lableText,
                        marginTop: moderateScale(15)
                    }}>
                    Lessons :
                </Text>

                {lessonsArr.map((item, index) => (
                    <LessonsSection
                        key={index}
                        item={item}
                    />
                ))}

                <AppButton
                    title="Give Ratting"
                    // gradient={true}
                    // gradientColors={['#13B32E', '#044906']}
                    // gradientStart={{
                    //     x: 0, y: 1
                    // }}
                    // gradientEnd={{
                    //     x: 1, y: 1
                    // }}
                    textStyle={styles.lableText}
                    style={styles.RatebuttonStyl}
                    onPress={toggleModal}
                />

                <AppButton
                    title="Question & Answer"
                    gradient={true}
                    gradientColors={['#13B32E', '#044906']}
                    gradientStart={{
                        x: 0, y: 1
                    }}
                    gradientEnd={{
                        x: 1, y: 1
                    }}
                    textStyle={styles.lableText}
                    style={styles.buttonStyl}
                    onPress={() => NavigationService.navigate('Quiz')}
                />
            </ScrollView>
            <Modal isVisible={isVisisbleModal}
                style={{
                    flex: 1,
                    marginHorizontal: moderateScale(10),
                    marginVertical: moderateScale(30)
                }}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                onPress={() => setVisisbleModal(false)}>
                <AddRating
                    setVisisbleModal={setVisisbleModal} />
            </Modal>
        </Container>
    )
}

export default CourseSingleScreen

const styles = StyleSheet.create({
    imageStyl: {
        height: height / 3.5,
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(18),
        marginTop: moderateScale(10)
    },
    lableText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(15)
    },
    textStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(12)
    },
    buttonStyl: {
        marginHorizontal: 0,
        marginTop: moderateScale(10),
        height: moderateScale(45),
        borderRadius: moderateScale(6),
        marginBottom: moderateScale(20)
    },
    RatebuttonStyl: {
        marginHorizontal: 0,
        marginTop: moderateScale(20),
        height: moderateScale(45),
        borderRadius: moderateScale(6),
        backgroundColor: 'transparent',
        borderWidth: moderateScale(1)
    },
    userImg: {
        height: moderateScale(48),
        width: moderateScale(48),
        borderRadius: moderateScale(70)
    }
})