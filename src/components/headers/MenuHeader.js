import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIcons from '../../helpers/AppIcons';
import AppColors from '../../helpers/AppColors';
import AppImages from '../../helpers/AppImages';
import AppFontSize from '../../helpers/AppFontSize';
import AppFontFamily from '../../helpers/AppFontFamily';
export const MenuHeader = ({
  onMenuPress = () => {},
  onNotificationPress = () => {},
  title = '',
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onMenuPress} style={styles.burgerIcon}>
        <Image source={AppImages.burger} style={styles.burgerImage} />
      </TouchableOpacity>
      <Text>{title}</Text>
      <TouchableOpacity
        onPress={onNotificationPress}
        style={styles.notifContainer}>
        <Icon
          name={AppIcons.notification}
          color={AppColors.primaryBlue}
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
};

export const TransparentHeader = ({onBackPress = () => {}, title = ''}) => {
  return (
    <View style={styles.thContainer}>
      <TouchableOpacity onPress={onBackPress} style={styles.backContainer}>
        <Icon name={AppIcons.back} color={AppColors.primaryBlue} size={25} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  thContainer: {
    padding: 10,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  backContainer: {
    position: 'absolute',
    left: 10,
  },
  title: {
    width: '75%',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: AppFontFamily.semiBold,
    fontSize: AppFontSize.size16,
    color: AppColors.primaryBlue,
  },
  notifContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: AppColors.white,
    borderRadius: 50,
  },
  burgerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  burgerImage: {
    height: 20,
    width: 20,
  },
});
