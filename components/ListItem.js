import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ListItem = (props) => {
  const { author, imageUrl, title, onPress } = props
  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <View style={styles.leftBox}>
        {!!imageUrl &&(
        <Image
          style={{
            height: 100,
            width: 100,
          }}
          source={{
            uri: imageUrl,
          }}
        />
        )}
      </View>
      <View style={styles.rightBox}>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.subText}>
          {author}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    height: 100,
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
    fontSize: 16,
    fontWeight: 'bold',
  },

  subText: {
    fontSize: 12,
    color: 'gray',
  }
});
