import React, {Component} from 'react';
import {TextInput} from 'react-native';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    const {handleChangeText} = props;

    const thisHandleChangeText = this.handleChangeText.bind(this);

    this.handleChangeText = (function(text) {
      thisHandleChangeText(text);
      handleChangeText(text);
    }).bind(this);
  }

  handleChangeText(text) {
    this.setState({
      text,
    });
  }

  handleChange = (text) => {
    this.setState({
      text,
    });
  };

  render() {
    const {placeholder, style, textarea = false, ...rest} = this.props;

    return (
        <TextInput
            {...(textarea ? {multiline:true, numberOfLines:6, textAlignVertical:"top"}: {})}
            {...rest}
            style={[styles.input.default,(textarea ? styles.input.textarea: styles.input.row), style]}
            placeholder={placeholder}
            placeholderTextColor={styles.placeholderColor}
            value={this.props.value ? this.props.value : this.state.text}
            onChangeText={this.handleChangeText}
            autoCapitalize={'none'}
        />
    );
  }
}

const styles = {
  input: {
    default:{
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'transparent',
      fontSize: 14,
      paddingHorizontal: 5,
      color: 'black',
    },
    row:{
      height: 35,
      borderBottomColor: '#000000',
    },
    textarea:{
      width:250
    },
  },
  placeholderColor: 'rgb(201,201,201)',
};
