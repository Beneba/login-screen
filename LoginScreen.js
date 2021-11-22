import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function LoginScreen() {
    return (
        <View style ={styles.container} >
            <View style ={styles.headerContainer}> 
                <Text style = {styles.loginContainer}>Log in </Text>
            </View>
            <View style ={styles.inputContainer}>
                <TextInput 
                    style= {styles.textContainer} 
                    placeholder = "Username"     />
                <TextInput style= {styles.textContainer}
                secureTextEntry= {true} 
                placeholder = "Password" />
                <Text style ={styles.forgetPassword} >Forget password?</Text>

            </View>
            <View style ={styles.loginBtnContainer}>
                <TouchableOpacity style ={styles.buttonLogin} >
                    <Text style ={styles.log} >Log In</Text>
                </TouchableOpacity>
               
            </View>
            <View style ={styles.accountContainer}>
                <Text style ={styles.noAccountContainer} >Don't have account?</Text>
                <Text style ={styles.signupText} >Sign up</Text>

            </View>

           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 10,
      backgroundColor: 'white',
      marginHorizontal: 50,
   
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    headerContainer: {
        paddingTop:100,
        alignItems: 'center',
        justifyContent: 'center',
      },
      loginContainer:{
        fontWeight: "bold",
        color: '#5f2585',
        fontSize: 60,
    },
      inputContainer:{
        paddingTop:50,
                 
      },
      loginBtnContainer: {
        paddingTop:50,
       
        backgroundColor:"white",
        borderRadius:10,
        paddingBottom:100,
      },

      accountContainer:{
          paddingBottom:100,      
          flexDirection:"row",
          alignItems: "center",
          justifyContent: "center",
      },
      noAccountContainer:{
        marginRight:10,
        fontSize:16,
      },
      signupText:{
        fontSize:16,
        color:'#5f2585',
      },
     
      textContainer:{
          borderBottomWidth:2,
          borderBottomColor: '#5f2585',
          paddingTop:10,
          fontSize:16,
          fontWeight: "bold",
          marginTop:20
          
      },
      forgetPassword: {
          alignSelf:"flex-end",
          color: "blue",
          padding:10
      },
      buttonLogin:{
        
        borderRadius:10, 
        backgroundColor:'#5f2585', 
        marginHorizontal:15,
        height:50,
       alignItems:"center",
       justifyContent: "center",
       marginBottom:10,  
       
      },
      log:{
          color: "white",
          fontSize: 20,
          fontWeight:"bold"
      },
    
      
  });


export default LoginScreen
