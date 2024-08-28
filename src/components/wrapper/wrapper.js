import {StyleSheet, View, StatusBar} from 'react-native';

import {colors, dimensions} from '../../theme';
import MobileHeader from '../mobile-header';

const MainWrapper = ({
  children,
  router,
  headerTitle,
  headerBoldTitle,
  headerBoldTitleImage,
  headerTextBlack,
  rightIcon,
  rightIconStyle,
  rightIconClick,
  onBackClick,
  hideHome,
  showMenuIcon,
  transparentHeader,
  style,
  hideBackArrow = false,
}) => {
  return (
    <View style={[styles.main_wrapper]}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#f5f5f5'} />

      <MobileHeader
        title={headerTitle}
        boldTitle={headerBoldTitle}
        headerBoldTitleImage={headerBoldTitleImage}
        headerTextBlack={headerTextBlack}
        rightIcon={rightIcon}
        rightIconPress={rightIconClick}
        rightIconStyle={rightIconStyle}
        onBackClick={onBackClick}
        hideHome={hideHome}
        showMenuIcon={showMenuIcon}
        transparentHeader={transparentHeader}
        router={router}
        hideBackArrow={hideBackArrow}
      />
      <View style={[styles.main_wrapper_content, style]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_wrapper: {
    height: dimensions.vh * 100,
    backgroundColor: '#fff',
    // paddingTop: 40
  },
  main_wrapper_content: {
    flex: 1,
    height: dimensions.vh * 100 - 50,
  },
  kupos_toast: {
    height: 44,
    marginHorizontal: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    bottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flash_message_container: {
    background: '#fff',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    zIndex: 1,
    paddingTop: 20,
  },
  newPushIndicator: {
    position: 'absolute',
    top: 0,
    right: 15,
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: colors.secondaryBG,
  },
  topColorView: {
    height: dimensions.vh * 30,
    width: dimensions.vw * 100,
    position: 'absolute',
    left: 0,
    top: 0,
  },
});

export default MainWrapper;
