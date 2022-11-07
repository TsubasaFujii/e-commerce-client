import React from 'react';
import {
    Button,
    VStack
} from '@chakra-ui/react';
import { useRecoilState, } from 'recoil';
import { authState } from '../../../recoil/auth/atom';
import { useNavigate } from 'react-router';

export default function UserMenu(props) {
    const { onClose } = props;
    const navigate = useNavigate();
    const [auth, setAuth] = useRecoilState(authState);

    function handleLogOut() {
        setAuth({
            ...auth,
            user: {
                token: null,
                userId: null,
            }
        });
        navigate('/');
    }

    return (
        <VStack placeContent='center' gap={5}>
            <Button
                colorScheme='green'
                onClick={() => {
                    navigate('/mypage');
                    onClose();
                }}
            >
                My page
            </Button>
            <Button
                colorScheme='green'
                onClick={handleLogOut}
                variant='outline'
            >
                Log out
            </Button>
        </VStack>
    )
}
