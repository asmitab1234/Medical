import { Dimensions, Image, ImageBackground, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppButton, Card, Container, Icon, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
import ProfileHeader from '../../Components/Header/DoctorHeader'
import ImageCropPicker from 'react-native-image-crop-picker'
import PhotoComponent from '../../Components/Profile/PhotoComponent'
const { height, width } = Dimensions.get('window')


const Profile = () => {
  const colors = useTheme()
  const pick = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const photosArr = [
    {
      img: require('../../Assets/home/rehab1.jpg'),
    },
    {
      img: require('../../Assets/home/rehab2.jpg'),
    },
    {
      img: require('../../Assets/home/rehab3.jpg'),
    },
    {
      img: require('../../Assets/home/rehab4.png'),
    },
    {
      img: require('../../Assets/home/rehab5.jpg'),
    },
    {
      img: require('../../Assets/home/4.jpg'),
    },
    {
      img: require('../../Assets/home/3.jpg'),
    },
  ]
  return (
    <Container>
      <BackHeader title='Profile' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}>

        <View
          style={{
            alignItems: 'center',
            alignSelf: 'center'
          }}>
          <ImageBackground
            source={require('../../Assets/home/4.jpg')}
            style={{
              height: height / 4,
              width,
            }}
          >
            <View
              style={{
                position: 'absolute',
                bottom: -80,
                left: 15,
                zIndex: 999,
              }}>
              <View>
                <Image
                  source={{ uri: 'https://plus.unsplash.com/premium_photo-1714839367832-43d2363fff46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8' }}
                  style={styles.imgStyl}
                />
                <TouchableOpacity
                  onPress={() => pick()}
                  style={styles.iconEditBox}>
                  <Icon
                    name='camera'
                    type='AntDesign'
                    size={16}
                    style={{
                      // zIndex:5
                    }}
                  />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  ...styles.nameTextStyl,
                  marginTop: moderateScale(10)
                }}>
                Monalisha Baruah
              </Text>
            </View>
          </ImageBackground>
          <View>
          </View>
        </View>

        <View
          style={{
            ...styles.rowHorizontal,
            marginTop: moderateScale(100)
          }}>

          <AppButton
            title="Add Post"
            textStyle={styles.lableText}
            style={styles.RatebuttonStyl}
            buttonIcon={{
              position: 'left',
              name: 'plus',
              type: 'AntDesign',
              color: colors.primaryFontColor
            }}
            onPress={() => NavigationService.navigate('AddPost')}
          />

          <AppButton
            title="Edit Profile"
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
            buttonIcon={{
              position: 'left',
              name: 'edit',
              type: 'AntDesign',
              color: colors.secondaryFontColor
            }}
            onPress={() => NavigationService.navigate('ProfileEdit')}
          />
        </View>

        <Text
          style={{
            ...styles.lableText,
            marginTop: moderateScale(15)
          }}>
          Details :
        </Text>

        <View
          style={{
            ...styles.Card_for_text,
            backgroundColor: colors.white
          }}>
          <View
            style={{
              ...styles.rowView,
              marginVertical: moderateScale(7)
            }}>
            <Image
              source={require('../../Assets/Profile//email.png')}
              style={styles.imgSttlIcon}
            />
            <Text
              style={styles.textStyl}>
              xyz@gmail.com
            </Text>
          </View>

          <View
            style={{
              ...styles.rowView,
              marginVertical: moderateScale(7)
            }}>
            <Image
              source={require('../../Assets/Profile/call.png')}
              style={styles.imgSttlIcon}
            />
            <Text
              style={styles.textStyl}>
              1234567890
            </Text>
          </View>

          <View
            style={{
              ...styles.rowView,
              marginVertical: moderateScale(7)
            }}>
            <Image
              source={require('../../Assets/Profile/location.png')}
              style={styles.imgSttlIcon}
            />
            <Text
              style={styles.textStyl}>
              Salt lake City, West Bengal, Kolkata, 700001
            </Text>
          </View>


          <View
            style={{
              ...styles.rowView,
              marginVertical: moderateScale(7)
            }}>
            <Image
              source={require('../../Assets/Profile/sex.png')}
              style={styles.imgSttlIcon}
            />
            <Text
              style={styles.textStyl}>
              Female
            </Text>
          </View>

          <View
            style={{
              ...styles.rowView,
              marginVertical: moderateScale(7)
            }}>
            <Image
              source={require('../../Assets/Profile/anti-age.png')}
              style={styles.imgSttlIcon}
            />
            <Text
              style={styles.textStyl}>
              22
            </Text>
          </View>
        </View>

        <View
          style={{
            ...styles.rowView,
            flexWrap: 'wrap',
            gap: 10,
            marginBottom: moderateScale(20)
          }}>
          {photosArr.map((item, index) => (
            <PhotoComponent
              key={index}
              item={item}
            />
          ))}
        </View>

      </ScrollView>
    </Container >
  )
}

export default Profile

const styles = StyleSheet.create({
  imgStyl: {
    height: moderateScale(100),
    width: moderateScale(100),
    borderRadius: moderateScale(80),
  },
  nameTextStyl: {
    fontFamily: FONTS.Roboto.bold,
    fontSize: moderateScale(14),
  },
  Card_for_text: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(8),
    borderRadius: moderateScale(5),
    elevation: 4,
    marginTop: moderateScale(14),
    marginBottom: moderateScale(20)
  },
  lableText: {
    fontFamily: FONTS.Roboto.bold,
    fontSize: moderateScale(13)
  },
  textStyl: {
    fontFamily: FONTS.Roboto.regular,
    fontSize: moderateScale(12),
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imgSttlIcon: {
    height: moderateScale(16),
    width: moderateScale(16),
    marginRight: moderateScale(10)
  },
  rowHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScale(10),
    marginHorizontal: moderateScale(10)
  },
  line: {
    // borderWidth:moderateScale(1),
    marginVertical: moderateScale(5),
    width: '100%',
    height: moderateScale(1)
  },
  iconEditBox: {
    padding: moderateScale(5),
    backgroundColor: '#E0E0E0',
    borderRadius: moderateScale(20),
    elevation: 2,
    borderWidth: moderateScale(0.2),
    position: 'absolute',
    right: moderateScale(15),
    bottom: moderateScale(10)
  },
  buttonStyl: {
    marginHorizontal: 0,
    height: moderateScale(42),
    borderRadius: moderateScale(6),
    width: '48%'
  },
  RatebuttonStyl: {
    marginHorizontal: 0,
    height: moderateScale(42),
    borderRadius: moderateScale(6),
    backgroundColor: 'transparent',
    borderWidth: moderateScale(1),
    width: '48%'
  },
})