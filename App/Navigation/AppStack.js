//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import BottomTab from './BottomTab';
import CourseSingleScreen from '../Screens/Course/CourseSingleScreen';
import Cirtificate from '../Screens/Cirtificate/Cirtificate';
import TermsAndCondition from '../Screens/TermsAndCondition/TermsAndCondition';
import Policy from '../Screens/PrivacyPolicy/Policy';
import MeetingLink from '../Screens/MeeetingLink/MeetingLink';
import SupportUs from '../Screens/Testimonial/Testimonial';
import ContactUs from '../Screens/ContactUs/ContactUs';
import Dashboard from '../Screens/Dashboard/Dashboard';
import Quiz from '../Screens/Course/Quiz';
import ProfileEdit from '../Screens/Profile/ProfileEdit';
import Notification from '../Screens/Notification/Notification';
import Doctors from '../Screens/Doctor/Doctors';

const Stack = createStackNavigator();

const AppStack = () => {
  // const { login_status } = useSelector(state => state.User)
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="CourseSingleScreen" component={CourseSingleScreen} />
      <Stack.Screen name="Cirtificate" component={Cirtificate} />
      <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} />
      <Stack.Screen name="Policy" component={Policy} />
      <Stack.Screen name="MeetingLink" component={MeetingLink} />
      <Stack.Screen name="Testimonial" component={SupportUs} />
      <Stack.Screen name="Doctors" component={Doctors} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
      <Stack.Screen name="Notification" component={Notification} />

    </Stack.Navigator>
  );
};

export default AppStack;
