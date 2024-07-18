import { View,Text, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Authheader from '../../../components/Authheader'
import Input from '../../../components/input'
import Checkbox from '../../../components/Checkbox'
import Button from '../../../components/Button'
import Seperator from '../../../components/Seperator'
import GoogleLogin from '../../../components/GoogleLogin'


const Signup = () => {
  const [checked,setChecked]= useState(false);
  const onSignIn = ()=>{

  }
    return (
   <View style={styles.container}>
   <Authheader title='Sign up'/>
   <Input label='Name' placeholder='Jhon.Paul'/>
   <Input label='Email' placeholder='example@gmail.com'/>
   <Input isPassword label='Password' placeholder='**********'/>

   <View style={styles.agreeRow}>
    <Checkbox checked={checked} onCheck={setChecked}/>
    <Text style={styles.agreeText}>I agree with <Text style={styles.TextBold}>Terms</Text> &<Text style={styles.TextBold}>Privacy</Text></Text>
   </View>
   <Button style={styles.button} title='Sign Up'  />
   <Seperator text='Or sign up with' />
   <GoogleLogin/>
   <Text style={styles.footerText}>
      Already have an account?
      <TouchableOpacity onPress={onSignIn}>
      <Text style={styles.footerLink}>Sign In</Text>
      </TouchableOpacity>
    </Text>
    
    </View>
    
  )
}

export default Signup;