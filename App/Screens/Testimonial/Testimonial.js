import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import TestimonialComponent from '../../Components/Testimonial/TestimonialComponent'

const Testimonial = () => {
  const testimonialArr = [
    {
      img: require('../../Assets/home/user1.jpg'),
      name: 'Manish Barui',
      date: '10/10/24',
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but'
    },
    {
      img: require('../../Assets/home/user1.jpg'),
      name: 'Manish Barui',
      date: '10/10/24',
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but'
    },
    {
      img: require('../../Assets/home/user1.jpg'),
      name: 'Manish Barui',
      date: '10/10/24',
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but'
    },
    {
      img: require('../../Assets/home/user1.jpg'),
      name: 'Manish Barui',
      date: '10/10/24',
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but'
    },
    {
      img: require('../../Assets/home/user1.jpg'),
      name: 'Manish Barui',
      date: '10/10/24',
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but'
    },
  ]
  return (
    <Container>
      <BackHeader title='Testimonial' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}>
        {testimonialArr.map((item, index) => (
          <TestimonialComponent
            key={index}
            item={item}
          />
        ))}
      </ScrollView>
    </Container>
  )
}

export default Testimonial

const styles = StyleSheet.create({})