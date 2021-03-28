import React , {useState} from 'react';
import {View,Text,ScrollView,StyleSheet,Button,TouchableOpacity,Modal} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Ionicons } from '@expo/vector-icons';

// import ImageView from './imageView';
import ImageZoom from 'react-native-image-pan-zoom';
import { Image, Dimensions ,TextInput} from 'react-native';
import Swiper from 'react-native-swipe-image';
import { State } from 'react-native-gesture-handler';

// import ImageView from 'react-native-image-viewing';
import ImageView from 'react-native-image-view';

import { ListItem, Avatar , Card } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler';
import { potraitImg } from './ImagesJs/potraitImg';
import  style  from '../style';
import { set, call } from 'react-native-reanimated';
import { Props } from 'react-native-image-zoom-viewer/built/image-viewer.type';
import { PanGestureHandler} from 'react-native-gesture-handler'
import { TapGestureHandler } from "react-native-gesture-handler";

import Camera from './camera';
const { width } = Dimensions.get("window"); 
const { height } = width * 0.6;

const Potrait = ({props,route,msgpass}) => {
    const[msg,setMsg] = useState(null)
    const[like,setLike] = useState(false)
    const[text,setText] = useState('');
    const[index,setIndex] = useState(0);
    const[showAlert,setShowAlert] = useState(false);
    const[isvisible, setIsVisible] = useState(false);
    const[isSelectedImg,setSelectedImg] = useState(null);
    const[stateImage, setStateImage ] =useState(false);
    const[img, setImg ] =useState(null);

    const callBack = (childProps) => {
        setMsg(childProps)
         }
      return(
        <View style={{backgroundColor: "#004040",height:'100%'}}>
            {/* <Camera sendParentToChild={msg}/> */}
            {/* <Camera subtitle={msgpass} sendChildToParent={msg => setMsg(msg)}/> */}
            <Camera subtitle={msgpass} callbackFromParent={callBack} />
             <ScrollView>
                {
                potraitImg.map((item,index1)=> (
                <View style={{marginBottom:20, marginTop:0}}>
                   {/* {(msg!=null)?<Text>hoo</Text>:
                            null} */}
                   {/* <Text>{msgpass}</Text> */}
                   {(msg!=null) ? 

                    <Card>  
                      <Card.Image source={{uri: msg}} style={styles.image}
                            onPress={()=>{setIsVisible(true),setIndex(index1)}}/> 
                        <View style={{flexDirection: 'row', marginTop: 10, marginHorizontal:5}}>           
                           <Ionicons name={like ? "heart" : "heart-outline"} size={40} color="#004040" 
                             style={{marginTop:5}} onPress={()=>{setLike(!like),setIndex(index1)}}/>
                           
                            <TextInput placeholder="Share your thoughts" style={styles.comments}
                                onChangeText={text=>setText(text)} defaultValue={text}
                                multiline={true} numberOfLines={3} textAlignVertical="auto"/>

                            <TouchableOpacity onPress={()=>setShowAlert(true)} style={styles.btn}>
                                        <Text style={styles.like}>Post</Text>
                            </TouchableOpacity>

                            <Modal animationType="fade" transparent visible={showAlert} 
                                   onDismiss={()=>setShowAlert(false)}> 
                                <View style={styles.viewWrapper}> 
                                    <View style={styles.modalView}> 
                                        <Text style={{fontSize: 25,color:'#004040',borderBottomColor:'grey',borderBottomWidth:1}}>Posted</Text>

                                        <Text style={{marginTop: 20}}>
                                            Your Comments Submitted Successfully..!!
                                        </Text>

                                        <TouchableOpacity onPress={()=>setShowAlert(false)} style={styles.btn}>
                                            <Text style={styles.like}>Okay</Text>
                                        </TouchableOpacity>                                
                                    </View> 
                                </View> 
                            </Modal> 
                        </View>               
                    </Card>
                    :
                    <Card>  
                        <Card.Image source={item.source} style={styles.image}
                              onPress={()=>{setIsVisible(true),setIndex(index1)}}/> 
                          <View style={{flexDirection: 'row', marginTop: 10, marginHorizontal:5}}>           
                             <Ionicons name={like ? "heart" : "heart-outline"} size={40} color="#004040" 
                               style={{marginTop:5}} onPress={()=>{setLike(!like),setIndex(index1)}}/>
                             {/* <Text>hi</Text> */}
                              <TextInput placeholder="Share your thoughts" style={styles.comments}
                                  onChangeText={text=>setText(text)} defaultValue={text}
                                  multiline={true} numberOfLines={3} textAlignVertical="auto"/>
  
                              <TouchableOpacity onPress={()=>setShowAlert(true)} style={styles.btn}>
                                          <Text style={styles.like}>Post</Text>
                              </TouchableOpacity>
  
                              <Modal animationType="fade" transparent visible={showAlert} 
                                     onDismiss={()=>setShowAlert(false)}> 
                                  <View style={styles.viewWrapper}> 
                                      <View style={styles.modalView}> 
                                          <Text style={{fontSize: 25,color:'#004040',textDecorationLine:'underline'}}>Posted</Text>
  
                                          <Text style={{marginTop: 20}}>
                                              Your Comments Submitted Successfully..!!
                                          </Text>
  
                                          <TouchableOpacity onPress={()=>setShowAlert(false)} style={styles.btn}>
                                              <Text style={styles.like}>Okay</Text>
                                          </TouchableOpacity>                                
                                      </View> 
                                  </View> 
                              </Modal> 
                          </View>               
                      </Card> 
                    }
                </View>
              ))  
            } 
            
            </ScrollView>
            <ImageView  glideAlways images={potraitImg} imageIndex={index} animationType="fade"
                    isVisible={isvisible} onClose={() => setIsVisible(false)} 
                    onImageChange={index => {console.log(index)}}/>   
        </View>
    );
}
export default Potrait;

const styles = StyleSheet.create({
 image: { 
    height: width * 0.7
  },
  viewWrapper: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: "rgba(0, 0, 0, 0.2)", 
 }, 
 modalView: { 
    alignItems: "center", 
    justifyContent: "center", 
    position: "absolute", 
    top: "50%", 
    left: "50%", 
    elevation: 5, 
    transform: [{ translateX: -(width * 0.4) },{ translateY: -125 }],            
    height: 150, 
    width: width * 0.8, 
    backgroundColor: "#fff", 
    borderRadius: 7, 
 }, 
  comments: {
    padding: 5,
    shadowColor: '#004040',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderBottomWidth: 0,
    elevation: 2,
    width: 230,
    borderRadius: 2,
    marginHorizontal: 10,
    borderColor: '#004040'
  },
  btn: {
    width: 50,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004040',
    shadowColor: '#ffff',
    shadowOpacity: 0.5,
    shadowOffset: { height: 20, width: 10 },
    shadowRadius: 30,
    marginTop: 10,       
  },
  like:{
    color: '#ffff'
  },
  rect: {
    width: 200,
    height: 200,
    backgroundColor: "tomato",
  },

})