import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ReviewScreen from './screens/ReviewScreen/ReviewScreen';

export default function App() {
  const review = {
    userName: "Jiyoung Do",
    location: "@ Coffee Lab - Glenfield ",
    reviewText: `We go to Coffee Lab at least five times a week. The coffee is always very good and easily the best on the North Shore.The cheese scones are delicious. The staff are very friendly and helpful. A great place to go.`
}

  return (
    <ReviewScreen review={review}/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
