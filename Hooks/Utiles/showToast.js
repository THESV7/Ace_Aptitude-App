import { Toast } from 'toastify-react-native';

const showToast = (type,message, position = 'top') => {
  const defaultOptions = {
    duration: 3000,
    animationOut: 'slideOutUp',
  };

  switch (type) {
    case 'success':
      Toast.success(message, position, defaultOptions);
      break;
    case 'info':
      Toast.info(message, position, defaultOptions);
      break;
    case 'warning':
      Toast.warning(message, position, defaultOptions);
      break;
    case 'error':
      Toast.error(message, position, defaultOptions);
      break;
    default:
      Toast.success(message, position, defaultOptions);
  }
};

export default showToast;