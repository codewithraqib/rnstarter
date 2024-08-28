import {StyleSheet, View, Image, Platform, Pressable, Text} from 'react-native';
import {fontSizes} from '../../theme/commonStyles';

const MobileHeader = ({
  hideHome,
  hideBackArrow,
  title,
  boldTitle,
  showMenuIcon,
  headerTextBlack,
  rightIcon,
  rightIconStyle,
  rightIconPress,
  onBackClick,
  headerBoldTitleImage,
  transparentHeader,
  router,
}) => {
  const gotoHome = () => {
    router.reset({
      index: 0,
      routes: [{name: 'BusHomeScreen'}],
    });
  };

  const goBack = () => {
    router.goBack();
  };

  return (
    <View
      style={[
        styles.mobile_header,
        headerTextBlack ? styles.mobile_header_white : {},
        transparentHeader ? styles.header_transparent : {},
      ]}>
      {showMenuIcon ? (
        <View style={styles.header_menu_button}>
          <Image
            onPress={() => router.toggleDrawer()}
            height={26}
            source={require('../../assets/icons/menu-dot.png')}
          />
        </View>
      ) : !hideBackArrow ? (
        <Pressable
          style={styles.header_back_button}
          onPress={onBackClick ? onBackClick : () => goBack(true)}>
          <View>
            <Image
              width={26}
              style={{tintColor: headerTextBlack ? '#464646' : '#fff'}}
              source={require('../../assets/icons/menu-dot.png')}
            />
          </View>
        </Pressable>
      ) : null}
      <View style={[styles.label]}>
        {title && (
          <Text
            style={{
              color: headerTextBlack ? '#464646' : '#fff',
              fontSize: fontSizes.font18,
            }}>
            {title + ' '}
          </Text>
        )}
        {boldTitle && (
          <Text
            bold
            style={{
              color: headerTextBlack ? '#464646' : '#fff',
              fontSize: fontSizes.font18,
            }}>
            {boldTitle}
          </Text>
        )}
        {headerBoldTitleImage && (
          <Image style={{height: 22}} source={headerBoldTitleImage} alt="" />
        )}
      </View>
      {!rightIcon && hideHome && <View style={{width: 40}} />}

      {!hideHome && !rightIcon ? (
        <View
          style={styles.right_icon}
          //   href={href}
          // onPress={gotoHome}
        >
          <Image
            style={{tintColor: headerTextBlack ? '#464646' : '#fff'}}
            onPress={gotoHome}
            width={24}
            source={require('../../assets/icons/home.png')}
          />
        </View>
      ) : null}
      {rightIcon ? (
        <View>
          <Pressable onPress={rightIconPress}>
            <View style={styles.right_icon}>
              <Image
                style={[
                  {
                    tintColor: headerTextBlack ? '#464646' : '#fff',
                    width: 18,
                    height: 18,
                  },
                  rightIconStyle,
                ]}
                source={rightIcon}
              />
            </View>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  mobile_header: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: Platform.OS === 'ios' ? 50 : 5,
    paddingVertical: 8,
    zIndex: 1000,
  },
  label: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_menu_button: {
    padding: 5,
    paddingHorizontal: 10,
  },
  header_back_button: {
    padding: 5,
    paddingHorizontal: 10,
  },
  right_icon: {
    padding: 5,
    paddingHorizontal: 10,
    // backgroundColor: "red",
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
  },
});

export default MobileHeader;
