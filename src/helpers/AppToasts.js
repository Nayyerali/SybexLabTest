import SFToast from '../components/toasts/SFToast';

const AppToasts = {
  showInfo: (title = '', desc = '') => {
    SFToast({type: 'info', title: title, description: desc});
  },
  showError: (title = '', desc = '') => {
    SFToast({type: 'error', title: title, description: desc});
  },
  showSuccess: (title = '', desc = '') => {
    SFToast({type: 'success', title: title, description: desc});
  },
};

export default AppToasts;
