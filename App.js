
import React,{useEffect} from 'react';
import {  SafeAreaView } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Signup from './src/screens/auth/Signup';

const WEB_CLIENT_ID ='1031001053606-5c5cjqcm5t9653t7tio5g2bl0tttbh84.apps.googleusercontent.com'

const App = () => {
 useEffect( () => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:WEB_CLIENT_ID, // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      
      
    });

  },[])

  return (
    <SafeAreaView>
      <Signup/>
     
    </SafeAreaView>
  );
};

export default App;