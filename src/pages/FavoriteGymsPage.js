import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView, Text,
  View,
} from 'react-native';
import {
  Card,
  CardItem,
  Input,
  InputLabel,
  ListButton,
  PageTitle,
} from '../components';
import {sUserLoading, sUserProps} from '../reducers/UserReducer';
import {
  favoriteGymFetch, gymsFetch,
  userFormChangeEmail, userFormChangeLastname,
  userFormChangeName, userFormChangePassword,
  userFormChangeUsername, userRefresh, userUpdate,
} from '../actions';
import {sAppLogged} from '../reducers/AppReducer';
import {sGymLoadedGyms, sGymLoading} from '../reducers/GymReducer';
import {sFavoriteGyms, sFavoriteLoading} from '../reducers/FavoriteReducer';
import GymItem from './partial/GymItem';


export default function({ navigation }) {
  const logged = useSelector(sAppLogged);
  const favoriteGyms = useSelector(sFavoriteGyms);
  const favoritesLoading = useSelector(sFavoriteLoading);
  const dispatch = useDispatch();

  if (logged){
    useEffect(() => {
      dispatch(favoriteGymFetch());
    }, []);
  }

  if (favoritesLoading) {
    return (
        <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} color={'green'} />
        </View>
    );
  }
  if (favoriteGyms.length === 0) {
    return <Text>Empty Gyms List</Text>;
  }

  return (
      <View style={styles.container} >
        <ScrollView
            refreshControl={ <RefreshControl refreshing={favoritesLoading} onRefresh={ () => {dispatch(favoriteGymFetch());} } /> }
        >
          <Card>
            {favoriteGyms.map((gym, key) => (
                <GymItem
                    key={`gym-item-${gym.id}`}
                    gym={gym}
                    isFavorite={true} //se si toglie funziona uguale ma scompare cuore
                    navigation={navigation}
                />
            ))}
          </Card>
        </ScrollView>
      </View>
  );

};

const styles = {
  container: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF'
  },
};
