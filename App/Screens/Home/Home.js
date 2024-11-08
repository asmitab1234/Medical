import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppButton, Container, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import HomeHeader from '../../Components/Header/HomeHeader'
import PostCard from '../../Components/Home/PostCard'

const Home = () => {
    const postArr = [
        {
            img:require('../../Assets/home/user1.jpg'),
            name: ' Moanish Baruah',
            date: '25 Feb, 2008',
            time: '7:00 PM',
            text: 'Lorem ipsum dolor sit amet consectetur. Maecenas consectetur.',
            type: 'img',
            vdo:require('../../Assets/home/rehab1.jpg')

        },
        {
            img:require('../../Assets/home/user2.jpg'),
            name: 'Amrita Borborua',
            date: '25 Feb, 2008',
            time: '7:00 PM',
            text: 'Lorem ipsum dolor sit amet consectetur. Maecenas consectetur.amet consectetur. Maecenas consectetur',
            type: 'texttyp',

        },
        {
            img:require('../../Assets/home/user3.jpg'),
            name: 'Amit Borthakur',
            date: '25 Feb, 2008',
            time: '7:00 PM',
            text: 'Lorem ipsum dolor sit amet consectetur. Maecenas consectetur.',
            type: 'img',
            vdo:require('../../Assets/home/rehab3.jpg')

        },
        {
            img:require('../../Assets/home/user4.jpg'),
            name: 'Manisha Gogoi',
            date: '25 Feb, 2008',
            time: '7:00 PM',
            text: 'Lorem ipsum dolor sit amet consectetur. Maecenas consectetur.',
            type: 'video',
            vdo:require('../../Assets/home/rehab2.jpg')

        },
        {
            img:require('../../Assets/home/user1.jpg'),
            name: 'Adhira Uddin',
            date: '25 Feb, 2008',
            time: '7:00 PM',
            text: 'Lorem ipsum dolor sit amet consectetur. Maecenas consectetur.',
            type: 'img',
            vdo:require('../../Assets/home/rehab5.jpg')

        },

    ]
    return (
        <Container>
            <HomeHeader />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={false}>
                {postArr.map((item, index) => (
                    <PostCard
                        key={index}
                        item={item}
                    />
                ))}
            </ScrollView>
        </Container>
    )
}

export default Home

const styles = StyleSheet.create({})