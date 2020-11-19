import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../../pages/ProfilePage';
import React from 'react';
import {MenuButtom} from '../../components';

const StackNavigator = createStackNavigator();
export default function ProfileNavigator({navigation}) {
  return (
      <StackNavigator.Navigator>
        <StackNavigator.Screen name={'Profilo'} component={Profile} options={{
          headerLeft: () => (
              <MenuButtom
                  onPress={ () => { navigation.openDrawer(); } }
                  style={{
                    paddingLeft: 10
                  }}/>
          ),
        }}/>
      </StackNavigator.Navigator>
  )
}
