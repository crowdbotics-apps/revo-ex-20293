import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen49101662Navigator from '../features/BlankScreen49101662/navigator';
import Maps101644Navigator from '../features/Maps101644/navigator';
import Add-Item101643Navigator from '../features/Add-Item101643/navigator';
import Maps101639Navigator from '../features/Maps101639/navigator';
import UserProfile101635Navigator from '../features/UserProfile101635/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen49101662: { screen: BlankScreen49101662Navigator },
Maps101644: { screen: Maps101644Navigator },
Add-Item101643: { screen: Add-Item101643Navigator },
Maps101639: { screen: Maps101639Navigator },
UserProfile101635: { screen: UserProfile101635Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
