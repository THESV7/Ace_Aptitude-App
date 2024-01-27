// useInternetConnection.js
import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

const useInternetConnection = () => {
  const [isConnected, setIsConnected] = useState(null);
  const [isConnectionLoading,setIsConnectionLoading]=useState(false)
  useEffect(() => {
    const checkInternetConnection = async () => {
      setIsConnectionLoading(true)
      const state = await NetInfo.fetch();
      setIsConnected(state.isConnected);
      setIsConnectionLoading(false)
    };

    // Check initial internet connection status
    checkInternetConnection();

    // Subscribe to changes in network connection status
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    // Cleanup function to unsubscribe when the component is unmounted
    return () => {
      unsubscribe();
    };
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

  return {isConnected,isConnectionLoading};
};

export default useInternetConnection;
