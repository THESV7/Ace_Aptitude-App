import { useState } from 'react';

const useResendOTP = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const resendOTP = async (email) => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await fetch('https://ace-aptitude-new.onrender.com/api/resend-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to resend OTP');
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, message, resendOTP };
};

export default useResendOTP;
