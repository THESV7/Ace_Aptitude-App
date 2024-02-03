import { useState } from 'react';
import { BASE_URL } from '@env';
const useVerifyOtp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const verifyOtp = async (email, otp) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`https://ace-aptitude-v1.onrender.com/api/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(data.message || 'Failed to verify OTP');
      }
    } catch (error) {
      setError('Failed to connect to the server');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, verifyOtp };
};

export default useVerifyOtp;
