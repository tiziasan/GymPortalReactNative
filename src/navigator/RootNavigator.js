import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from '../pages/auth/LoginPage';
import SignUpPage from '../pages/auth/SignUpPage';
import {sAppLogged} from '../reducers/AppReducer';
import {useSelector} from 'react-redux';
import DrawerNavigator from './DrawerNavigator';

const RootStack = createStackNavigator();

export default function() {
  const logged = useSelector(sAppLogged);

  return (
      <NavigationContainer>
        {!logged && (
            <RootStack.Navigator>
              <RootStack.Screen name={'SignIn'} component={LoginPage}/>
              <RootStack.Screen name={'SignUp'} component={SignUpPage}/>
            </RootStack.Navigator>
        )}
        {logged && (
            <DrawerNavigator />
        )}
      </NavigationContainer>
  );
}
