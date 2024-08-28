import {Pressable, StyleSheet, View, Text} from 'react-native';
import {colors, dimensions} from '../../theme';

const WelcomeContainer = ({router}) => {
  const gotoProfileAndOpenCamera = () => {
    router.navigate('LoginOptionsScreen');
  };
  return (
    <View style={styles.welcomeContainer}>
      <View style={styles.welcomeImageContainer}>
        <Pressable onPress={gotoProfileAndOpenCamera}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.userNameContainer}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 16}}>App name</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    height: 100,
  },
  welcomeImageContainer: {
    padding: 20,
    paddingVertical: 25,
    flexDirection: 'row',
  },
  welcomeImage: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    marginRight: 10,
    tintColor: '#fff',
  },
  welcomeTextContainer: {
    flex: 1,
  },
  welcomeText: {
    color: colors.primaryColor,
    fontSize: 17,
  },
  userNameContainer: {
    justifyContent: 'center',
  },
  pinkBox: {
    backgroundColor: '#FDE9E0',
    height: dimensions.vh * 8,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

export default WelcomeContainer;
