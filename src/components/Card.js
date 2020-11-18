import React from 'react';
import {View} from 'react-native';

export default class Card extends React.Component {
  render() {
    const {children, style} = this.props;
    return (
        <View style={[styles.container, style]}>
          {children}
        </View>
    );
  }
}

const styles = {
  container: {
    marginHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 15,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    minHeight: 50,
  }
};
