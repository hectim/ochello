import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';
import MenuScreen from './screens/MenuScreen';
import TutorialScreen from './screens/TutorialScreen';
import LevelScreen from './screens/LevelScreen';

const App = createStackNavigator({
  Menu: { screen: MenuScreen },
  Tutorial: { screen: TutorialScreen },
  Level: {
    screen: LevelScreen,
    navigationOptions: ({ navigation }) => ({
      title: `Level ${navigation.state.params.number}`
    })
  },
});

export default App;


// export default class App extends React.Component {
//   render() {
//     return (
//       <Text style={styles.title}>hello</Text>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 50
//   }
// });
