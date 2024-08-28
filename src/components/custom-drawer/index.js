import * as React from 'react';
import {View, StyleSheet, Platform, Pressable, Image, Text} from 'react-native';
import WelcomeContainer from './welcome-container';
import {colors, dimensions} from '../../theme';

const menuData = [
  {
    id: '1',
    name: 'Home',
    src: require('../../assets/icons/home.png'),
    screen: 'Home',
    title: 'Home',
  },
];

const CustomDrawer = props => {
  const MenuItem = React.memo(({id, icon, label, onMenuItemPressed}) => (
    <View style={styles.menu_item_wrapper}>
      <Pressable onPress={onMenuItemPressed}>
        <View style={styles.menuItem}>
          <View style={styles.iconContainer}>
            <Image width={20} height={20} style={styles.icon} source={icon} />
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>{label}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  ));

  const onMenuItemPressed = React.useCallback(screen => {
    props.props.navigation.navigate(screen);
  }, []);

  return (
    <View style={styles.drawer_wrapper}>
      <WelcomeContainer router={props.navigation} />
      <View style={styles.menu_container}>
        {menuData
          .sort((a, b) => a.id - b.id)
          .map((item, key) => (
            <MenuItem
              key={key}
              id={item.id}
              icon={item.src}
              label={item.name}
              onMenuItemPressed={() => onMenuItemPressed(item.screen, item.id)}
            />
          ))}
      </View>
      {/* <View style={styles.verion_label}>
        <MyText center bold style={{fontSize: 11}}>
          App version {VersionInfo.appVersion}
        </MyText>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  drawer_wrapper: {
    position: 'relative',
    height: '100%',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    marginTop: Platform.OS === 'ios' ? dimensions.vh * 3 : 0,
    backgroundColor: '#fff',
  },
  verion_label: {position: 'absolute', left: 0, bottom: 30, width: '100%'},
  verion_label_stg: {position: 'absolute', left: 0, bottom: 46, width: '100%'},
  menu_container: {
    paddingLeft: 15,
    paddingRight: 10,
    minHeight: Platform.OS === 'ios' ? dimensions.vh * 40 : null,
    marginTop: 20,
  },
  menuHeader: {
    paddingTop: 25,
    paddingLeft: 10,
  },
  menuHeaderText: {
    fontSize: 14,
  },
  menu_item_wrapper: {
    height: 40,
  },
  agents_menu_item_wrapper: {
    height: 40,
    backgroundColor: colors.secondaryBG,
    borderRadius: 30,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 3,
    maxWidth: dimensions.vw * 48,
  },
  menuItem: {
    width: '100%',
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    paddingLeft: 10,
  },
  iconContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -5,
    paddingHorizontal: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  labelContainer: {
    marginLeft: 10,
  },
  label: {
    fontSize: 14,
  },
});
export default CustomDrawer;
