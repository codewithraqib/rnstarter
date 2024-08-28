import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {dimensions} from '../theme';
import {navigationState} from '../recoil/atoms/common';
import {useRecoilValue} from 'recoil';
import HomeScreen from '../screens/home';

const Stack = createNativeStackNavigator();

const HomeScreenStack = props => {
  //recoil states
  const navState = useRecoilValue(navigationState);

  const DrawerIcon = ({navigation, whiteIcon}) => {
    return (
      <Pressable onPress={() => navigation.navigation.toggleDrawer()}>
        <Image
          source={require('../assets/icons/menu-dot.png')}
          style={[
            whiteIcon ? {tintColor: '#fff'} : {tintColor: '#444'},
            styles.left_icon,
          ]}
        />
      </Pressable>
    );
  };

  const ScreenTitle = () => {
    return (
      <View style={styles.screen_title}>
        <Text>{navState.boldTitle}</Text>
        <Text> </Text>
        <Text>{navState.title}</Text>
      </View>
    );
  };

  const setScreenOptions = ({navigation}) => {
    return {
      headerTitleAlign: 'center',
      drawerStyle: {
        width: dimensions.vw * 70,
      },
      headerStyle: {
        backgroundColor: navState.transparent ? '#fff' : '#fff',
        // zIndex: 10,
      },
      headerTitle: () =>
        navState.boldTitle ? (
          <ScreenTitle />
        ) : (
          <Image
            source={require('../assets/icons/home.png')}
            style={{width: 100, height: 22}}
          />
        ),
      headerLeft: () =>
        navState.showHambergur && <DrawerIcon navigation={navigation} />,
      headerRight: navState.rightIcon
        ? props => (
            <Image
              source={navState.rightIcon}
              style={[
                navState.rightIconColor
                  ? {tintColor: navState.rightIconColor}
                  : {tintColor: '#444'},
                styles.right_icon,
              ]}
            />
          )
        : null,
    };
  };

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group
        screenOptions={navigation =>
          setScreenOptions({navigation: navigation})
        }>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{contentStyle: styles.screen_style, headerShown: false}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  screen_style: {backgroundColor: '#fff'},
  screen_title: {
    flexDirection: 'row',
  },
  left_icon: {
    width: 10,
    height: 24,
    padding: 10,
  },
  right_icon: {
    width: 24,
    height: 24,
    padding: 2,
    marginRight: 6,
  },
  back_icon: {
    width: 30,
    height: 20,
  },
});

export default HomeScreenStack;
