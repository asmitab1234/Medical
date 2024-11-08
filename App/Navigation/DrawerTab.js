import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import Home from '../Screens/Home/Home';

const Drawer = createDrawerNavigator();

function DrawerTab() {
    return (
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }}
            drawerContent={props => <DrawerContent {...props}/>}
        >
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator >
    );
}
export default DrawerTab