import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import ListItem from '../components/ListItem';

const ClipScreen = ({navigation}) =>{
  const user = useSelector( state => state.user)
  const { clips } = user;

  const renderItem = ({ item, index }) => (
    // mapメソッド的な機能を持つコンポーネント
    <ListItem
      author={item.author}
      imageUrl={item.urlToImage}
      title={item.title}
      onPress={()=> navigation.navigate("Article",{article: item})}
    />
  );

  return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
        renderItem={renderItem}
        keyExtractor = { (item, index) => index.toString()}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    fontSize: 12,
  }
})

export default ClipScreen;
