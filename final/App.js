import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from "./Home";
import FetchFromAPI from "./FetchFromAPI";
import Animation from "./Animation";
import GoogleMaps from "./GoogleMaps";
import Splash from "./Splash";

const AppStack = createStackNavigator(
    {
        Home: {screen: Home},
        FetchFromAPI: {screen: FetchFromAPI},
        Animation: {screen: Animation},
        GoogleMaps: {screen: GoogleMaps}
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#0686E4'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }
    },
);

const RootNavigator = createSwitchNavigator(
    {
        App: AppStack,
        Splash: Splash
    },
    {
        initialRouteName: 'Splash'
    }
);

export default createAppContainer(RootNavigator);
