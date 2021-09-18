import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ListItem = (props) => {
  const { author, imageUrl, title } = props
  return (
    <View style={styles.box}>
      <View style={styles.leftBox}>
        <Image
          style={{
            height: 100,
            width: 100,
          }}
          source={{
            uri: imageUrl,
          }}
        />
      </View>

      <View style={styles.rightBox}>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.subText}>
          {author}
        </Text>
      </View>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    height: "100px",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },

  leftBox: {
  },

  rightBox: {
    flex: 1,
    height: 100,
    padding: 10,
    justifyContent: 'space-between'
  },

  text: {
    fontsize: 16,
    fontWeight: 'bold',
  },

  subText: {
    fontSize: 12,
    color: 'gray',
  }
});
