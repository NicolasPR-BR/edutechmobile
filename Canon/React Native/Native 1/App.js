import React, { Fragment , useState, useEffect } from 'react';
import {ScrollView, FlatList, StatusBar, Platform} from 'react-native';

//Hooks
import { Feed } from './src/Views/feed';
import {Login} from './src/Views/login';

//Addons
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const navigator = createStackNavigator({
  Login:{ screen: Login},
  Feed:{ screen: Feed}

});

const AppContainer = createAppContainer(navigator);

const App = () => {
  
  return (
    <AppContainer/>

  );

};

export default App;
