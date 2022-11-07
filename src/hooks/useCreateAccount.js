import { useState } from "react";
import { post } from '../JS/api';

export default function useCreateAccount() {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const controller = new AbortController();
    const signal = controller.signal;

    async function createAccount(userInput) {
        const {password, username} = userInput;
        if (!password || !username) {
            setIsError(true);
            return;
        }
        
        setIsLoading(true);
        const {status} = await post('/users', signal, userInput);
        setIsLoading(false);

        if (!status) {
            setIsError(true);
        }

        return {status};
    }

    return {createAccount, isError, isLoading}
}