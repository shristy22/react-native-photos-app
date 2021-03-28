import React, {Component} from 'react';
import {View,Text,StatusBar,Image,StyleSheet,Button, Dimensions} from 'react-native';
import One from '../../images/One.jpeg';
import Two from '../../images/Two.jpeg';
import Three from '../../images/Three.jpeg';
import Four from '../../images/Four.jpeg';
import Five from '../../images/Five.jpeg';
import Six from '../../images/Six.jpeg';
import Seven from '../../images/Seven.jpeg';
import Eight from '../../images/Eight.jpeg';
import Nine from '../../images/Nine.jpeg';
import Ten from '../../images/Ten.jpeg';
import Eleven from '../../images/Eleven.jpeg';

import coverPic from '../../images/camera_wallpaper.jpg';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ListItem, Avatar,List } from 'react-native-elements'

import {images} from './ImagesJs/homeImg';


const Home = ({navigation}) => {
    return(
        <View style={{backgroundColor: '#004040'}}>
            <StatusBar style={{backgroundColor: '#004040'}} barStyle="default"/> 
            <ScrollView >
             {
               images.map((item,index) => (                      
                            <ListItem style={styles.home} key={index} underlayColor='none' onPress={()=>navigation.navigate('Potrait', { name: item.name, subtitle: item.subtitle})}>
                                <Avatar source={item.avatar_url} style={styles.pic}/>
                                    <ListItem.Content>
                                        <ListItem.Title style={styles.title}>{item.name}</ListItem.Title>
                                        <ListItem.Subtitle style={styles.subtitle}>{item.subtitle}</ListItem.Subtitle>
                                    </ListItem.Content>
                            </ListItem>
               ))
           }
          </ScrollView>
        </View>
    );
}
export default Home ;

const styles = StyleSheet.create({
   home: {
        height: Dimensions.get("window").height/4,
        padding: 20
        // lineHeight: 150
   },
   pic: {
       width: 160,
       minHeight: 150
   },
   title:{
       fontSize:20,
       fontFamily:'roboto-bold',
       color:"#004040"
   },
   subtitle: {
       fontSize: 25,
       fontFamily: 'ariana',
       marginTop: 20
   }
  });
  