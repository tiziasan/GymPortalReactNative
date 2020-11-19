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
} from '../components';
import {
  favoriteCourseFetch,
} from '../actions';
import {sAppLogged} from '../reducers/AppReducer';
import {sFavoriteCourses, sFavoriteLoading} from '../reducers/FavoriteReducer';
import CourseItem from './partial/CourseItem';
import CardItem from '../components/CardItem';


export default function({ navigation }) {
  const logged = useSelector(sAppLogged);
  const favoriteCourses = useSelector(sFavoriteCourses);
  const favoritesLoading = useSelector(sFavoriteLoading);
  const dispatch = useDispatch();

  if (logged){
    useEffect(() => {
      dispatch(favoriteCourseFetch());
    }, []);
  }

  if ( favoritesLoading ) {
    return (
        <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} color={'green'} />
        </View>
    );
  }

  return (
      <View style={styles.container}>
        <ScrollView
            refreshControl={ <RefreshControl refreshing={favoritesLoading} onRefresh={ () => {dispatch(favoriteCourseFetch());} } /> }
        >
          <Card>
            {favoritesLoading
                ? <ActivityIndicator size={'large'} color={'green'} />
                : ( favoriteCourses.length
                        ? favoriteCourses.map((course, key) => (
                            <CourseItem
                                key={`favorite-course-item-${course.id}`}
                                course={course}
                                isFavorite={ true } //se si toglie funziona uguale ma scompare cuore
                                navigation={navigation}
                            />
                        ))
                        : <CardItem>
                          <Text>Non ci sono Corsi Preferiti!</Text>
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
    backgroundColor: '#FFFFFF'
  },
};
