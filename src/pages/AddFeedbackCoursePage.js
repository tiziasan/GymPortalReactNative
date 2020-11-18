import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Rating} from 'react-native-elements';
import {Card, CardItem, Input, ListButton} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {
  sFeedbacksCurrentFeedback,
  sFeedbacksExistingFeedbackByUserIdAndCourseId,
} from '../reducers/FeedbackReducer';
import {
  feedbackChangeFeed,
  feedbackChangeId,
  feedbackChangeRating,
  feedbackCourseAdd, feedbackCourseDelete,
  feedbackCourseUpdate,
  feedbackReset,
} from '../actions';
import {sUserProps} from '../reducers/UserReducer';

function AddFeedbackCoursePage({ route, navigation }) {
  const { idGym, idCourse } = route.params;
  const user = useSelector(sUserProps);
  const existingFeedback = useSelector(sFeedbacksExistingFeedbackByUserIdAndCourseId(user.id, idCourse));
  const feedback = useSelector(sFeedbacksCurrentFeedback);
  const dispatch = useDispatch();

  if (existingFeedback){
    useEffect( () => {
      dispatch(feedbackChangeId(existingFeedback.id))
      dispatch(feedbackChangeRating(existingFeedback.rating));
      dispatch(feedbackChangeFeed(existingFeedback.feed));
    }, []);
  } else {
    useEffect( () => {
      dispatch(feedbackReset());
    }, []);
  }

  const AddFeedback = function() {
    if( existingFeedback ){
      dispatch(feedbackCourseUpdate(idGym, idCourse));
    } else {
      dispatch(feedbackCourseAdd(idGym, idCourse))
    }
    navigation.goBack();
  }

  return (
      <View style={styles.container}>

        <Card style={styles.containerCard}>

          <CardItem>
            <Rating
                ratingCount={5}
                startingValue={feedback.rating}
                onFinishRating={(value)=>{dispatch(feedbackChangeRating(value))}}
            />
          </CardItem>
          <CardItem>
            <Input
                textarea
                placeholder={'name'}
                handleChangeText={(value) => {dispatch(feedbackChangeFeed(value))}}
                value={feedback.feed}
            />
          </CardItem>

        </Card>

        <ListButton
            onPress={ () => AddFeedback()}
            text={'Aggiungi Recensione'}
            style={ styles.button }
        />
        <ListButton
            onPress={ () => {
              dispatch(feedbackCourseDelete(idGym, idCourse));
              navigation.goBack();
            }}
            text={'Elimina Recensione'}
            style={ styles.buttonDelete }
        />

      </View>
  );

}

export default AddFeedbackCoursePage;

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFFFFF'

  },
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    margin: 10,
    height:60

  },
  buttonDelete: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    margin: 10,
    backgroundColor: 'red',
    height:60

  },
  containerCard:{
    backgroundColor: '#e1f5fe',
    borderRadius: 20,
    padding: 10,


  }
};
