import React,{Component, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import coverPic from '../../images/camera_wallpaper.jpg';
import { useNavigation } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';
import { Alert, Button,StatusBar, TextInput, View, StyleSheet ,Text,Image,ImageBackground, TouchableWithoutFeedback} from 'react-native';

const Cover = ({navigation}) => {
    useEffect(() => {
         setTimeout(()=>{()=>{navigation.navigate('Home')}},2000) 
        },[]);
    return(
          
        <View style={styles.container}>
                <StatusBar backgroundColor={'transparent'} translucent/> 
                    <ImageBackground source={coverPic} style={styles.image}>
                     <Text style={styles.quote}>A picture is worth a thousand words...</Text> 
                     <Button title="Explore   -->>" onPress={()=>navigation.navigate("Home")} color="black">
                     {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
                     </Button>
                     </ImageBackground> 
        </View>
    );
    // }
}
export default Cover;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
   
    quote: {
        color: 'white',
        opacity: 0.8,
        fontFamily: 'ariana',
        fontSize: 60,
        padding: 20,
        backgroundColor: "#000000a0"
    },
    container:{
        flex: 1,
        flexDirection: 'column'
    },

  });
  
