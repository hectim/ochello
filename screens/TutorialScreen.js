import React from 'react';
import { Button, Text, View } from 'react-native';
import Board from '../components/Board';

const legend = [
  [0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

export default class TutorialScreen extends React.Component {
  static navigationOptions = {
    title: 'Tutorial',
  };
  // updateSquare(x, y, piece=0){
  //   let newLegend = legend;
  //   newLegend[y][x] = newLegend[y][x] ? 0 : 1;
  //   this.setState({ legend: newLegend });
  // }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Board legend={legend} height={10} width={10} update={this.updateSquare}/>
      </View>
    );
  }
}
