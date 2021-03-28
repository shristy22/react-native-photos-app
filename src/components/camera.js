import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import {Alert,Button,View,Text, Dimensions,Image,Modal,StyleSheet,TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { call } from 'react-native-reanimated';

const { width } = Dimensions.get("window"); 
const { height } = width * 0.6;

const Camera = (props) => {
    const[selectedImage,setSelectedImage] = useState(null);
    const[showMsg,setShowMsg] = useState("child here");
    const[showAlert,setShowAlert] = useState(false);

   
    const pickFromGallery = async() => {
        const{granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if(granted){
            let data= await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:1
            })
            console.log(data);
            if(data.cancelled==true)
                return;
             setSelectedImage({localUri:data.uri});     
        }
        else{
            Alert.alert("Give permission to proceed please.")
        }
    }
    const pickFromCamera= async() => {
        const{granted} = await Permissions.askAsync(Permissions.CAMERA )
        if(granted){
            let data= await ImagePicker.launchCameraAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[5,5],
                quality:0.5
            })
        }
        else{
            Alert.alert("Give permission to proceed please.")
        }
    }
    //-----did myself---
//    const pickupbabe = async() => {
//        const{give} = await Permissions.askAsync(Permissions.CAMERA)
//        if(give){
//             let a = await ImagePicker.launchCameraAsync({
//                 mediaTypes:ImagePicker.MediaTypeOptions.Images,
//                 allowsEditing: true,
//                 aspect:[1,1],
//                 quality:0.5
//             })
//        }
//        else{
//            Alert.alert("not given,give it dude")
//        }
//    } 
const callBackMethod = () =>{
    props.callbackFromParent(selectedImage.localUri);
    setShowAlert(!showAlert);
  }
if(selectedImage!==null){
    return(
        <View>
            <View style={{flexDirection: 'row', marginHorizontal: 10,marginVertical:10}}>
                <Ionicons name="camera" size={32} color="#ffff" onPress={()=>pickFromCamera()}/>
                <Text style={{fontFamily: 'ariana',color:'#ffff',fontSize:25,marginHorizontal:25,width:'70%'}}>
                    {props.subtitle}
                </Text>
                <Ionicons name="add" size={32} color="#ffff" onPress={()=>pickFromGallery()}/>          
           </View>
       {/* {()=>callBackMethod} */}
       {/* <Button title={showMsg} onPress={()=>props.callbackFromParent('hi')} /> */}
       {/* {props.callbackFromParent} */}
       {/* {props.addSelectedImage( */}
       {/* <Image source={{uri: selectedImage.localUri}} style={{width:400,height:400}}/> */}
       {/* {()=>props.callBackMethod('hyyy')} */}
       <Modal animationType="fade" transparent visible={!showAlert} 
                                     onDismiss={()=>setShowAlert(false)}> 
                        <View style={styles.viewWrapper}> 
                            <View style={styles.modalView} > 
                                {/* <Text style={{fontSize: 25,color:'#004040',textDecorationLine:'underline'}}>
                                    Confirm</Text> */}
                                    <Image source={{uri: selectedImage.localUri}} style={{width:400,height:400,}}/>      
                                        <Text style={{marginTop: 20}}>
                                              Are u sure you want to post it ?
                                        </Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <TouchableOpacity style={styles.btn} onPress={()=>setShowAlert(!showAlert)}>
                                        <Ionicons name="close" color="#ffff"  style={{fontSize:20}}/>
                                              {/* <Text style={styles.like}>Delete</Text> */}
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btn} onPress={callBackMethod} >
                                        <Ionicons name="checkmark" color="#ffff" 
                                              style={{fontSize:20}}/>
                                              {/* <Text style={styles.like}>Delete</Text> */}
                                        </TouchableOpacity>      
                                    </View>                              
                            </View> 
                        </View> 
        </Modal> 
        {/* <Button title='Post' onPress={callBackMethod}/> */}
         </View>   
         );
    }
     else{
    return(
        <View>
        <View style={{flexDirection: 'row', marginHorizontal: 10,marginVertical:10}}>
            <Ionicons name="camera" size={32} color="#ffff" onPress={()=>pickFromCamera()}/>
            <Text style={{fontFamily: 'ariana',color:'#ffff',fontSize:25,marginHorizontal:25,width:'70%'}}>
                {props.subtitle}
            </Text>
            <Ionicons name="add" size={32} color="#ffff" onPress={()=>pickFromGallery()}/>
            
       </View>
       {/* <Text>{props.sendParentToChild}</Text> */}
       {/* <Button title={showMsg} onPress={()=>setShowMsg(props.sendParentToChild) }/> */}
       {/* <Button title={showMsg} onPress={()=>props.sendChildToParent('child here')}/> */}
       {/* <Button title='ok' onPress={()=>props.callbackFromParent('hi')}/> */}

       {/* <View>
        {selectedImage == null ? null
        : <Image source={{uri: selectedImage.localUri}} style={{width:300,height:300}}/> }
        </View> */}
        </View>
    );
    }
}
export default Camera;
const styles = StyleSheet.create({
btn: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004040',
    shadowColor: '#ffff',
    shadowOpacity: 0.5,
    shadowOffset: { height: 20, width: 10 },
    shadowRadius: 30,
    marginTop: 10, 
    marginHorizontal: 10,
    padding:10     
  },
  like:{
    color: '#ffff'
  },
  viewWrapper: { 
    flex: 1, 
    // alignItems: "center", 
    // justifyContent: "center",
    // backgroundColor: 'red' 
    backgroundColor: "rgba(0, 0, 0, 0.7)", 
 }, 
 modalView: { 
    alignItems: "center", 
    // justifyContent: "center", 
    // position: "absolute", 
    top: "30%", 
    left: "40%", 
    elevation: 5, 
    transform: [{ translateX: -(width * 0.4) },{ translateY: -128 }],            
    // height: 800, 
    // width: width * 0.8, 
    backgroundColor: "#fff", 
    borderRadius: 8, 
    padding: 10,
    // paddingLeft:10
    // marginHorizontal: 10
 }, 
})