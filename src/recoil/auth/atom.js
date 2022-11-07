import { atom } from 'recoil';

export const authState = atom({
    key: 'authState',
    default: {
        user : {
            token: null,
            userId: null,
        },
        admin: {
            token: null,
            userId: null,
        }
    }
});