import { selector } from 'recoil';
import { authState } from './atom';

export const userLoginStatusSelector = selector({
    key: 'userLoginStatusSelector',
    get: ({get}) => {
        const auth = get(authState);
        return typeof auth.user.token !== 'undefined' && auth.user.token !== null;
    }
});