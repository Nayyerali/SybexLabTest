import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {H2, H3} from '../../components/texts/Headings';
import {CheckButton} from '../../components/buttons/AppButtons';
import {PrimarDropDown} from '../../components/dropdowns/PrimarDropDown';
import {PrimaryTextField} from '../../components/textfields/AppTextFields';
import {PrimarDatePicker} from '../../components/pickers/PrimaryDatePicker';
import {PhoneNumberPicker} from '../../components/pickers/PhoneNumberPicker';
import {TransparentHeader} from '../../components/headers/MenuHeader';
import {PrimaryLocationPicker} from '../../components/pickers/PrimaryLocationPicker';
import AppColors from '../../helpers/AppColors';
import AppFontSize from '../../helpers/AppFontSize';

export default function PickupDetail({navigation}) {
  // Local States
  const [requestBody, setRequestBody] = useState({
    name: '',
    phone_number: '',
    location: '',
    date: '',
    parcel_type: '',
    instructions: '',
    inside_pickup: false,
  });

  // Constants
  const parcelTypes = [
    {
      key: '1',
      value: 'Box Maximum Weight 20 Pound',
    },
    {
      key: '2',
      value: 'Envelop',
    },
  ];

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TransparentHeader title="Express Delivery" onBackPress={onBackPress} />
      <KeyboardAwareScrollView>
        <H2 title="Pickup Details" addTitleStyles={styles.color} />
        <PrimaryTextField
          title="Name / Company"
          placeholder="Name / Company"
          value={requestBody.name}
          onChangeText={value => {
            setRequestBody({...requestBody, name: value});
          }}
        />
        <PhoneNumberPicker
          title="Mobile Number"
          placeholder="+923222960371"
          value={requestBody.phone_number}
          keyboardType="numeric"
          onChangeText={value => {
            setRequestBody({...requestBody, phone_number: value});
          }}
        />
        <H2 title="Pickup Location" addTitleStyles={styles.color} />
        <PrimaryLocationPicker
          title="Pickup Location"
          placeholder="Pickup Address"
          value={requestBody.location}
          onChangeText={value => {
            setRequestBody({...requestBody, location: value});
          }}
        />
        <View style={styles.row}>
          <CheckButton
            title="Inside Pickup"
            isSelected={requestBody.inside_pickup}
            onPress={() =>
              setRequestBody({
                ...requestBody,
                inside_pickup: !requestBody.inside_pickup,
              })
            }
          />
          <H3 title="$2 Additional Charge" addTitleStyles={styles.addCharges} />
        </View>
        <H2 title="Shipment Details" addTitleStyles={styles.color} />
        <PrimarDatePicker
          title="Date"
          placeholder="Choose Date"
          value={requestBody.date}
          onChange={text => {
            setRequestBody({...requestBody, date: text});
          }}
        />
        <PrimarDropDown
          title="Parcel Type"
          placeholder="Select type of parcel"
          options={parcelTypes}
          setSelected={text => {
            setRequestBody({...requestBody, parcel_type: text});
          }}
        />
        <PrimaryTextField
          multiline={true}
          title="Special instructions"
          placeholder="Write your instructions"
          value={requestBody.instructions}
          onChangeText={value => {
            setRequestBody({...requestBody, instructions: value});
          }}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  color: {
    color: AppColors.primaryBlue,
  },
  addCharges: {
    color: AppColors.red,
    fontSize: AppFontSize.size14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
