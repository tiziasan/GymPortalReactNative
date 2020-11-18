import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {CardItem, FavoriteButton} from '../../components';
import {useDispatch} from 'react-redux';
import {handleFavoriteGym} from '../../actions';

export default function({gym, isFavorite, navigation}) {
  const dispatch = useDispatch();

  const handleFavoriteButtonPress = function() {
    dispatch(handleFavoriteGym(gym, isFavorite));
  }

  return (
      <TouchableOpacity onPress={() => { navigation.navigate('Gym', {idGym: gym.id})}}>
        <CardItem style={styles.containerCard}>
          <Image source={{uri: 'https://image.shutterstock.com/image-photo/image-250nw-721723381.jpg'}}
                 style={{width: '100%', height: 167,     borderRadius: 20}} />
          <View style={styles.container}>

            <View style={styles.containerText}>

              <Text style={styles.textName}>{gym.name}</Text>
              <Text style={styles.textRegion}>{gym.address},  {gym.province},  {gym.region}</Text>

            </View>
            { isFavorite !== undefined && ( //controllo per la pagina favoritegyms se si vuole togliere il isFavorite e percio il cuore
                <View style={{justifyContent: 'center'}}>
                  <FavoriteButton
                      onPress={handleFavoriteButtonPress}
                      favorite={isFavorite}
                      style={styles.button}
                  />
                </View>
            )}
          </View>
        </CardItem>
      </TouchableOpacity>
  );

}

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  containerText: {
    justifyContent: 'space-around',

  },
  textName: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  textRegion: {
    textAlign: 'center',
    paddingTop: 20,


  },
  containerCard:{
    backgroundColor: '#e1f5fe',
    borderRadius: 20,
    padding: 10,


  }
};
