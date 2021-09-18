import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import dummyArticles from './dummies/articles.json'
import Constans from 'expo-constants'

export default function App() {
  // envファイルにあるものをすべて環境変数にロードする
  require('dotenv').config()

  const [articles, setArticles] = useState([])

  useEffect(()=>{
    alert(Constans.manifest.extra.newsApiKey)
    const timer = setTimeout(() => {
      setArticles(dummyArticles)
    }, 2000);
    return ()=>{
      clearTimeout(timer);
    }
  },[])

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
