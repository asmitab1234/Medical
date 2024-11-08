import { Image, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../Constants/PixelRatio'
import { Text, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../Constants/Fonts'
import NavigationService from '../Services/Navigation'

const DrawerContent = () => {
  const colors = useTheme()
  const drawerlist = [
    {
      img: require('../Assets/Drawer/home.png'),
      title: 'Home',
      handelClick: 'Home',
    },
    {
      img: require('../Assets/Drawer/learning.png'),
      title: 'Course',
      handelClick: 'Course',
    },
    {
      img: require('../Assets/Drawer/certificate.png'),
      title: 'Certificate',
      handelClick: 'Cirtificate',
    },
    {
      img: require('../Assets/Drawer/meeting.png'),
      title: 'Meeting Link',
      handelClick: 'MeetingLink',
    },
    {
      img: require('../Assets/Drawer/privacy.png'),
      title: 'Privacy Policy',
      handelClick: 'Policy',
    },
    {
      img: require('../Assets/Drawer/terms-and-conditions.png'),
      title: 'Terms & Condition',
      handelClick: 'TermsAndCondition',
    },
    {
      img: require('../Assets/Drawer/testimonial.png'),
      title: 'Testimonial',
      handelClick: 'Testimonial',
    },
    {
      img: require('../Assets/Drawer/stethoscope.png'),
      title: 'Doctor',
      handelClick: 'Doctors',
    },
    {
      img: require('../Assets/Drawer/contact.png'),
      title: 'Contact Us',
      handelClick: 'ContactUs',
    },
  ]
  return (
    <View
      style={{ flex: 1 }}>
      <Image
        source={{ uri: 'https://plus.unsplash.com/premium_photo-1714839367832-43d2363fff46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8' }}
        style={styles.userImage}
      />
      <Text
        style={styles.nameText}>
        Monalisha Baruah
      </Text>

      <View style={{
        ...styles.viewLine,
        backgroundColor: colors.borderColor,
      }} />
      {drawerlist.map((item, index) => (
        <View
          key={index}>
          <TouchableOpacity
            onPress={() => NavigationService.navigate(item.handelClick)}
            style={{
              ...styles.row,
              marginHorizontal: moderateScale(15)
            }}>
            <Image
              source={item.img}
              style={styles.imageIcon}
            />
            <Text
              style={styles.textStyl}>
              {item.title}
            </Text>
          </TouchableOpacity>
          <View style={{
            ...styles.viewLine,
            backgroundColor: colors.borderColor,
          }} />
        </View>
      ))}

      <View style={{ flex: 1 }} />
      <Pressable
        style={{
          ...styles.row,
          marginHorizontal: moderateScale(25)
        }}
        onPress={() => NavigationService.navigate('SignIn')}>
        <Image
          source={require('../Assets/Drawer/logout.png')}
          style={styles.imageIcon}
        />
        <Text
          style={styles.logout}>
          Logout
        </Text>
      </Pressable>
    </View>
  )
}

export default DrawerContent

const styles = StyleSheet.create({
  userImage: {
    height: moderateScale(100),
    width: moderateScale(100),
    borderRadius: moderateScale(100),
    alignSelf: 'center',
    marginVertical: moderateScale(10)
  },
  textStyl: {
    fontFamily: FONTS.Roboto.medium,
    fontSize: moderateScale(15),
  },
  viewLine: {
    height: moderateScale(1),
    width: '100%',
    marginVertical: moderateScale(15),
    marginTop: moderateScale(10)
  },
  nameText: {
    fontFamily: FONTS.Roboto.bold,
    fontSize: moderateScale(15),
    textAlign: 'center'
  },
  logout: {
    fontFamily: FONTS.Roboto.medium,
    fontSize: moderateScale(15),
    marginVertical: moderateScale(15),
  },
  imageIcon: {
    height: moderateScale(18),
    width: moderateScale(18),
    marginRight: moderateScale(8)
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  }

})