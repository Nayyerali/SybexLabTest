import React, {useState} from 'react';
import {StyleSheet, View, Keyboard} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {H1, H2} from '../../components/texts/Headings';
import {MenuHeader} from '../../components/headers/MenuHeader';
import {PrimaryButton} from '../../components/buttons/AppButtons';
import {DeliveryTypeCell} from '../../components/cells/DeliveryTypeCell';
import {PrimarySearchBar} from '../../components/textfields/AppTextFields';
import {PrimaryDescription} from '../../components/texts/Descriptions';
import AppColors from '../../helpers/AppColors';
import AppImages from '../../helpers/AppImages';
import AppToasts from '../../helpers/AppToasts';
import AppRoutes from '../../helpers/AppRoutes';
import AppConstants from '../../helpers/AppConstants';

export default function Home({navigation}) {
  // Local States
  const [deliveryType, setDeliveryType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Constants
  const itemsPerRow = 2;
  const {deliveryTypes} = AppConstants;
  const deliveryTypeData = [
    {
      title: deliveryTypes.expressShipping,
      image: AppImages.expressShipping,
    },
    {
      title: deliveryTypes.miscellaneousShipping,
      image: AppImages.miscellaneousShipping,
    },
    {
      title: deliveryTypes.multipleShipping,
      image: AppImages.multipleShipping,
    },
    {
      title: deliveryTypes.singleShipping,
      image: AppImages.singleShipping,
    },
    {
      title: deliveryTypes.expressMultiple,
      image: AppImages.expressMultiple,
    },
  ];

  const handleNextPress = () => {
    if (!deliveryType) {
      AppToasts.showInfo('Warning', 'Please select delivery type to continue');
    } else {
      // AppToasts.showInfo('Confirmation', `${deliveryType} Selected`);
      navigation.navigate(AppRoutes.PickupDetail);
    }
  };

  const handleSearchPress = () => {
    if (!searchQuery) {
      return;
    }
    Keyboard.dismiss;
    AppToasts.showInfo('Pressed Search', 'You searched for ' + searchQuery);
  };

  const onMenuPress = () => {};

  const onNotificationPress = () => {};

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <MenuHeader
          onMenuPress={onMenuPress}
          onNotificationPress={onNotificationPress}
        />
        <H1 title="Welcome" />
        <PrimaryDescription title="Let’s Find Our Services!" />
        <PrimarySearchBar
          onChangeText={text => setSearchQuery(text)}
          value={searchQuery}
          placeholder="Search Our Services"
          onSearch={handleSearchPress}
        />
        <H2 title="What type of delivery you are booking?" />
        <View>
          {deliveryTypeData
            .reduce((rows, item, index) => {
              if (index % itemsPerRow === 0) {
                rows.push([]);
              }
              rows[rows.length - 1].push(item);
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                {row.map((item, colIndex) => {
                  const {title, image} = item;
                  return (
                    <DeliveryTypeCell
                      key={colIndex}
                      title={title}
                      image={image}
                      isSelected={deliveryType === title}
                      onPress={() => setDeliveryType(title)}
                    />
                  );
                })}
              </View>
            ))}
        </View>
        <PrimaryButton title="Press" onPress={handleNextPress} />
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primaryBlue,
  },
  row: {
    flexDirection: 'row',
  },
});
