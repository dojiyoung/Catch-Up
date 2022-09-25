import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ReviewScreen from './screens/ReviewScreen/ReviewScreen';

export default function App() {
  const review = {
    userName: "Jiyoung Do",
    location: "@ Sunny side Coffee - dongdaemungu ",
    reviewText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Phasellus eget purus sit amet sem convallis aliquet congue ac purus.
     Maecenas non odio arcu. Vivamus feugiat at nisl sed rutrum. 
     Maecenas quis facilisis mauris. Vivamus in turpis nisl. 
     Fusce nec justo velit. 
     Maecenas in arcu finibus, 
     feugiat augue at, vestibulum sapien.`
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
