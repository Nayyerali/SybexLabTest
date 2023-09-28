import Home from '../../screens/home/Home';
import PickupDetail from '../../screens/pickup/PickupDetail';

const headerOptions = {
  headerShown: false,
};

const NavigationScreens = {
  Home: {
    screen: Home,
    options: headerOptions,
  },
  PickupDetail: {
    screen: PickupDetail,
    options: headerOptions,
  },
};

export default NavigationScreens;
