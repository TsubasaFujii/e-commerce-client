import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { userLoginStatusSelector } from '../../../recoil/auth/selectors';
import useUserLogin from '../../../hooks/useUserLogin';

import {
    Heading,
    IconButton,
    Popover, PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger
} from '@chakra-ui/react';
import Icon from '../../../components/Icon';
import LoginInputField from './LoginInputField';
import UserMenu from './UserMenu';

export default function UserMenuPopover() {
    const [userInput, setUserInput] = useState({
        username: 'mor_2314',
        password: '83r5^_',
    });
    const isLoggedIn = useRecoilValue(userLoginStatusSelector);
    const { login, isError, isLoading } = useUserLogin();

    function handleOnchange(event) {
        setUserInput(prev => ({
            ...prev,
            [event.target.id]: event.target.value,
        }));
    }

    async function handleLogIn() {
        if (userInput.username === '' || userInput.password === '') return;
        await login(userInput);
    }

    return (
        <Popover
            eventListeners={{ scroll: true }}
            closeOnBlur={true}
            closeOnEsc={true}
            flip
        >
            {({ onClose }) => (
                <>
                    <PopoverTrigger>
                        <IconButton
                            aria-label='Search'
                            isRound
                            icon={<Icon name='user' />}
                            size='sm'
                            variant='unstyled'
                        />
                    </PopoverTrigger>
                    <PopoverContent p={5}>
                        <PopoverCloseButton colorScheme='green' onClick={onClose} />

                        <PopoverHeader as='div'>
                            <Heading as='h5'>
                                {
                                    isLoggedIn ? 'Hello there,' : 'Login'
                                }
                            </Heading>
                        </PopoverHeader>
                        <PopoverBody maxW='100%'>
                            {
                                isLoggedIn ?
                                    <UserMenu onClose={onClose} /> :
                                    <LoginInputField
                                        handleOnchange={handleOnchange}
                                        handleLogIn={handleLogIn}
                                        isLoading={isLoading}
                                        isError={isError}
                                        loginInfo={userInput}
                                    />
                            }
                        </PopoverBody>
                    </PopoverContent>
                </>
            )}
        </Popover>
    )
}

