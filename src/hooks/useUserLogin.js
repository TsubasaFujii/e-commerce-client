import { useState } from "react";
import { useRecoilState } from 'recoil';
import { get, post } from '../JS/api';
import { authState } from '../recoil/auth/atom';

export default function useUserLogin() {
    const [isLoading, setIsLoading] = useState(false);
    const [auth, setAuth] = useRecoilState(authState);
    const [isError, setIsError] = useState(false);

    const controller = new AbortController();
    const signal = controller.signal;

    async function login(userInput) {
        const {password, username} = userInput;
        if (!password || !username) {
            setIsError(true);
            return;
        }
        
        setIsLoading(true);
        const response = await post('/auth/login', signal, userInput);
        const {token} = response.data;
    
        ////// The fake store server only returns token.
        ////// Manually getting the userID
        const {data: userList, status} = await get('/users', signal);
        if (!status)  return setIsError(true);
        const {id: userId} = userList.find(user => user.username === username);
        //////
        setIsLoading(false);

        if (!status) {
            setIsError(true);
        } else {
            setAuth({
                ...auth,
                user: {userId, token}
            });
        }
    }

    return {login, isError, isLoading}
}