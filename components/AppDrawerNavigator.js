import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from '../components/AppTabNavigator';
import TimetableScreen from '../screens/TimetableScreen';
import CustomSideBarMenu  from '../components/CustomSideBarMenu';


export const AppDrawerNavigator = createDrawerNavigator({
    Home : {
      screen : AppTabNavigator
      },
      Timetable:{
        screen : TimetableScreen
      },
    //   Setting : {
    //     screen : SettingScreen
    // },
    },
    {
      contentComponent:CustomSideBarMenu
    },
    {
      initialRouteName : 'Home'
    })
  