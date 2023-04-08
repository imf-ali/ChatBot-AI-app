import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  inputDiv: {
    backgroundColor: '#63605F',
    bottom: 0,
    margin: 10,
    borderRadius: 5,
    height: 45,
    paddingHorizontal: 8,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#524F4E',
  },
  displayArea: {
    flex: 1,
  },
  textInput: {
    flex: 1,
    color: 'white',
    marginRight: 10,
  },
  sendButton: {
    alignSelf: 'center',
  },
});

function HomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.displayArea} />
      <View style={styles.inputDiv}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter the text"
          placeholderTextColor="#CFC7C5"
        />
        <TouchableOpacity style={styles.sendButton} onPress={() => {}}>
          <FontAwesome name="send" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomePage;
