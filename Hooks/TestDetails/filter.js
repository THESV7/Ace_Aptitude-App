import { useState } from "react";

const useFilter = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [responseData, setResponseData] = useState([]);

    const getFilterData = async (difficulty, sortby, subtopic ) => {
        setIsLoading(true);

        // Build the query string with non-empty parameters
        const queryParams = [];
        if (difficulty && difficulty.trim() !== "") {
            queryParams.push(`difficulty=${encodeURIComponent(difficulty)}`);
        }
        if (sortby && sortby.trim() !== "") {
            queryParams.push(`sortby=${encodeURIComponent(sortby)}`);
        }
        if (subtopic && subtopic.trim() !== "") {
            queryParams.push(`subtopic=${encodeURIComponent(subtopic)}`);
        }

        const apiUrl = `https://ace-aptitude-new.onrender.com/api/filter?${queryParams.join("&")}`;

        try {
            const response = await fetch(apiUrl);

            if (response.ok) {
                const data = await response.json();
                setResponseData(data.data);
            } else {
                throw new Error("Failed to fetch data");
            }
        } catch (err) {
            setError(err);
            console.error("Error fetching filter data:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        getFilterData,
        isLoading,
        error,
        responseData,
    };
};

export default useFilter;
