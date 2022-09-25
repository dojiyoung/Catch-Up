import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All" component={ReviewAllScreen} />
      <Tab.Screen name="Following" component={ReviewFollowingScreen} />
    </Tab.Navigator>
  );
}

const ReviewScreen = (props) => {
    
    const { review } = props;
    // same as 
    // const review = props.review;
    const { userName, location, reviewText} = review;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
        <View style={styles.card}>
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{ uri: 'https://i.ibb.co/jy2c4LB/308604883-1830000070678993-878138337519142282-n.jpg' }} />
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
        </View>
        </View>
    </SafeAreaView>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
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
    flexDirection: "row",
  
  },
  logo: {
    width: 50,
    height: 50
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width:1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    padding: 20
  }
});
