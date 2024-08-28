import {Image, StyleSheet, Text, View} from 'react-native';
import {dimensions} from '../../theme';

const RootComponent = ({children, style}) => {
  return (
    <View style={styles.main_wrapper}>
      <View style={[styles.main_wrapper_content, style]}>{children}</View>

      {/* {toast?.show && (
        <View
          style={[
            styles.kupos_toast,
            toast.placement == 'top' ? {top: 30, bottom: null} : {},
          ]}>
          {toast?.icon && (
            <View className="img">
              <Image source={toast?.icon} />
            </View>
          )}
          <Text style={{fontSize: 14, color: '#fff'}}>{toast.message}</Text>
        </View>
      )} */}

      {/* <KuposFooter t={t} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  main_wrapper: {
    height: dimensions.vh * 100,
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
});

export default RootComponent;
