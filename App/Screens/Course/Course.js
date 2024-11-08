import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackHeader from '../../Components/Header/BackHeader'
import { Container } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import CourseCard from '../../Components/Course/CourseCard'

const Course = () => {
  const courseListArr = [
    {
      title: 'Course Title',
      time: '2:00 min',
      desc: 'Lorem Ipsum is simply dummy',
      by: 'Aditi Borthakur'
    },
    {
      title: 'Course Title',
      time: '2:00 min',
      desc: 'Lorem Ipsum is simply dummy',
      by: 'Aditi Borthakur'
    },
    {
      title: 'Course Title',
      time: '2:00 min',
      desc: 'Lorem Ipsum is simply dummy',
      by: 'Aditi Borthakur'
    },
    {
      title: 'Course Title',
      time: '2:00 min',
      desc: 'Lorem Ipsum is simply dummy',
      by: 'Aditi Borthakur'
    },
    {
      title: 'Course Title',
      time: '2:00 min',
      desc: 'Lorem Ipsum is simply dummy',
      by: 'Aditi Borthakur'
    },
    {
      title: 'Course Title',
      time: '2:00 min',
      desc: 'Lorem Ipsum is simply dummy',
      by: 'Aditi Borthakur'
    },
    {
      title: 'Course Title',
      time: '2:00 min',
      desc: 'Lorem Ipsum is simply dummy',
      by: 'Aditi Borthakur'
    },
    {
      title: 'Course Title',
      time: '2:00 min',
      desc: 'Lorem Ipsum is simply dummy',
      by: 'Aditi Borthakur'
    },
    {
      title: 'Course Title',
      time: '2:00 min',
      desc: 'Lorem Ipsum is simply dummy',
      by: 'Aditi Borthakur'
    },
  ]
  return (
    <Container>
      <BackHeader title='Course' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: moderateScale(15) }} >

        {courseListArr.map((item, index) => (
          <CourseCard
            key={index}
            item={item}
          />
        ))}

      </ScrollView>
    </Container >
  )
}

export default Course

const styles = StyleSheet.create({})