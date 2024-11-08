import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import NotificationComponent from '../../Components/Notification/NotificationComponent'

const Notification = () => {
    const notificationArr = [
        {
            img: require('../../Assets/home/user1.jpg'),
            notify: 'you have a new notification regarding job requirments',
            time: '2 hours ago',
        },
        {
            img: require('../../Assets/home/user2.jpg'),
            notify: 'you have a new notification regarding job requirments',
            time: '2 hours ago',
        },
        {
            img: require('../../Assets/home/user3.jpg'),
            notify: 'you have a new notification regarding job requirments',
            time: '2 hours ago',
        },
        {
            img: require('../../Assets/home/user4.jpg'),
            notify: 'you have a new notification regarding job requirments',
            time: '2 hours ago',
        },
        {
            img: require('../../Assets/home/user1.jpg'),
            notify: 'you have a new notification regarding job requirments',
            time: '2 hours ago',
        },
        {
            img: require('../../Assets/home/user2.jpg'),
            notify: 'you have a new notification regarding job requirments',
            time: '2 hours ago',
        },
        {
            img: require('../../Assets/home/user3.jpg'),
            notify: 'you have a new notification regarding job requirments',
            time: '2 hours ago',
        },
        {
            img: require('../../Assets/home/user4.jpg'),
            notify: 'you have a new notification regarding job requirments',
            time: '2 hours ago',
        },
        {
            img: require('../../Assets/home/user1.jpg'),
            notify: 'you have a new notification regarding job requirments',
            time: '2 hours ago',
        },
        {
            img: require('../../Assets/home/user2.jpg'),
            notify: 'you have a new notification regarding job requirments',
            time: '2 hours ago',
        },
        {
            img: require('../../Assets/home/user3.jpg'),
            notify: 'you have a new notification regarding job requirments',
            time: '2 hours ago',
        },
        {
            img: require('../../Assets/home/user4.jpg'),
            notify: 'you have a new notification regarding job requirments',
            time: '2 hours ago',
        },
    ]
    return (
        <Container>
            <BackHeader title='Notification' />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}>
                {notificationArr.map((item, index) => (
                    <NotificationComponent
                        key={index}
                        item={item}
                    />
                ))}
            </ScrollView>
        </Container>
    )
}

export default Notification

const styles = StyleSheet.create({})