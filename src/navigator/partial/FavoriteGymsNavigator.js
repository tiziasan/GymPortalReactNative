import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {MenuButtom} from '../../components';
import GymPage from '../../pages/GymPage';
import AddFeedbackGymPage from '../../pages/AddFeedbackGymPage';
import AddFeedbackCoursePage from '../../pages/AddFeedbackCoursePage';
import CourseListPage from '../../pages/CourseListPage';
import CoursePage from '../../pages/CoursePage';
import FavoriteGymsPage from '../../pages/FavoriteGymsPage';

const StackNavigator = createStackNavigator();
export default function FavoriteGymsNavigator({navigation}) {
  return (
      <StackNavigator.Navigator>
        <StackNavigator.Screen name={'Palestre Preferite'} component={FavoriteGymsPage} options={{
          headerLeft: () => (
              <MenuButtom
                  onPress={ () => { navigation.openDrawer(); } }
                  style={{
                    paddingLeft: 10
                  }}/>
          ),
        }}/>
        <StackNavigator.Screen name={'Palestra'} component={GymPage}/>
        <StackNavigator.Screen name={'Aggiungi Recensione Palestra'} component={AddFeedbackGymPage}/>
        <StackNavigator.Screen name={'Esplora Corsi'} component={CourseListPage}/>
        <StackNavigator.Screen name={'Corso'} component={CoursePage}/>
        <StackNavigator.Screen name={'Aggiungi Recensione Corso'} component={AddFeedbackCoursePage}/>
      </StackNavigator.Navigator>
  )
}
