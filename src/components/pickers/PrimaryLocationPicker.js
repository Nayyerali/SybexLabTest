import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIcons from '../../helpers/AppIcons';
import AppColors from '../../helpers/AppColors';
import AppFontSize from '../../helpers/AppFontSize';
import AppFontFamily from '../../helpers/AppFontFamily';

export const PrimaryLocationPicker = ({
  title = '',
  onChangeText = () => {},
  value = '',
  addConStyles = {},
  addTitleStyles = {},
  addFieldStyles = {},
  placeholder = '',
}) => {
  return (
    <View style={[styles.container, addConStyles]}>
      <Text style={[styles.title, addTitleStyles]}>{title}</Text>
      <View
        onPress={() => setOpenDatePicker(true)}
        style={[styles.fieldContainer]}>
        <TextInput
          style={[styles.textField, addFieldStyles]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={AppColors.gray}
        />
        <Icon
          name={AppIcons.location}
          size={15}
          color={AppColors.white}
          style={styles.locationIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: AppColors.white,
  },

  title: {
    marginVertical: 5,
    color: AppColors.primaryBlue,
    fontSize: AppFontSize.size14,
    fontFamily: AppFontFamily.semiBold,
  },
  fieldContainer: {
    flex: 1,
    borderColor: AppColors.gray,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textField: {
    flex: 1,
    paddingHorizontal: 10,
    borderColor: AppColors.gray,
    color: AppColors.gray,
    fontSize: AppFontSize.size14,
    fontFamily: AppFontFamily.regular,
  },
  locationIcon: {
    backgroundColor: AppColors.primaryBlue,
    borderRadius: 50,
    padding: 4,
    marginRight: 10,
  },
});
