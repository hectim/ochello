import React from 'react';
import { Button, Text } from 'react-native';

export default class TutorialScreen extends React.Component {
  static navigationOptions = {
    title: 'Tutorial',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Text>LEVEL DATA</Text>
    );
  }
}
