import React, { useState } from 'react';
import { Pressable, Text,TextInput,View ,Image} from 'react-native';
import { styles } from './styles';

const Input =({label,placeholder,isPassword})=>{
    const[isPaswordvisible,setIsPaswordvisible]=useState(false);
    const onEyePress =() =>{
        setIsPaswordvisible (!isPaswordvisible);
    }
    return(
        <View style={styles.container}>
            <Text style ={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
        <TextInput  secureTextEntry={isPassword &&!isPaswordvisible} placeholder ={placeholder} style={styles.input}/>
        {isPassword ?(
            <Pressable onPress={onEyePress}>
            <Image style={styles.eyeImage} 
          
            source={require('../../assets/eye.png')}/>
            </Pressable>

        ):null

        }
    
    </View>
        </View>
    )
}
export default Input;