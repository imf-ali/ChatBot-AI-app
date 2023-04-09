import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ChatMessages from '../components/ChatMessages';
import useOpenAi from '../hooks/useOpenAi';

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
  const [textValue, setTextValue] = useState('');
  const [userChat, setUserChat] = useState([]);
  const [data, fetchData] = useOpenAi();

  const updateChatMessages = () => {
    setUserChat((prevChats) => [
      ...prevChats,
      { index: userChat.length, text: textValue },
    ]);
    fetchData(textValue);
    setTextValue('');
  };

  useEffect(() => {
    setUserChat((prevChats) => [
      ...prevChats,
      { index: userChat.length, text: data },
    ]);
  }, [data]);

  return (
    <View style={styles.container}>
      <View style={styles.displayArea}>
        <ChatMessages userChat={userChat} />
      </View>
      <View style={styles.inputDiv}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter the text"
          placeholderTextColor="#CFC7C5"
          value={textValue}
          onChangeText={(newTerm) => setTextValue(newTerm)}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={updateChatMessages}
        >
          <FontAwesome name="send" size={18} color="#64bca4" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomePage;
