import {Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image
        source={
            {
            uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GokECiRgjGJyAnQPdBFeg896tOnXZ2rE2A&s'    
            }
        }
        
        style={styles.cardImage}
        
        />
        <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Pyramid</Text>
        <Text style={styles.cardLabel}>Egypt</Text>
        <Text style={styles.cardDescription}>Pyramid a massive structure built especially in ancient Egypt that usually has a square base and four triangular sides meeting at a point.
    something that resembles a pyramid in shape or organization.</Text>
    <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
        </View>
    </View>

  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card:{
        width:400,
        height:350,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    cardImage:{
        height:150,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderBottomRightRadius:6

    },
    cardElevated:{
        backgroundColor: '#FFFFFF',
        elevation:3,
        shadowOffset: {
            width: 5,
            height: 2
        }

    },
    cardBody:{

    },
    cardTitle:{
        color: '#000000',
        fontSize:22,
        fontWeight: 'bold',
        marginBottom:6
    },
    cardLabel:{ color: '#000000',
       fontSize:12,
       fontWeight: 'bold',
       marginBottom:4
    },
    cardDescription:{ color: '#1e272e',
        fontWeight: 'bold',
        marginBottom:4,
        flexShrink:1

    },
    cardFooter:{ color: '#000000',
        fontWeight: 'bold',
    },



   
})