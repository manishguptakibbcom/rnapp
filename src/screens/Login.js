import React from 'react'
import { StyleSheet, Text, TextInput, View, Button,StatusBar,Animated } from 'react-native'
import {useTheme} from '@react-navigation/native';



export default function Login ({ navigation }) {
  const {colors} = useTheme();
  return (
    <View style={styles.contianer}>
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome</Text>
        </View>
        <Animated.View 
            animation="fadeInUpBig"
            style={[styles.footer, {backgroundColor: colors.background }]}
        ></Animated.View>
    </View>    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})