import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native'

export default class Square extends React.Component {
  render() {
    const { xCoord, yCoord, width, height } = this.props;
    return (
      <TouchableOpacity>
        <Text style={{
          width,
          height,
          backgroundColor: this.props.off ? 'grey' : 'green',
          borderStyle: 'solid',
          borderColor: 'black',
          borderWidth: 1,
        }}
      />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

})
