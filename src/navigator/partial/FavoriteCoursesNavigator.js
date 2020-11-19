import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {MenuButtom} from '../../components';
import CoursePage from '../../pages/CoursePage';
import FavoriteCoursesPage from '../../pages/FavoriteCoursesPage';
import AddFeedbackCoursePage from '../../pages/AddFeedbackCoursePage';

const StackNavigator = createStackNavigator();
export default function FavoriteCoursesNavigator({navigation}) {
  return (
      <StackNavigator.Navigator>
        <StackNavigator.Screen name={'Corsi Preferiti'} component={FavoriteCoursesPage} options={{
          headerLeft: () => (
              <MenuButtom
                  onPress={ () => { navigation.openDrawer(); } }
                  style={{
                    paddingLeft: 10
                  }}/>
          ),
        }}/>
        <StackNavigator.Screen name={'Corso'} component={CoursePage}/>
        <StackNavigator.Screen name={'Aggiungi Recensione Corso'} component={AddFeedbackCoursePage}/>
      </StackNavigator.Navigator>
  )
}
