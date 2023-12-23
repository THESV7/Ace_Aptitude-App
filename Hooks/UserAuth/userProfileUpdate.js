import { useState } from "react";
import usegetAsyncStorage from "./getAsyncStorageDetails";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useDeleteProfile from "./deleteProfile";


const useUserProfileUpdate = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    const { handleUserAuthinticate } = usegetAsyncStorage();
    const {deleteProfile}=useDeleteProfile()
    const uploadImage = async (fileUrl) => {
        try {
            setIsLoading(true);
            const userDetails = await handleUserAuthinticate();
            const userId = userDetails._id;
            const response = await fetch(`http://192.168.0.103:5000/api/upload-profile-image/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: fileUrl }),
            });

            if (!response.ok) {
                throw new Error('User Profile not updated');
            } else {
                const data = await response.json();
                setResponseData(data);
                const userDetails = await handleUserAuthinticate()
                const perviousProfileImage = userDetails.profileImage
                userDetails.profileImage = data.data;
                await AsyncStorage.setItem('user', JSON.stringify(userDetails));
                const parts = perviousProfileImage.split('/');
                const publicIdWithExtension = parts[parts.length - 1]; 
                const publicId = publicIdWithExtension.split('.')[0];
                await deleteProfile(publicId)
                setIsLoading(false)
            }
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const clearData = () => {
        setResponseData(null);
        setError(null);
        setIsLoading(false);
    };

    return { responseData, error, isLoading, uploadImage, clearData };
};

export default useUserProfileUpdate;
