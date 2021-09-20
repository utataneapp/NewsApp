import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ClipScreen = () =>{
  return(
    <View>
      <Text style={styles.container}>ClipScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    fontSize: 12,
  }
})

export default ClipScreen;
