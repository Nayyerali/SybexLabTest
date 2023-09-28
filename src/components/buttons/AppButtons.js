import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIcons from '../../helpers/AppIcons';
import AppColors from '../../helpers/AppColors';
import AppFontSize from '../../helpers/AppFontSize';
import AppFontFamily from './../../helpers/AppFontFamily';

export const PrimaryButton = ({
  title = '',
  onPress = () => {},
  addConStyles = {},
  addTitleStyles = {},
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, addConStyles]}
      onPress={onPress}>
      <Text style={[styles.title, addTitleStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

export const CheckButton = ({
  title = '',
  onPress = () => {},
  addConStyles = {},
  addTitleStyles = {},
  isSelected = false,
}) => {
  return (
    <View style={[styles.checkContainer, addConStyles]}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          name={isSelected ? AppIcons.checkbox : AppIcons.squareBox}
          color={AppColors.primaryBlue}
          size={20}
          style={styles.checkbox}
        />
      </TouchableOpacity>
      <Text style={[styles.checkTitle, addTitleStyles]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.white,
  },
  checkContainer: {
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: AppColors.white,
    flexDirection: 'row',
  },
  checkbox: {
    marginRight: 10,
  },
  title: {
    color: AppColors.primaryBlue,
    fontSize: AppFontSize.size16,
    fontFamily: AppFontFamily.semiBold,
  },
  checkTitle: {
    color: AppColors.black,
    fontFamily: AppFontFamily.regular,
  },
});
