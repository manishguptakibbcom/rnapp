import React from 'react';
import { Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';
import Home from '../screens/Home';
import AddRoom from '../screens/AddRoom';
import Room from '../screens/Room';
import Login from '../screens/Login';
import Splash from '../screens/Splash';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import DrawerStack from './DrawerStack'

const ChatAppStack = createStackNavigator();
const ModalStack = createStackNavigator();

function ChatApp() {
    return (
        <ChatAppStack.Navigator
            screenOptions={{
            headerStyle: {
                backgroundColor: '#064e89'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                fontSize: 22
            }
            }}
        >
            <ChatAppStack.Screen
            name='Home'
            component={Home}
            options={({ navigation }) => ({
                headerRight: () => (
                <IconButton
                    icon='message-plus'
                    size={28}
                    color='#ffffff'
                    onPress={() => navigation.navigate('AddRoom')}
                />
                ),
                headerLeft: () => (
                <IconButton
                    icon='logout-variant'
                    size={28}
                    color='#ffffff'
                    onPress={() => logout()}
                />
                )
            })}
            />
            <ChatAppStack.Screen
            name='Room'
            component={Room}
            options={({ route }) => ({
                title: "Room"
              })}
            />
            <ChatAppStack.Screen
            name='Drawer'
            component={DrawerStack}
            options={({ navigation }) => ({
                headerLeft: () => (
                <IconButton
                    icon='menu'
                    size={28}
                    color='#ffffff'
                    onPress={()=>{navigation.openDrawer()}}
                />
                )
            })}
            />
           <ChatAppStack.Screen name='Login' component={Login} />
        </ChatAppStack.Navigator>
    );
  }
  const Stack = createStackNavigator();
  export default function HomeStack() {
    return (
      <ModalStack.Navigator mode='modal' headerMode='none'>
        <ModalStack.Screen name='ChatApp' component={ChatApp} />
        <ModalStack.Screen name='AddRoom' component={AddRoom} />
        <ModalStack.Screen name='Splash' component={Splash} />
        <ModalStack.Screen name='SignIn' component={SignIn} />
        <ModalStack.Screen name='SignUp' component={SignUp} />
      </ModalStack.Navigator>
    );
}
   