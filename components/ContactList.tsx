import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList()
 {
    const contacts =[{
        uid: 1,
        name:'Bairi Jashwanth',
        status:'Software Developer',
    },
    {
        uid: 2,
        name:'Virat',
        status:'Cricketer',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/b/b3/35._ISC-Symposium-Ratan_N._Tata_in_der_Pause-HSGN_028-01812.JPG'}
];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
        style={styles.container}
        scrollEnabled={false}> 
        {contacts.map(({uid,name,status,imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri:imageUrl
                }}
                style={styles.userImage}
                />
                <Text style={styles.userName} >{name}</Text>
                <Text style={styles.userstatus}>{status}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{

    },
    container:{},
    userCard:{},
    userImage:{
        height:30,
        width:30,
        
    },
    userName:{},
    userstatus:{}

})