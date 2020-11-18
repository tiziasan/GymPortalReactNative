import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {CardItem} from '../../components';
import {Rating} from 'react-native-elements';
import {getUser} from '../../api';

export default function({feedback}) {
  const [user, setUser] = useState({user: null});

  useEffect(() => {
    getUser(feedback.user).
        then(data => {
          data.lastname = data.lastname.substr(0, 1);
          setUser(data);
        });
  }, []);

  if (user === null) {
    return (
        <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} color={'green'}/>
        </View>
    );
  }

  return (
      <CardItem style={styles.container}>
        <CardItem>

          <Text style={styles.textUser}>
            {user.name} {user.lastname}
          </Text>
          <Rating type='custom'
                  imageSize={30}
                  readonly
                  startingValue={feedback.rating}
          />

        </CardItem>

        <Text style={styles.textFeed}>{feedback.feed}</Text>

      </CardItem>
  );

}

const styles = {
  container: {
    marginBottom: 24,
    borderRadius: 20,
    backgroundColor: '#e1f5fe',

  },
  row: {
    container: {
      flexDirection: 'row', marginBottom: 10,
    },
    column: {
      flex: 1, paddingHorizontal: 0,
    },
  },
  textFeed: {
    textAlign: 'center',
    marginBottom: 20,
  },
  textUser: {
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold'
  },
};
