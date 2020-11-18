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
  if(favoriteCourses.length === 0) {
    return <Text>Empty Courses List</Text>;
  }

  return (
      <View style={styles.container}>
        <ScrollView
            refreshControl={ <RefreshControl refreshing={favoritesLoading} onRefresh={ () => {dispatch(favoriteCourseFetch());} } /> }
        >
          <Card>
            {favoriteCourses.map((course, key) => (
                <CourseItem
                    key={`course-item-${course.id}`}
                    course={course}
                    isFavorite={ true } //se si toglie funziona uguale ma scompare cuore
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
