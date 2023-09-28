import AxiosEvent from '../../api/AxiosEvent';
import APIConstants from '../../helpers/APIConstants';
import Applogger from '../../helpers/AppLogger';

async function apiDemoRequest(payload) {
  Applogger('Payload at apiDemoRequest', payload);
  const {} = payload;
  var path = APIConstants.demoPlaces;
  return AxiosEvent.get(path);
}

export const DemoApiServices = {
  apiDemoRequest,
};
