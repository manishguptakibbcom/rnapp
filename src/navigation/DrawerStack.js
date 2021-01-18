import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import AddRoom from '../screens/AddRoom';
import Room from '../screens/Room';
import Login from "../screens/Login";
import DrawerContent from '../screens/Drawer'
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
    <Drawer.Navigator drawerContentOptions={{
        activeTintColor: '#2f4050',
        itemStyle: {marginVertical: 40},
        backgroundColor: "#2f4050",
        inactiveTintColor: "white",
        activeTintColor: "white",
        activeBackgroundColor : "white",
        inactiveBackgroundColor : "white",
        labelStyle : {color: "white"},
        style: {color:"white"}
      }} drawerContent={props=> <DrawerContent {...props}/> }>
        <Drawer.Screen name="Room" component={Room} />
        <Drawer.Screen name="AddRoom" component={AddRoom} />
    </Drawer.Navigator>
);

export default DrawerNavigation;