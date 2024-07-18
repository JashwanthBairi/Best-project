import { Text, TouchableOpacity, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Authheader from '../../../components/Authheader'
import Input from '../../../components/input'
import Button from '../../../components/Button'
import Seperator from '../../../components/Seperator'
import GoogleLogin from '../../../components/GoogleLogin'


const Signin= () => {
  
  const onSignIn = ()=>{

  }
    return (
   <ScrollView style ={styles.container}>
   <Authheader title='Sign In'/>
   
   <Input label='Email' placeholder='example@gmail.com'/>
   <Input isPassword label='Password' placeholder='**********'/>

   <Button style={styles.button} title='Sign in'  />
   <Seperator text='Or sign in with' />
   <GoogleLogin/>

   <Text style={styles.footerText}>
      Don't have an account?
      <TouchableOpacity onPress={onSignIn}>
      <Text style={styles.footerLink}>Sign up</Text>
      </TouchableOpacity>
    </Text>
    </ScrollView>
 
    
  )
}

export default Signin;