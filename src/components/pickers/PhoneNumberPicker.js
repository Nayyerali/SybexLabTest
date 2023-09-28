import React, {useRef} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import AppColors from '../../helpers/AppColors';
import AppFontSize from '../../helpers/AppFontSize';
import AppFontFamily from './../../helpers/AppFontFamily';

export const PhoneNumberPicker = ({
  title = '',
  placeholder = '',
  onChangeText = () => {},
  addConStyles = {},
  addTitleStyles = {},
  addFieldStyles = {},
}) => {
  const phoneRef = useRef(null);

  return (
    <View style={[styles.container, addConStyles]}>
      <Text style={[styles.title, addTitleStyles]}>{title}</Text>
      <PhoneInput
        ref={phoneRef}
        initialCountry={'pk'}
        initialValue=""
        onChangePhoneNumber={onChangeText}
        textProps={{
          placeholder: placeholder,
        }}
        textStyle={styles.textStyle}
        style={[styles.textField, addFieldStyles]}
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
  title: {
    marginVertical: 5,
    color: AppColors.primaryBlue,
    fontSize: AppFontSize.size14,
    fontFamily: AppFontFamily.semiBold,
  },
  textField: {
    flex: 1,
    padding: 12,
    borderColor: AppColors.gray,
    borderWidth: 1,
    borderRadius: 6,
  },
  textStyle: {
    color: AppColors.gray,
    fontSize: AppFontSize.size14,
    fontFamily: AppFontFamily.regular,
  },
});
