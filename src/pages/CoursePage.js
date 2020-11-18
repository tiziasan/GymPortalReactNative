import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {
  courseFetch,
  feedbacksCourseFetch,
  feedbacksCourseReset,
} from '../actions';
import {Card, CardItem, PageTitle} from '../components';
import FeedbackItem from './partial/FeedbackItem';
import FAB from 'react-native-fab';
import {Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {sUserProps} from '../reducers/UserReducer';
import {
  sFeedbackLoading,
  sFeedbacksCourse,
} from '../reducers/FeedbackReducer';
import {
  sGymLoadedCoursesByGymIdAndCourseId,
  sGymLoading,
} from '../reducers/GymReducer';


function CoursePage({ route, navigation }) {
  const { idGym, idCourse } = route.params;
  const user = useSelector(sUserProps);
  const course = useSelector(sGymLoadedCoursesByGymIdAndCourseId(idGym, idCourse));
  const loading = useSelector(sGymLoading);
  const feedbacks = useSelector(sFeedbacksCourse);
  const feedbacksLoading = useSelector(sFeedbackLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    return navigation.addListener('beforeRemove', () => {
      dispatch(feedbacksCourseReset());
    });
  }, [navigation]);

  if (course === null){
    useEffect(() => {
      dispatch(courseFetch(idGym, idCourse));
    }, []);
  }

  useEffect(() => {
    dispatch(feedbacksCourseFetch(idGym, idCourse));
  }, []);

  if (loading){
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
            refreshControl={ <RefreshControl refreshing={loading && feedbacksLoading}
                                             onRefresh={ () => {
                                               dispatch(courseFetch(idGym, idCourse));
                                               dispatch(feedbacksCourseFetch(idGym, idCourse));} } /> }
        >
          <Card  style={styles.containerCard}>
            <CardItem>
              <PageTitle style={ styles.textName }>{course.name}</PageTitle>
            </CardItem>
            <CardItem>
              <Text style={ styles.textRegion }>
                Codice Corso: {course.code}
              </Text>
            </CardItem>
            <CardItem>
              <Text style={ styles.textRegion }>
                 {course.description}
              </Text>
            </CardItem>

          </Card>

          <Card style={ styles.feedbacks.container} >
            <CardItem>
              <PageTitle style={ styles.feedbacks.title }>Recensioni del Corso</PageTitle>
            </CardItem>

            {feedbacksLoading
                ? <ActivityIndicator size={'large'} color={'green'} />
                : ( feedbacks.length
                        ? feedbacks.map((feedback, key) => (
                            <FeedbackItem
                                key={`feedback-item-${feedback.id}`}
                                feedback={feedback}
                            />
                        ))
                        : <CardItem>
                          <Text>Non ci sono recensioni!</Text>
                        </CardItem>
                )
            }

          </Card>

        </ScrollView>

        <FAB
            buttonColor='rgb(254, 178, 7)'
            iconTextColor="#fff"
            onClickAction={() => navigation.navigate('Add Feedback Course', {idGym, idCourse})}
            iconTextComponent={
              feedbacks.some(f => f.user === user.id)
                  ? <Icon name='pencil-outline' type='ionicon' />
                  : <Icon name='star-outline' type='ionicon' />
            }
        />

      </View>
  );

}

export default CoursePage;


const styles = {
  container: {
    flex: 1,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#FFFFFF',

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
    width:300,
    marginTop:20,
  },
  feedbacks:{
    container: {
      width: 300,
      marginTop: 20,
    },
    title:{
      fontSize: 18,
      textTransform:'capitalize',
      textAlign: 'center'

    }
  }
};
