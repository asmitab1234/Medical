import { View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Container, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const ContactUs = () => {
  const colors = useTheme()
  const socialArr = [
    {
      img: require('../../Assets/contactUs/facebook.png'),
      text: 'Stay Updated,Conected With Us on Facebook',
    },
    {
      img: require('../../Assets/contactUs/whatsapp.png'),
      text: 'Text Us to know More About us',
    },
    {
      img: require('../../Assets/contactUs/instagram.png'),
      text: 'Explore Our Visual World',
    },
    {
      img: require('../../Assets/contactUs/twitter.png'),
      text: 'Follow Us for Real Time Updates',
    },
  ]
  return (
    <Container>
      <BackHeader title='Contact Us' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}>

        <Text
          style={styles.HeadingText}>
          Get in Touch
        </Text>

        <Text
          style={styles.desc}>
          If you have any inquiries get in touch with us.{'\n'}
          We'll be happy to help you
        </Text>

        <TouchableOpacity
          style={{
            ...styles.contactBox,
            borderColor: colors.buttonColor
          }}>
          <Image
            source={require('../../Assets/contactUs/call.png')}
            style={styles.imgStyl}
          />
          <Text
            style={styles.infoText}>
            1234567890
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.contactBox,
            borderColor: colors.buttonColor,
            marginBottom: moderateScale(40)
          }}>
          <Image
            source={require('../../Assets/contactUs/email.png')}
            style={styles.imgStyl}
          />
          <Text
            style={styles.infoText}>
            xyz@gmail.com
          </Text>
        </TouchableOpacity>

        <Text
          style={styles.socialHeadingText}>
          Social Media
        </Text>

        {socialArr.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              ...styles.socialMediaBox,
              backgroundColor: colors.white
            }}>
            <Image
              source={item.img}
              style={styles.socialImgStyl}
            />
            <Text
              style={styles.infoText}>
              {item.text}
            </Text>

          </TouchableOpacity>
        ))}

      </ScrollView>
    </Container>
  )
}

export default ContactUs
const styles = StyleSheet.create({
  HeadingText: {
    fontFamily: FONTS.Roboto.bold,
    fontSize: moderateScale(28),
    textAlign: 'center',
  },
  desc: {
    fontFamily: FONTS.Roboto.light,
    fontSize: moderateScale(12),
    textAlign: 'center',
    marginTop: moderateScale(5),
    marginBottom: moderateScale(45)
  },
  contactBox: {
    paddingHorizontal: moderateScale(30),
    paddingVertical: moderateScale(17),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(30)
  },
  imgStyl: {
    height: moderateScale(18),
    width: moderateScale(18),
    marginRight: moderateScale(20)
  },
  infoText: {
    fontFamily: FONTS.Roboto.regular,
    fontSize: moderateScale(14),
  },
  socialHeadingText: {
    fontFamily: FONTS.Roboto.bold,
    fontSize: moderateScale(18),
    textAlign: 'center',
    marginBottom: moderateScale(10)
  },
  socialMediaBox: {
    paddingHorizontal: moderateScale(30),
    // paddingVertical: moderateScale(8),
    borderRadius: moderateScale(15),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(15),
    elevation: 5,
    height:moderateScale(70)
  },
  socialImgStyl: {
    height: moderateScale(28),
    width: moderateScale(28),
    marginRight: moderateScale(20)
  },
})