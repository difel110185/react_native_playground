import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import NewsList from "./NewsList";
import NewsDetails from "./NewsDetails";

const RootStack = createStackNavigator(
    {
      NewsList: {screen: NewsList},
      NewsDetails: {screen: NewsDetails},
    },
    {
        initialRouteName: 'NewsList',
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

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}
