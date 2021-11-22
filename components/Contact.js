import React from 'react';
import { StyleSheet, Text,  Image, View } from 'react-native';
import {MaterialIcons, MaterialCommunityIcons, SimpleLineIcons} from '@expo/vector-icons';




function Contact({myprofile, name, phone }) {
    
    return (
    
        <View style = {styles.container}>
            
            <View > 
                <Image source = {myprofile} style ={styles.image} />
            </View>
           
            <View style ={styles.infoContainer} >
                <Text style = {styles.nameContainer} numberOfLines={1} > {name}</Text>
                <Text>{phone} </Text>                
            </View>
            <View style ={styles.icons} >
                <MaterialIcons name="call" size={24} color="#009cf5" />
            </View>
            <View style ={styles.icons} >
                <MaterialCommunityIcons name="message-processing" size={24} color="#009cf5" />
            </View>

            <View style ={styles.icons}>
                <SimpleLineIcons name="options-vertical" size={24} color="#a8aa" />
            </View>

            
        </View>
       
    )
}
const styles = StyleSheet.create({
    container:{
        top:70,
       borderRadius:30,
        alignSelf:"flex-start",
        marginHorizontal:20,
        flexDirection: "row",
        marginTop:5,
        marginVertical: 10,
        
       
    },
    image:{
        width: 50,
        height:50,
        borderRadius:50,
    },
     infoContainer:{
         justifyContent: "center",
         marginHorizontal:15,
         flex:4,
     },
     nameContainer:{
         fontSize:17,
         fontWeight:"bold"
     },
     icons:{
         flex:1,  
         marginLeft:15,
     },
})

export default Contact;
