import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppIcons from '../../helpers/AppIcons';
import AppColors from '../../helpers/AppColors';
import AppFontSize from '../../helpers/AppFontSize';
import AppConstants from '../../helpers/AppConstants';
import AppFontFamily from './../../helpers/AppFontFamily';

export const PrimarDatePicker = ({
  title = '',
  onChange = () => {},
  value = '',
  addConStyles = {},
  addTitleStyles = {},
  addFieldStyles = {},
  placeholder = '',
  dateMode = AppConstants.datePicker.date,
}) => {
  const [date, setDate] = useState(new Date());
  const [openDatePicker, setOpenDatePicker] = useState(false);

  return (
    <View style={[styles.container, addConStyles]}>
      <Text style={[styles.title, addTitleStyles]}>{title}</Text>
      <Pressable
        onPress={() => setOpenDatePicker(true)}
        style={[styles.fieldContainer, addFieldStyles]}>
        <Text style={styles.dateText} numberOfLines={1}>
          {value
            ? moment(value).format(AppConstants.dateFormats.date)
            : placeholder}
        </Text>
        <DatePicker
          modal={true}
          open={openDatePicker}
          date={date}
          theme="light"
          onConfirm={date => {
            onChange(date);
            setDate(date);
            setOpenDatePicker(false);
          }}
          onCancel={() => {
            setOpenDatePicker(false);
          }}
          mode={dateMode}
        />
        <Icon
          name={AppIcons.calendar}
          size={25}
          color={AppColors.primaryBlue}
        />
      </Pressable>
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
    padding: 10,
    borderColor: AppColors.gray,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateText: {
    color: AppColors.gray,
    fontSize: AppFontSize.size14,
    fontFamily: AppFontFamily.semiBold,
    flex: 1,
    marginRight: 10,
  },
});
