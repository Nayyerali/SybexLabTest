import React from 'react';
import {Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import AppColors from '../../helpers/AppColors';
import AppFontSize from '../../helpers/AppFontSize';
import AppFontFamily from './../../helpers/AppFontFamily';

export const DeliveryTypeCell = ({
  title = '',
  image = '',
  onPress = () => {},
  isSelected = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selectedBg]}
      onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    height: 125,
    width: 125,
    justifyContent: 'center',
  },
  selectedBg: {
    backgroundColor: AppColors.secondaryBlue,
  },

  image: {
    height: 25,
    width: 25,
    marginBottom: 10,
  },
  title: {
    color: AppColors.primaryBlue,
    fontSize: AppFontSize.size14,
    fontFamily: AppFontFamily.semiBold,
  },
});
