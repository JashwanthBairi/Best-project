import React from 'react';
import {TouchableOpacity,Image } from 'react-native';
import{styles} from './styles';
import {GoogleSignin,statusCodes} from '@react-native-google-signin/google-signin';

 const GoogleLogin = () =>{
  const handleGoogleLogin = async() => {  
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log('userInfo: >>', userInfo);
       
      } catch (error) {
        if(error.code === statusCodes.SIGN_IN_CANCELLED){
         // user cancelled the login flow

        }else if(error.code === statusCodes.IN_PROGRESS){
            // operation (eg.sigin) is in progress 
          }else if(error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE){
            //play services not available
        }else{
            //some other error happend
        }

    }  
       
      }
        
    return(
        <TouchableOpacity activeOpacity={0.6} onPress={handleGoogleLogin} style={styles.container}>
<Image style={styles.image}  source={require('../../assets/Gmail.png')}/>
        </TouchableOpacity>
    )
 }
 export default React.memo(GoogleLogin) ;