import {
  createDrawerNavigator,
  DrawerContentScrollView, DrawerItem, DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {useDispatch} from 'react-redux';
import {userLogout} from '../actions';
import ProfileNavigator from './partial/ProfileNavigator';
import GymNavigator from './partial/GymNavigator';
import FavoriteGymsNavigator from './partial/FavoriteGymsNavigator';
import FavoriteCoursesNavigator from './partial/FavoriteCoursesNavigator';

//https://stackoverflow.com/questions/60131376/set-header-for-drawer-navigation
function CustomDrawerContent(props) {
  const dispatch = useDispatch();
  return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label={'Logout'} onPress={ ()=>{ dispatch(userLogout()); }} />
      </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
      <Drawer.Navigator initialRouteName={'Esplora palestre'} drawerContent={props => <CustomDrawerContent {...props}/>} >

        <Drawer.Screen name={'Profilo'} component={ProfileNavigator} />
        <Drawer.Screen name={'Esplora palestre'} component={GymNavigator} />
        <Drawer.Screen name={'Palestre Preferite'} component={FavoriteGymsNavigator} />
        <Drawer.Screen name={'Corsi Preferiti'} component={FavoriteCoursesNavigator} />

      </Drawer.Navigator>
  )
}
