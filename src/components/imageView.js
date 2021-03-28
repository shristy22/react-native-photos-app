import React, { useState } from 'react';
import {View,Text,Image,Modal,ScrollView,StyleSheet,TouchableOpacity} from 'react-native';

const imageView = (props) => {
    const[visible1,setIsVisible1]=useState(true);    
    return(
            // <Text>Shristy</Text>
        // <ScrollView horizontal pagingEnabled> 

                    <Modal
                    transparent visible={visible1}  
                    onDismiss={()=>setIsVisible1(false)}> 
                    <View style={styles.viewWrapper}> 
                        <View style={styles.modalView}> 
                            <Text style={{fontSize: 25,color:'#004040',borderBottomColor:'grey',borderBottomWidth:1}}>Posted</Text>
                            <Text style={{
                            marginTop: 20}}>
                                Your Comments Submitted Successfully..!!
                            </Text>
                                
                        <TouchableOpacity onPress={()=>setIsVisible1(false)} style={styles.btn}>
                            <Text style={styles.like}>Okay</Text>
                        </TouchableOpacity>

                        </View> 
                    </View> 
                </Modal> 
        //  </ScrollView>
    );
}
export default imageView;  

const styles = StyleSheet.create({
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
        // transform: [{ translateX: -(width * 0.4) },  
        //     { translateY: -125 }],            
        height: 150, 
        // width: width * 0.8, 
        backgroundColor: "#fff", 
        borderRadius: 7, 
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
    like: {
        color: '#ffff'
    }
})