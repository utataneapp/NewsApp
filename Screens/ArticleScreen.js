import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { WebView } from 'react-native-webview';

const ArticleScreen = (props) =>{
  const { route } = props;
  const { article } = route.params;
  return(
    <SafeAreaView style={styles.container}>
      <WebView source={{url: article.url}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});

export default ArticleScreen;
