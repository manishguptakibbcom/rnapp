import React, { useState } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { IconButton, Title } from 'react-native-paper';
import FormButton from '../components/FormButton';

export default function Home(props) { 
  const { navigation } = props;
  //console.log(navigation);
    return ( 
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <FormButton
            title='Splash'
            modeValue='contained'
            uppercase={false}
            labelStyle={styles.buttonLabel}
            onPress={() => navigation.navigate('Splash')}
          />
          <FormButton
            title='SignIn'
            modeValue='contained'
            uppercase={false}
            labelStyle={styles.buttonLabel}
            onPress={() => navigation.navigate('SignIn')}
          />
          <FormButton
            title='Sign Up'
            modeValue='contained'
            uppercase={false}
            labelStyle={styles.buttonLabel}
            onPress={() => navigation.navigate('SignUp')}
          />
          <FormButton
            title='Drawer Screen'
            modeValue='contained'
            uppercase={false}
            labelStyle={styles.navButtonText}
            onPress={() => navigation.navigate('Drawer')}
          />
          <FormButton
            title='Create'
            modeValue='contained'
            labelStyle={styles.buttonLabel}
            onPress={() => navigation.navigate('Room',{text: "Second"})}
          />
        </View>
    );
}    

const styles = StyleSheet.create({
  navButtonText: {
    fontSize: 16
  },
  buttonLabel: {
    fontSize: 22
  }
});