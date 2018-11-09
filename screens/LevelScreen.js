import React from 'react';
import { Button, Text } from 'react-native';

export default class LevelScreen extends React.Component {
  render() {
    console.log(this.props.navigation, this.state);
    const { navigate } = this.props.navigation;
    return (
      <Text>LEVEL DATA</Text>
    );
  }
}
