import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {Button, Icon} from 'react-native-elements';

export const LoginButton = function({onPress, inLoading = false, text = 'Login'}) {
  return (
      <TouchableOpacity
          style={[
            styles.button.container,
            styles.loginButton.container,
          ]}
          onPress={onPress}
      >
        {inLoading &&
        <ActivityIndicator size="small" color="rgb(254, 178, 7)" />}
        {!inLoading && <Text style={[styles.button.text]}>{text}</Text>}
      </TouchableOpacity>
  );
};

export const LinkButton = function({onPress, text}) {
  return (
      <TouchableOpacity
          style={[
            styles.link.container,

          ]}
          onPress={onPress}
      >
        <Text style={[styles.link.text]}>{text}</Text>
      </TouchableOpacity>
  );
};

export const ListButton = function({onPress, text, inLoading = false, style}) {
  return (
      <TouchableOpacity
          onPress={onPress}
          style={[styles.button.container, styles.listButton.container, style]}
      >
        {inLoading &&
          <ActivityIndicator size="small" color="rgb(254, 178, 7)" />
        }
        {!inLoading &&
          <Text style={[styles.button.text, styles.listButton.text]}>
            {text}
          </Text>
        }
      </TouchableOpacity>
  );
};

export const FavoriteButton = function({onPress, favorite, style}) {
  const heart = <Icon name='heart' type='ionicon'  color='red' size={36}/>;
  const heart_outline = <Icon name='heart-outline' type='ionicon' size={36}/>;

  return (
      <TouchableOpacity onPress={onPress}
                        style={[styles.button.container, style]}>
        {favorite ? heart : heart_outline}
      </TouchableOpacity>
  );
};

export const MenuButtom = function({onPress, style}) {
  return (
      <TouchableOpacity onPress={onPress}
                        style={[styles.button.container, style]}>
        <Icon name='menu' type='ionicon' />
      </TouchableOpacity>
  );
};

const styles = {
  link: {
    container: {
      height: 30,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginLeft: '50%',
      borderRadius: 20,
      backgroundColor: '#42a5f5',
      paddingTop:5,
      margin: 10,

    },
    text: {
      fontSize: 14,
      fontWeight: '900',
      color: 'white',
    },
  },
  button: {
    container: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    text: {
      fontSize: 14,
      fontWeight: '900',
      textTransform: 'uppercase',
      color: 'white',
    },
  },
  loginButton: {
    container: {
      backgroundColor: '#1e88e5',
    },
  },
  listButton: {
    container: {
      height: 45,
      backgroundColor: '#1e88e5',
    },
    text: {
      color: 'white',
    },
  },
};
