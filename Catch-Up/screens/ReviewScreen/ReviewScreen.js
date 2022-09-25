import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';

import { Card } from 'react-native-paper';



const ReviewScreen = (props) => {
    
    const { review } = props;
    // same as 
    // const review = props.review;
    const { userName, location, reviewText} = review;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        

        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{ uri: 'https://picsum.photos/10' }} />
        <Text>
            { userName }
            {"\n"}
            {"\n"}
            {"\n"}
        </Text>
        </View>
        <Text>
            { location }
            {"\n"}
            {"\n"}
        </Text>
        <Text>
            { reviewText }
            {"\n"}
        </Text>
        <Image style={styles.image1} source={{ uri: 'https://i.ibb.co/vYy2JwS/image-1.png' }} />


        {/* <Image style={styles.image} source={{ uri: 'https://i.ibb.co/Jdz0XJB/review1.png' }} /> */}
      </View>
    </SafeAreaView>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  image: {
    width: "100%",
    height: 500
  },
  image1: {
    width: "100%",
    height: 200
  },
  logoContainer: {
    flexDirection: "row"
  },
  logo: {
    width: 50,
    height: 50
  },
  card: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    borderRadius: "5px"
  }
});
