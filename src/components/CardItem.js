import React from 'react';
import {View} from 'react-native';

export default class CardItem extends React.Component {
  render() {
    const {children, style, noMarginButton} = this.props;
    return (
        <View style={[ styles.default, style, noMarginButton ? { marginBottom: 0, } : {}, ]}>
          {children}
        </View>
    );
  }
}

const styles = {
  default:{
    paddingHorizontal: 12,
    marginBottom: 20,
  }
};
