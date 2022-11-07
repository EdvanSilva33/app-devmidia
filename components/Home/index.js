import React from 'react';
import {  Text, View} from 'react-native';



export default function Home() {
  return (

    <View style={estilo.container}>
     
      <Text>novo temopo</Text>
      
      
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    backgrounColor:"#ccc",
  }
})