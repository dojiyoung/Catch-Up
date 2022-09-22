import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';

import { Card } from 'react-native-paper';

const ReviewScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: 'https://i.ibb.co/Jdz0XJB/review1.png' }} />
      </View>
    </SafeAreaView>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  image: {
    width: "100%",
    height: 500
  },
  paragraph: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  }
});