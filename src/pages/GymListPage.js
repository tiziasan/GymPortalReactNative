import React, {useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from 'react-native';
import GymItem from './partial/GymItem';
import {Card, CardItem, ListButton} from '../components';
import {regions} from '../constants'
import {useDispatch, useSelector} from 'react-redux';
import {
  sGymLoading,
  sGymLoadedGyms,
  sFavoriteGyms,
  sAppLogged,
  sFavoriteLoading,
  sAppFilterSearchGym,
  sAppFilterSelectRegion,
} from '../reducers/selectors';
import {
  appFilterChangeSearchGym,
  appFilterChangeSelectRegion,
  appFilterSelectRegionReset,
  favoriteGymFetch,
  gymsFetch,
} from '../actions';
import {SearchBar} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';


export default function({ navigation }) {
  const logged = useSelector(sAppLogged);
  const gyms = useSelector(sGymLoadedGyms);
  const gymLoading = useSelector(sGymLoading);
  const favoriteGyms = useSelector(sFavoriteGyms);
  const favoritesLoading = useSelector(sFavoriteLoading);
  const search = useSelector(sAppFilterSearchGym);
  const region = useSelector(sAppFilterSelectRegion);
  const dispatch = useDispatch();

  if (logged){
    useEffect(() => {
      dispatch(favoriteGymFetch());
    }, []);
  }

  useEffect(() => {
    dispatch(gymsFetch());
  }, []);

  if (favoritesLoading) {
    return (
        <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} color={'green'} />
        </View>
    );
  }

  return (
      <View style={styles.container} >
        <ScrollView
            refreshControl={ <RefreshControl refreshing={gymLoading && favoritesLoading} onRefresh={ () => {dispatch(gymsFetch()); dispatch(favoriteGymFetch());} } /> }
        >
          <SearchBar
              placeholder="Nome Palestra..."
              onChangeText={ (value) => dispatch(appFilterChangeSearchGym(value))}
              value={search}
          />


          {/*alternativa https://github.com/n4kz/react-native-material-dropdown*/}
          <Picker
              style={{height: 50, width: 200}}
              mode={'dropdown'}
              selectedValue={region}
              onValueChange={(value) => dispatch(appFilterChangeSelectRegion(value))}>
            <Picker.Item label="Cerca per regione" value="" />
            {
              regions.map((region) => (
                  <Picker.Item label={region} value={region} />
              ))
            }
          </Picker>

          <Card>
            {gymLoading
                ? <ActivityIndicator size={'large'} color={'green'} />
                : ( gyms.length
                        ? gyms.map((gym, key) => (
                            <GymItem
                                key={`gym-item-${gym.id}`}
                                gym={gym}
                                isFavorite={favoriteGyms.some(fg => fg.id === gym.id)}
                                navigation={navigation}
                            />
                        ))
                        : <CardItem>
                            <Text>Non ci sono Palestre!</Text>
                          </CardItem>
                )
            }

          </Card>
        </ScrollView>
      </View>
  );

};

const styles = {
  container: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor:'#FFFFFF',
  },
};
