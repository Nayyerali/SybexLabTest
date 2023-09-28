import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import AppColors from '../../helpers/AppColors';
import AppImages from '../../helpers/AppImages';

export default function SplashLoader() {
  return (
    <View style={styles.container}>
      {/*  Option 2 for splash */}
      {/* <Image source={AppImages.logo} style={styles.logo} resizeMode="contain" />  */}
      <Image
        source={AppImages.splash}
        style={styles.splash}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primaryBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    // width: 200,
    // height: 150,
  },
  splash: {
    width: '100%',
    height: '100%',
  },
});
