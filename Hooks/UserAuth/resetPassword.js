import { useState } from 'react';


const useResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const resetPassword = async (email, newPassword) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://ace-aptitude-new.onrender.com/api/reset-password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPassword }),
      });
      if (response.ok) {
        const data = await response.json();
        setResponseData(data);
        setLoading(false)
      } else {
        setError(data.message || 'Failed to reset password');
      }
    } catch (error) {
      setError('Failed to connect to the server');
    } finally {
      setLoading(false);
    }
  };

  const clear = () => {
    setLoading(false);
    setError(null);
    setResponseData(null);
  };

  return { loading, error, responseData, resetPassword, clear };
};

export default useResetPassword;
