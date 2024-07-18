import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>more</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal:10
     },
     container:{
        flex:1,
      flexDirection: 'row',
      padding: 8,

     },
     card:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width:100,
        height:100,
        borderRadius:10,
        margin:8,
        color:'#000000',
      

     },
     cardElevated:{
        backgroundColor:'#1e272e',
        height:100,
     

     }

})