import React from 'react';

import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    VStack
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function LoginInputField(props) {
    const {
        handleOnchange,
        isLoading,
        handleLogIn,
        isError,
        loginInfo,
        overrideID,
    } = props;

    return (
        <VStack placeContent='center' gap={5}>
            <FormControl isInvalid={isError}>
                <FormLabel htmlFor='username'>User name</FormLabel>
                <Input
                    maxW='100%'
                    id={overrideID ? 'username2' : 'username'}
                    type='text'
                    placeholder='Enter username'
                    value={loginInfo.username}
                    variant='filled'
                    onChange={handleOnchange}
                />
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input
                    maxW='100%'
                    id={overrideID ? 'password2' : 'password'}
                    type='password'
                    variant='filled'
                    placeholder='Enter password'
                    value={loginInfo.password}
                    onChange={handleOnchange}
                />
                {isError && <FormErrorMessage>Username or Password is incorrect.</FormErrorMessage>}
            </FormControl>
            <Button
                isLoading={isLoading}
                colorScheme='green'
                onClick={handleLogIn}
            >
                Log in
            </Button>
            <Link to='/register'>Register</Link>
        </VStack>
    )
}
