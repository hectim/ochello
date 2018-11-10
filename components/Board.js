import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Square from './Square';
import _ from 'lodash';
import { Dimensions } from 'react-native'

const styles = StyleSheet.create({
  board: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  boardRow: {
    flexDirection: 'row',
    marginTop: 0,
  },
})

export default class Board extends React.Component {
  getBoardDimensions() {
    let { legend } = this.props;
    const xCount = legend[0].length;
    const yCount = legend.length;
    let { width, height } = Dimensions.get('window');
    return { x: (width*.9), y: (height*.6), xCount, yCount };
  }

  wholeRow(rowCount) {
    const { x, y, xCount, yCount } = this.getBoardDimensions();
    const { legend } = this.props;
    return _.map(_.range(xCount), (_, i) => (
      <Square
        key={i}
        width={x/xCount}
        height={y/yCount}
        off={legend[rowCount][i] ? false : true}
        xCoord={i}
        yCoord={rowCount}
      />
    ));
  }

  wholeBoard() {
    const { x, y, xCount, yCount } = this.getBoardDimensions();
    return _.map(_.range(yCount), (_, i) => (
      <View style={{...styles.boardRow, marginTop: i!=0 ? y/yCount : 0}} key={i}>
        {this.wholeRow(i)}
      </View>
    ));
  }

  render() {
    return (
      <View style={styles.board}>
        {this.wholeBoard()}
      </View>
    );
  }
}
