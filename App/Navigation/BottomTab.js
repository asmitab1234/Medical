import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, useTheme } from 'react-native-basic-elements';
import { Image, StyleSheet } from 'react-native';
import { moderateScale } from '../Constants/PixelRatio';
import DrawerTab from './DrawerTab';
import { FONTS } from '../Constants/Fonts';
import Profile from '../Screens/Profile/Profile';
import Course from '../Screens/Course/Course';
import AddPost from '../Screens/AddPost/AddPost';

const Tab = createBottomTabNavigator();

function BottomTab() {
    const colors = useTheme()
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.secondaryButtoncolor,
                tabBarLabelStyle: {
                    fontFamily: FONTS.Roboto.regular,
                    fontSize: moderateScale(12)
                },
            }}

            initialRouteName='DrawerTab'
        >
            <Tab.Screen
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name='home'
                            type='AntDesign'
                            color={focused?colors.secondaryButtoncolor:colors.primaryFontColor}
                        />
                    )
                }}
                name="DrawerTab"
                component={DrawerTab}
            />

            <Tab.Screen
                options={{
                    tabBarLabel: 'Add Post',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name='pluscircleo'
                            type='AntDesign'
                            color={focused?colors.secondaryButtoncolor:colors.primaryFontColor}
                        />
                    )
                }}
                name="AddPost"
                component={AddPost}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Course',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name='book-outline'
                            type='Ionicon'
                            color={focused?colors.secondaryButtoncolor:colors.primaryFontColor}
                        />
                    )
                }}
                name="Course"
                component={Course}
            />

            <Tab.Screen
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name='user-o'
                            type='FontAwesome'
                            color={focused?colors.secondaryButtoncolor:colors.primaryFontColor}
                        />
                    )
                }}
                name="Profile"
                component={Profile}
            />
        </Tab.Navigator>
    );
}
export default BottomTab
const styles = StyleSheet.create({
    bottomImg: {
        height: moderateScale(22),
        width: moderateScale(22)
    }
})