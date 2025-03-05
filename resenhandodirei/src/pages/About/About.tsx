
import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';



export default function About( { navigation } : any) {

  return (

    <View>

      <Text>About Page</Text>

    </View>

  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});



