import React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import articles from './dummies/articles.json'

export default function App() {
  const renderItem = ({ item }) => (
    // mapメソッド的な機能を持つコンポーネント
    <ListItem
      author={item.author}
      imageUrl={item.urlToImage}
      title={item.title}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(index) => index.toString()}
      />
    </SafeAreaView>
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
