import React from "react";
import { View, StyleSheet, Button, Image,SafeAreaView } from "react-native";
import {Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch, useTheme} from "react-native-paper"
import{ DrawerContentScrollView, DrawerItem,DrawerItemList} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import {height,width} from '../utils/Dimensions';

const DrawerContent = (props) => {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <Image source={require('../../assets/omg.png')} style={styles.logo} resizeMode="stretch"></Image>
                    </View>        
                                     <DrawerItem
                        icon={({color,size})=>(
                            <Icon name="home-outline" color={color} size={size} />
                        )}
                        label=" Dashboard"
                        onPress={()=>{props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                        icon={({color,size})=>(
                            <Icon name="account-outline" color={color} size={size} />
                        )}
                        label="Orders"
                        onPress={()=>{}}
                        />
                        <DrawerItem
                        icon={({color,size})=>(
                            <Icon name="bookmark-outline" color={color} size={size} />
                        )}
                        label="Payments"
                        onPress={()=>{}}
                        />
                        <DrawerItem
                        icon={({color,size})=>(
                            <Icon name="bookmark-outline" color={color} size={size} />
                        )}
                        label="Shipments"
                        onPress={()=>{}}
                        />
                        <DrawerItem color="red"
                        icon={({color,size})=>(
                            <Icon name="account-check-outline" color={color} size={size} />
                        )}
                        label="E-commerce"
                        onPress={() => {props.navigation.navigate('Support')}}
                        />
                        <DrawerItem
                        icon={({color,size})=>(
                            <Icon name="account-check-outline" color={color} size={size} />
                        )}
                        label="Products"
                        onPress={() => {props.navigation.navigate('Support')}}
                        />
                        <DrawerItem
                        icon={({color,size})=>(
                            <Icon name="account-check-outline" color={color} size={size} />
                        )}
                        label="Contacts"
                        onPress={() => {props.navigation.navigate('Support')}}
                        />
                        <DrawerItem color="red"
                        icon={({color,size})=>(
                            <Icon name="account-check-outline" color={"white"} size={size} />
                        )}
                        label="Settings"
                        onPress={() => {props.navigation.navigate('Support')}}
                        />
                </View>
                </DrawerContentScrollView>
        </View>
        
    //     <SafeAreaView style={{flex: 1}}> 
    //   {/*Top Large Image */}
    //   <Image source={require('../../assets/omg.png')} style={[styles.logo,{backgroundColor:"#064e89"}]} resizeMode="stretch"></Image>
    //   <DrawerContentScrollView {...props}>
    //   <Drawer.Section style={styles.drwerSection} >
    //                     <DrawerItem
    //                     icon={({color,size})=>(
    //                         <Icon name="home-outline" color={color} size={size} />
    //                     )}
    //                     label=" Dashboard"
    //                     onPress={()=>{props.navigation.navigate('Home')}}
    //                     />
    //                     <DrawerItem
    //                     icon={({color,size})=>(
    //                         <Icon name="account-outline" color={color} size={size} />
    //                     )}
    //                     label="Orders"
    //                     onPress={()=>{}}
    //                     />
    //                     <DrawerItem
    //                     icon={({color,size})=>(
    //                         <Icon name="bookmark-outline" color={color} size={size} />
    //                     )}
    //                     label="Payments"
    //                     onPress={()=>{}}
    //                     />
    //                     <DrawerItem
    //                     icon={({color,size})=>(
    //                         <Icon name="bookmark-outline" color={color} size={size} />
    //                     )}
    //                     label="Shipments"
    //                     onPress={()=>{}}
    //                     />
    //                     <DrawerItem
    //                     icon={({color,size})=>(
    //                         <Icon name="account-check-outline" color={color} size={size} />
    //                     )}
    //                     label="E-commerce"
    //                     onPress={() => {props.navigation.navigate('Support')}}
    //                     />
    //                     <DrawerItem
    //                     icon={({color,size})=>(
    //                         <Icon name="account-check-outline" color={color} size={size} />
    //                     )}
    //                     label="Products"
    //                     onPress={() => {props.navigation.navigate('Support')}}
    //                     />
    //                     <DrawerItem
    //                     icon={({color,size})=>(
    //                         <Icon name="account-check-outline" color={color} size={size} />
    //                     )}
    //                     label="Contacts"
    //                     onPress={() => {props.navigation.navigate('Support')}}
    //                     />
    //                     <DrawerItem color="red"
    //                     icon={({color,size})=>(
    //                         <Icon name="account-check-outline" color={"white"} size={size} />
    //                     )}
    //                     label="Settings"
    //                     onPress={() => {props.navigation.navigate('Support')}}
    //                     />
    //                 </Drawer.Section>
        
    //     <View style={styles.customItem}>
    //       <Text
    //         onPress={() => {
    //           Linking.openURL('https://aboutreact.com/');
    //         }}>
    //         Rate Us
    //       </Text>
    //       <Image
    //         source={{uri: BASE_PATH + 'star_filled.png'}}
    //         style={styles.iconStyle}
    //       />
    //     </View>
        
    //   </DrawerContentScrollView>
    //   <Text
    //     style={{
    //       fontSize: 16,
    //       textAlign: 'center',
    //       color: 'grey'
    //     }}>
    //     www.aboutreact.com
    //   </Text>
    // </SafeAreaView>
    );
}
export default DrawerContent;

const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

const styles = StyleSheet.create({
    drawerContent:{
        flex: 1
    },
    userInfoSection: {
        
    },
    title:{
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drwerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    logo :{
        width: height*0.34,
        height: height*0.1334,
    },
})