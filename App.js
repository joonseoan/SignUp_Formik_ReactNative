import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

import Header from './src/components/Header';
import InputControl from './src/components/InputControl';
// import Inputs from './src/components/Inputs';
import Button from './src/components/Button'

export default () => {
  // return(<View style={styles.container} ><Text>DDDD</Text></View>);
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <InputControl />
      <Button />
    </View>
  );
};

// AppRegistry.registerComponent('authentication', () => App);



// export default function App() {
//   return (
//     <View>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
