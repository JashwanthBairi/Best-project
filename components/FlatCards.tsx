import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardone]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardtwo]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardthree]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardfour]}>
            <Text>purpule</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
       fontSize:24,
       fontWeight: 'bold',
       paddingHorizontal:10
    },
    container: {
      flex:1,
      flexDirection: 'row',
      padding: 8,
    },
    card: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'20%',
        height:30,
        borderRadius:4,
        margin:8
    },
    cardone: {
        backgroundColor:'#c0392b'

    },
    cardtwo: {
        backgroundColor:'#2980b9'

    },
    cardthree: {
        backgroundColor:'#2ecc71'

    },
    cardfour: {
      backgroundColor:'#9b59b6'

  },
})