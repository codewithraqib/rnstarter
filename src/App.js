/**
 *
 * Sample React Native App with Recoil State Magement
 * https://github.com/facebook/react-native
 * https://github.com/codewithraqib
 * author Raqib <codewithraqib@gmail.com>
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import CustomDrawer from './components/custom-drawer';
import HomeScreenStack from './stacks/home-screen-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RecoilRoot} from 'recoil';
import RootComponent from './components/root-component/root-component';
// import SplashScreen from 'react-native-splash-screen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const MainStack = () => {
  return (
    <RootComponent>
      <HomeScreenStack />
    </RootComponent>
  );
};

const App = () => {
  // useEffect(() => {
  //   SplashScreen?.hide();
  // }, []);

  return (
    <RecoilRoot>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{headerShown: false}}
          drawerContent={props => <CustomDrawer props={props} />}>
          <Drawer.Screen name="Home Stack" component={MainStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
