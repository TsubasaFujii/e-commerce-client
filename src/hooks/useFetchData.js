import { useEffect, useState } from "react";
import { get } from '../JS/api';

export default function useFetchData(endPoint, initValue) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(initValue ? initValue : null);
    const [isError, setIsError] = useState(false);

    const controller = new AbortController();
    const signal = controller.signal;

    useEffect(() => {
        getData();
        return () => controller.abort();
        // eslint-disable-next-line
    }, []);

    async function getData() {
        setIsLoading(true);

        const response = await get(endPoint, signal);
        if (response.status) {
            if (isError) {
                setIsError(false);
            }
            setData(response.data);
        } else {
            setIsError(true);
        }
        
        setIsLoading(false);
    }
    
    return {isError, data, getData, isLoading};
}