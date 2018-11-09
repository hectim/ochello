import React from 'react';
import {
  Alert,
  BackHandler,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import _ from 'lodash';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  item: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
  }
});

export default class MenuScreen extends React.Component {
  static state = {
    completed: 1,
  };

  static navigationOptions = {
    title: '♛♛  Chello ♛♛',
    headerTitleStyle: {
      textAlign:'center',
      alignSelf:'center',
      flex:1
    }
  };

  displayLevels = () => {
    const { navigate } = this.props.navigation;
    // const { completed } = this.state;
    let result = [];

    for(var count=0; count<1; count++){
      result.push(
        <View style={styles.item} key={count}>
          <Button
            key={count}
            title={`Level ${count+1}`}
            onPress={() =>
                navigate('Level', { number: count })
            }
          />
        </View>
      );
    }

    return result;
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Button
            title="Tutorial"
            onPress={() =>
                navigate('Tutorial')
            }
          />
        </View>
        {this.displayLevels()}
        <View style={styles.item}>
          <Button
            title="Quit"
            onPress={() =>
                Alert.alert(
                '',
                'Want to Quit?',
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => BackHandler.exitApp()},
                ],
                { cancelable: true }
              )
            }
          />
        </View>
      </View>
    );
  }
};
