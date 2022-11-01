import React from 'react';
import {StyleSheet, View} from 'react-native';
import Constants from 'expo-constants';
import {Tab,Text, TabView} from '@rneui/themed';

export default function Footer(){
  return(
    <View style = {{ background: '#ccd175'}}>
      <Text style = {{marginBottom: 10,
            display: 'flex',
            marginTop: 20,
            fontSize: 20,
            justifyContent: 'center',
            fontWeight: 'bold'}}> Hortfruit do Perdemo </Text>

      <Text style = {{marginBottom: 20,
            display: 'flex',
            marginTop: 0,
            fontSize: 14,
            justifyContent: 'center',}}> Avenida barão do rio branco - 2372 </Text>

      <Text style = {{marginBottom: 20,
            display: 'flex',
            marginTop: 5,
            fontSize: 14,
            justifyContent: 'center',
            fontWeight: 'bold'}}> Samuel Moisés Guimarães Macanham  © </Text>
    </View>
  )
}