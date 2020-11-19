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
        <StackNavigator.Screen name={'Esplora Palestre'} component={GymListPage} options={{
          headerLeft: () => (
              <MenuButtom
                  onPress={ () => { navigation.openDrawer(); } }
                  style={{
                    paddingLeft: 10
                  }}/>
          ),
        }} />
        <StackNavigator.Screen name={'Palestra'} component={GymPage}/>
        <StackNavigator.Screen name={'Aggiungi Recensione Palestra'} component={AddFeedbackGymPage}/>
        <StackNavigator.Screen name={'Esplora Corsi'} component={CourseListPage}/>
        <StackNavigator.Screen name={'Corso'} component={CoursePage}/>
        <StackNavigator.Screen name={'Aggiungi Recensione Corso'} component={AddFeedbackCoursePage}/>
      </StackNavigator.Navigator>
  )
}
