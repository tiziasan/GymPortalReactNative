import {createStackNavigator} from '@react-navigation/stack';
import GymListPage from '../../pages/GymListPage';
import GymPage from '../../pages/GymPage';
import CourseListPage from '../../pages/CourseListPage';
import CoursePage from '../../pages/CoursePage';
import React from 'react';
import {MenuButtom} from '../../components';
import AddFeedbackGymPage from '../../pages/AddFeedbackGymPage';
import AddFeedbackCoursePage from '../../pages/AddFeedbackCoursePage';

const StackNavigator = createStackNavigator();
export default function GymNavigator({navigation}) {
  return (
      <StackNavigator.Navigator>
        <StackNavigator.Screen name={'Gym List'} component={GymListPage} options={{
          headerLeft: () => (
              <MenuButtom
                  onPress={ () => { navigation.openDrawer(); } }
                  style={{
                    paddingLeft: 10
                  }}/>
          ),
        }} />
        <StackNavigator.Screen name={'Gym'} component={GymPage}/>
        <StackNavigator.Screen name={'Add Feedback Gym'} component={AddFeedbackGymPage}/>
        <StackNavigator.Screen name={'Courses List'} component={CourseListPage}/>
        <StackNavigator.Screen name={'Course'} component={CoursePage}/>
        <StackNavigator.Screen name={'Add Feedback Course'} component={AddFeedbackCoursePage}/>
      </StackNavigator.Navigator>
  )
}
