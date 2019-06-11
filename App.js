import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

export default () => {
  return(<View style={styles.container} ><Text>DDDD</Text></View>);
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
