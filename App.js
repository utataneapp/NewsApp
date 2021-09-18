import React from 'react';
import ListItem from './components/ListItem';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        author="SampleNews"
        imageUrl="https://picsum.photos/200/300"
        title="Choose something you like to do. I know it’s a cliche, and you’ve heard it over and over. But the reason is, you’re going to have to work long and hard to achieve any success. You better like it or life is going to be terrible."
      />
      <ListItem
        author="SampleNews"
        imageUrl="https://picsum.photos/200/300"
        title="Choose something you like to do. I know it’s a cliche, and you’ve heard it over and over. But the reason is, you’re going to have to work long and hard to achieve any success. You better like it or life is going to be terrible."
      />
      <ListItem
        author="SampleNews"
        imageUrl="https://picsum.photos/200/300"
        title="Choose something you like to do. I know it’s a cliche, and you’ve heard it over and over. But the reason is, you’re going to have to work long and hard to achieve any success. You better like it or life is going to be terrible."
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: "10px",
  },
})
