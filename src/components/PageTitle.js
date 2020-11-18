import React from 'react';
import {Text} from 'react-native';

class PageTitle extends React.Component {
  render() {
    const {children, style} = this.props;
    return (
        <Text style={[styles.title, style]} >
          {children}
        </Text>
    );
  }
}

const styles = {
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#555555',
  }
};

export default PageTitle;
