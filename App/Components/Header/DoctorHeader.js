import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppBar, Container, Icon, Text, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
import { moderateScale } from '../../Constants/PixelRatio'
import DoctorDistrictModal from '../Doctor/DoctorDistrictModal'
import Modal from "react-native-modal";

const DoctorHeader = ({ title = ' ', }) => {
    const colors = useTheme()
    const [isVisisbleModal, setVisisbleModal] = useState(false);
    const toggleModal = () => {
        setVisisbleModal(!isVisisbleModal);
    }
    return (
        <>
            <AppBar.Back
                title={title}
                // shadow={true}
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
                            <Pressable
                                onPress={toggleModal}
                                style={{
                                    ...styles.filterBox,
                                    backgroundColor: colors.buttonColor
                                }}>
                                <Icon
                                    name='filter'
                                    type='Ionicon'
                                    color={colors.pageBackgroundColor}
                                />
                            </Pressable>
                        )
                    }
                ]}
            />
            <Modal isVisible={isVisisbleModal}
                style={{
                    justifyContent: 'flex-end',
                    margin: 0,
                }}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                onBackdropPress={() => setVisisbleModal(false)}
            >
                <DoctorDistrictModal
                    setVisisbleModal={setVisisbleModal} />
            </Modal>
        </>
    )
}

export default DoctorHeader

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
        borderRadius: moderateScale(8)
    },
    filterBox: {
        height: moderateScale(30),
        width: moderateScale(30),
        borderRadius: moderateScale(4),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
    }
})