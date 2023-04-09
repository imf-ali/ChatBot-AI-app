import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  userChatTexts: {
    backgroundColor: '#1c9c7c',
    color: 'white',
    marginVertical: 15,
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignSelf: 'flex-end',
    marginHorizontal: 10,
    maxWidth: 300,
    borderRadius: 15,
    borderBottomRightRadius: 5,
    fontWeight: 'bold',
  },
  aiChatTexts: {
    backgroundColor: '#63605F',
    color: 'white',
    marginVertical: 15,
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignSelf: 'flex-start',
    marginHorizontal: 10,
    maxWidth: 300,
    borderRadius: 15,
    borderBottomLeftRadius: 5,
    fontWeight: 'bold',
  },
});

const ChatMessages = ({ userChat }) => (
  <View>
    <FlatList
      keyExtractor={(item) => item.index}
      data={userChat}
      renderItem={({ item }) => {
        if (item.index % 2)
          return <Text style={styles.aiChatTexts}>{item.text}</Text>;
        return <Text style={styles.userChatTexts}>{item.text}</Text>;
      }}
    />
  </View>
);

export default ChatMessages;

ChatMessages.propTypes = {
  userChat: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};
