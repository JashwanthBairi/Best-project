import { Image, Linking, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite (websiteLink:string){
Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
     <View style={[styles.card,styles.elevatedcard]}>
    <View style={styles.headingContainer}>
      <Text style={styles.headerText}>
        What's new in React-Native ?
      </Text>
    </View>
    <Image 
    source={{
        uri:'data:image/png;base64,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oinF+oxLh9JwsBHLWnArHXIdXv5PO58P+py/EBgQaRag2hHAV6zyB37IL5rUO8R3FMCDETwldTaNFFqBLVD5AF3rbW6Vik147ILX9Vfd8vnNxfqQCjT6rHrPQJ4TZGRrrcva30AecGMj+W29x61DGTkET+0+g23xp6N/uThEtv/l4zqGpsYKN72E9zdYLStqeodbgFBjQMMZD2VrME5+/sfJX36p2VGL+jv9/daExg+xHqo9AB3og88vtXTzt9xrL94xOVtPoP6qXnbmY+lKX9zrXZMToAP/ba2AOgG60t8pnrcre2JvCm+HGtA+oL/6PQ3/dtVCqC07dopAzYBu9XMK9Z0QqiOylw4o357C7IDcGzz8B+pwDyOAXr3f3nWU8q8OBfTB+fc2t3epwwH96/EAoNd3OuL5y8NDLljrUAZ9+vrfHXsa0rlXDmnszl+93K/p/ZKe/6uN0J0/cX/XbfyzhPR04M/f64Hozqd/vk57dNqk59P5Mrl9ZfnB37R8/h8nsuBG173/tacnT548efLkyZMnT548efLkyZMnT548efLkyZMnT548efLkyZMnT548vZv6fxJpygSlKtBTAAAAAElFTkSuQmCC'
    }}
    style={styles.cardImage}
    />
    <View style={styles.bodycontainer}>
     <Text numberOfLines={5}>
     React Native is an open-source UI software framework created by Facebook Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities 
     </Text>
    </View>
    <View style={styles.footercontainer}>
     <TouchableOpacity 
     onPress={()=>openWebsite('https://www.javascript.com/')}>
        <Text style={styles.socialLinks}>Read more...</Text>
     </TouchableOpacity>
     <TouchableOpacity 
     onPress={()=>openWebsite('https://reactnative.dev/docs/environment-setup')}>
        <Text style={styles.socialLinks}>Follow me...</Text>
     </TouchableOpacity>
    
    </View>
    
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,


    },
    card:{
        width:400,
        height:315,
        borderRadius:10,
        marginVertical:12,
        marginHorizontal:16
    },
    elevatedcard:{
        backgroundColor:'#ff7f50',
        elevation:3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor:'#ff6b81'
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
       
    },
    headerText: {
        color:'#000000',
        fontSize:20,
        fontWeight:'bold'
    },
    cardImage:{
        height:150
    },
    bodycontainer:{
        padding:5,

    },
footercontainer:{
    padding:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
},
socialLinks:{
    fontSize:16,
    color:'#000000',
    backgroundColor:'#fff',
    paddingHorizontal:20,
    borderRadius:8

}


})