import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from "./HomeScreen";
import SecondScreen from "./SecondScreen";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

const RootStack = createStackNavigator(
  {
      Home: {screen: HomeScreen},
      Details: {screen: SecondScreen},
      FirstPage: {screen: FirstPage},
      SecondPage: {screen: SecondPage}
  },
  {
    initialRouteName: 'FirstPage'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}
