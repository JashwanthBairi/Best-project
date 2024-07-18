import React from 'react';
import { Image,TouchableOpacity } from 'react-native';
import{styles} from './styles';
 const Checkbox = ({checked,onCheck}) =>{
    return(
        <TouchableOpacity activeOpacity= {0.6} onPress={onCheck} style={styles.container}>
      {checked ? (
        <View style={styles.innerContainer}>
            <Image style={styles.checkIcon} source={require('../../assets/icon.png')}/>
        </View>
    
    ):null
}
        </TouchableOpacity>
    )
 }
 export default Checkbox;
