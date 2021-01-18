import React from 'react'
import { StyleSheet, Image, Text, TextInput, View, Button,StatusBar,Animated, Dimensions } from 'react-native'
import {useTheme} from '@react-navigation/native';
import {height,width} from '../utils/Dimensions'

const Splash = () => {
    
    return (
        <View style={styles.container}>
          <Image source={require('../../assets/omg.png')} style={styles.logo} resizeMode="stretch"></Image>
        </View>
    );
}
export default Splash;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#064e89',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      justifyContent:'center',
      alignItems: 'center',
    },
    logo :{
      width: height*0.34,
      height: height*0.1334,
    },
})