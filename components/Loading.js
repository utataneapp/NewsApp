import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const Loading = () => {
  return(
    <View style={styles.container}>
      <ActivityIndicator color={'gray'} size={'large'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Loading;


