import { selector } from 'recoil';
import { adminState } from './atom';

export const totalUserNumSelector = selector({
    key: 'totalUserNumSelector',
    get: ({ get }) => {
        const adminData = get(adminState);
        if(!adminData.users) return;

        const users = adminData.users;
        return users.length;
    }
});