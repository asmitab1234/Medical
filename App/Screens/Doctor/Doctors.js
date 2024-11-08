import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Container, Icon, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import DoctorList from '../../Components/Doctor/DoctorList'
import DoctorDistrictModal from '../../Components/Doctor/DoctorDistrictModal'
import DoctorHeader from '../../Components/Header/DoctorHeader'

const Doctors = () => {
    const colors = useTheme()
   
    const testimonialArr = [
        {
            img: require('../../Assets/home/doctor1.jpg'),
            name: 'Dr. Raymond',
            degree: 'MD, Orthopedist',
            experience: '5 Year Experience',
            address: 'kolkata',
            rating: '4.4',
        },
        {
            img: require('../../Assets/home/doctor2.jpg'),
            name: 'Dr. Raymond',
            degree: 'MD, Orthopedist',
            experience: '5 Year Experience',
            address: 'kolkata',
            rating: '4.4',
        },
        {
            img: require('../../Assets/home/doctor1.jpg'),
            name: 'Dr. Raymond',
            degree: 'MD, Orthopedist',
            experience: '5 Year Experience',
            address: 'kolkata',
            rating: '4.4',
        },
        {
            img: require('../../Assets/home/doctor2.jpg'),
            name: 'Dr. Raymond',
            degree: 'MD, Orthopedist',
            experience: '5 Year Experience',
            address: 'kolkata',
            rating: '4.4',
        },
        {
            img: require('../../Assets/home/doctor1.jpg'),
            name: 'Dr. Raymond',
            degree: 'MD, Orthopedist',
            experience: '5 Year Experience',
            address: 'kolkata',
            rating: '4.4',
        },
        {
            img: require('../../Assets/home/doctor2.jpg'),
            name: 'Dr. Raymond',
            degree: 'MD, Orthopedist',
            experience: '5 Year Experience',
            address: 'kolkata',
            rating: '4.4',
        },
    ]
    return (
        <Container>
            <DoctorHeader title='Doctors' />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}>

                {testimonialArr.map((item, index) => (
                    <DoctorList
                        key={index}
                        item={item}
                    />
                ))}

            </ScrollView>
          
        </Container>
    )
}

export default Doctors

const styles = StyleSheet.create({
  
})