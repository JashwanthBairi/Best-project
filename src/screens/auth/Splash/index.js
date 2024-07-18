import { View,Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Button from '../../../components/Button'
import Seperator from '../../../components/Seperator'

const Splash = () => {
  return (
   <View style={styles.container}>
      <Image resizeMode ='contain'style={styles.image}
    source={{uri:'https://withfra.me/android-chrome-512x512.png'}}/>

   <View style={styles.titleContainer}>

      <Text style={styles.title}>You'll Find </Text>
        <Text style={[styles.title ,styles.innerTitle]}>All You Need</Text>
        <Text style={styles.title}>Here!... </Text>
        </View>
        <Button title='sign up'/>
        <TouchableOpacity>
          <Text style={styles.footerText}>Sign In</Text>
        </TouchableOpacity>
        <Seperator text='Or sign up with' />
      </View>
    
  )
}

export default Splash;