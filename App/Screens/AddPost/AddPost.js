import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppTextInput, Container, Picker, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import AddPostHeader from '../../Components/Header/AddPostHeader'
import ImageCropPicker from 'react-native-image-crop-picker'
import PostSmallPhoto from '../../Components/Post/PostSmallPhoto'
const { height, width } = Dimensions.get('window')

const AddPost = () => {
  const colors = useTheme()
  const [dropdownValue, setDropdownValue] = useState('')
  const [dropdownValue1, setDropdownValue1] = useState('')
  const [select, setselect] = useState('')

  const pick = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const smallPhototArr = [
    {
      img: require('../../Assets/home/1.jpg'),
    },
    {
      img: require('../../Assets/home/2.jpg'),
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
      <AddPostHeader title='Create Post' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: moderateScale(15), flex: 1 }} >
        {/* <View style={{
        ...styles.viewLine,
        marginVertical: 0,
        marginBottom: moderateScale(10)
      }} /> */}
        <View
          style={styles.iconName}>
          <Image
            source={{ uri: 'https://plus.unsplash.com/premium_photo-1714839367832-43d2363fff46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8' }}
            style={styles.imageUser}
          />
          <View
            style={{ marginLeft: moderateScale(13) }}>
            <Text
              style={styles.textStyle}>
              Monalisha Baruah
            </Text>
            {/* <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%'
              }}>
              <Picker
                options={[
                  {
                    label: 'Public',
                    value: 'Public'
                  },
                  {
                    label: 'Private',
                    value: 'Private'
                  },
                ]}
                placeholder="Select"
                textStyle={{
                  fontSize: 15
                }}
                selectedValue={dropdownValue}
                onValueChange={(val) => setDropdownValue(val)}
                containerStyle={{
                  ...styles.picker,
                  width: width / 2.6
                }}

              />

              {dropdownValue == 'Private' ?
              <Picker
                options={[
                  {
                    label: 'Item1',
                    value: 'Item1'
                  },
                  {
                    label: 'Item2',
                    value: 'Item2'
                  },
                  {
                    label: 'Item3',
                    value: 'Item3'
                  },
                ]}
                placeholder="Select Group"
                textStyle={{
                  fontSize: 15
                }}
                selectedValue={dropdownValue1}
                onValueChange={(val) => setDropdownValue1(val)}
                containerStyle={{
                  ...styles.picker,
                  marginLeft: moderateScale(10)
                }}

              />
              : null
            }
            </View> */}
          </View>
        </View>


        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>

          <TouchableOpacity
            onPress={() => pick()}
            style={{
              ...styles.photosBox,
              borderColor: colors.buttonColor
            }}>
            <Image
              source={require('../../Assets/Post/images.png')}
              resizeMode='contain'
              tintColor={colors.buttonColor}
              style={{
                ...styles.postImage,
              }}
            />
            <Text
              style={{
                ...styles.textStyle,
                marginTop: moderateScale(5),
                fontFamily: FONTS.Roboto.medium,
                color: colors.buttonColor
              }}>
              Add Photos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => pick()}
            style={{
              ...styles.photosBox,
              borderColor: colors.buttonColor
            }}>
            <Image
              source={require('../../Assets/Post/video.png')}
              resizeMode='contain'
              style={{
                ...styles.postImage,
              }}
              tintColor={colors.buttonColor}
            />
            <Text
              style={{
                ...styles.textStyle,
                marginTop: moderateScale(5),
                fontFamily: FONTS.Roboto.medium,
                color: colors.buttonColor
              }}>
              Add Videos
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: moderateScale(15),
          }}>
          {smallPhototArr.map((item, index) => (
            <PostSmallPhoto
              key={index}
              item={item}
            />
          ))}
        </View>

        <AppTextInput
          inputStyle={{
            fontFamily: FONTS.Roboto.medium,
            fontSize: moderateScale(15),
            textAlignVertical: "top"
          }}
          inputContainerStyle={{
            ...styles.inputContainer,

            borderColor: colors.buttonColor
          }}
          numberOfLines={6}
          placeholder='Share Your Thoughts'
        />

      </ScrollView>
    </Container >
  )
}

export default AddPost

const styles = StyleSheet.create({
  fontStyl: {
    fontFamily: FONTS.Roboto.light,
    fontSize: moderateScale(14),
    marginLeft: moderateScale(10)
  },
  viewLine: {
    height: moderateScale(0.2),
    width: '100%',
    backgroundColor: '#818181',
    marginVertical: moderateScale(20)
  },
  inputContainer: {
    borderWidth: 0,
    borderWidth: moderateScale(0.5)
  },
  IconView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(20),
    // marginHorizontal: moderateScale(15)
  },
  postImage: {
    height: moderateScale(20),
    width: moderateScale(20)
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(15),
    marginTop: moderateScale(13)
  },
  iconName: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginHorizontal: moderateScale(15),
    marginTop: moderateScale(10)
  },
  imageUser: {
    height: moderateScale(48),
    width: moderateScale(48),
    borderRadius: moderateScale(80)
  },
  picker: {
    justifyContent: 'center',
    height: moderateScale(25),
    width: '45%',
    borderRadius: moderateScale(5)
  },
  textStyle: {
    fontFamily: FONTS.Roboto.regular,
    fontSize: moderateScale(15)
  },
  cameraTextStyle: {
    fontFamily: FONTS.Roboto.regular,
    fontSize: moderateScale(14),
    marginLeft: moderateScale(8)
  },
  photosBox: {
    paddingVertical: moderateScale(30),
    paddingHorizontal: moderateScale(20),
    alignSelf: 'center',
    borderWidth: moderateScale(2),
    borderStyle: 'dashed',
    alignSelf: 'flex-start',
    marginVertical: moderateScale(20),
    borderRadius: moderateScale(15),
    alignItems: 'center',
    width: '48%'
  }
})