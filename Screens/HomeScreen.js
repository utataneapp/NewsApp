import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListItem from '../components/ListItem';
import axios from 'axios';
import Constants from 'expo-constants';
import Loading from '../components/Loading';

const URL = "https://newsapi.org/v2/top-headlines?country=jp&apiKey=?"

const HomeScreen = (props) => {
  const [articles, setArticles] = useState([])
  const {navigation} = props;
  const [ loading, setLoading]  = useState(false);

  useEffect(()=>{
    fetchArticles();
  },[])

  const fetchArticles = async() => {
    setLoading(true)
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles)
    } catch (error) {
      console.error(error);
    }
    setLoading(false)
  }

  const renderItem = ({ item, index }) => (
    // mapメソッド的な機能を持つコンポーネント
    <ListItem
      author={item.author}
      imageUrl={item.urlToImage}
      title={item.title}
      onPress={()=> navigation.navigate("Article",{article: item})}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item , index) => index.toString()}
      />
    {loading && <Loading />}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    height: 10,
  },
})

export default HomeScreen;
