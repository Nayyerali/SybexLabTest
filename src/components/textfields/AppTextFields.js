import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIcons from '../../helpers/AppIcons';
import AppColors from '../../helpers/AppColors';
import AppFontSize from '../../helpers/AppFontSize';
import AppFontFamily from './../../helpers/AppFontFamily';

export const PrimaryTextField = ({
  title = '',
  onChangeText = () => {},
  value = '',
  addConStyles = {},
  addTitleStyles = {},
  addFieldStyles = {},
  placeholder = '',
  keyboardType = 'default',
  multiline = false,
}) => {
  return (
    <View style={[styles.container, addConStyles]}>
      <Text style={[styles.title, addTitleStyles]}>{title}</Text>
      <TextInput
        style={[
          styles.textField,
          addFieldStyles,
          multiline && styles.multiline,
        ]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={AppColors.gray}
        keyboardType={keyboardType}
        multiline={multiline}
      />
    </View>
  );
};

export const PrimarySearchBar = ({
  onChangeText = () => {},
  onSearch = () => {},
  value = '',
  addConStyles = {},
  addFieldStyles = {},
  placeholder = '',
  keyboardType = 'search',
}) => {
  return (
    <View style={[styles.searchContainer, addConStyles]}>
      <TouchableOpacity onPress={onSearch}>
        <Icon
          name={AppIcons.search}
          color={AppColors.primaryBlue}
          size={25}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TextInput
        style={[styles.searchField, addFieldStyles]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={AppColors.gray}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: AppColors.white,
  },
  searchContainer: {
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: AppColors.white,
  },
  icon: {
    marginLeft: 10,
  },
  title: {
    marginVertical: 5,
    color: AppColors.primaryBlue,
    fontSize: AppFontSize.size14,
    fontFamily: AppFontFamily.semiBold,
  },
  textField: {
    flex: 1,
    borderColor: AppColors.gray,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    color: AppColors.gray,
    fontSize: AppFontSize.size14,
    fontFamily: AppFontFamily.regular,
  },
  searchField: {
    flex: 1,
    paddingHorizontal: 10,
    color: AppColors.primaryBlue,
    fontSize: AppFontSize.size14,
    fontFamily: AppFontFamily.regular,
  },
  multiline: {
    height: 100,
    textAlignVertical: 'top',
  },
});
