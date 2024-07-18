import { StyleSheet } from 'react-native'


export const styles= StyleSheet.create({
    container:{
        padding: 24,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:3,
        height:'97%'
    },
     image:{
        width:'100%',
        height:200,
       
     },
     titleContainer:{
      marginVertical:54,
     },
     title:{
        fontSize:40,
        fontWeight:'bold',
        color:'#000000',
        textAlign:'center'
     },
     innerTitle:{
        
        color:'#f39c12',
       textDecorationLine:'underline',
     },
     footerText:{
      color:'#341f97',
      textAlign:'center',
      fontSize:16,
      fontWeight:'bold',
      marginTop:50,

     }
     


}
)
