import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, StatusBar, Animated, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform,Image,TouchableOpacity  } from 'react-native'
import {height,width} from '../utils/Dimensions'

const SignIn = () => {
    
    return (
      <SafeAreaView style={ { flex: 1 } }>
      <KeyboardAvoidingView
      behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
      style={ { flex: 1 } }
    >
        <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../../assets/omg.png')} style={styles.logo} resizeMode="stretch"></Image>
        </View>
        
        <View style={styles.footer}>  
          <ScrollView  contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}>    
          <View style={styles.textInput} >
              <TextInput  
                secureTextEntry
                style={styles.inputText}
                placeholder="Enter First Name" 
                placeholderTextColor="#776f6f"
                onChangeText={() => {}}/>
            </View>

            <View style={styles.textInput} >
              <TextInput  
                secureTextEntry
                style={styles.inputText}
                placeholder="Enter Last Name" 
                placeholderTextColor="#776f6f"
                onChangeText={() => {}}/>
            </View>
            <TouchableOpacity style={{alignSelf:"flex-start",marginTop:25}}>  
              <View style={styles.button}>  
                  <Text style={styles.buttonText}>Sign In</Text>  
              </View>  
            </TouchableOpacity> 
          </ScrollView>
        </View>
      </View>
      </KeyboardAvoidingView>
  </SafeAreaView>
    );
}
export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#064e89',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  header:{
    flex:2,
    justifyContent:'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  logo :{
    width: height*0.34,
    height: height*0.1334,
  },
  footer:{
    flex:3,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  textInput: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 25,
    backgroundColor:"#FFF",
    borderRadius:15,
    justifyContent:"center",
    paddingLeft:25
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  errorMsg: {
    color: '#FFF',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  button: {  
    alignItems: 'center',  
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    borderRadius:10,
    elevation:10,
  },  
  buttonText: {  
    padding: 10,  
    color: '#776f6f', 
    fontSize: 16
  }  
})