import React, { useEffect, useState } from 'react';
import {
    Box,
    Container,
    Heading,
    StackDivider,
    useToast,
    VStack
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import Loading from '../components/Loading';
import useFetchData from '../hooks/useFetchData';
import { authState } from '../recoil/auth/atom';
import { capitalize } from '../JS/dataParser';

export default function MyPage() {
    const navigate = useNavigate();
    const { user } = useRecoilValue(authState);
    const { isError, data, isLoading } = useFetchData(`/users/${user.userId}`);
    const toast = useToast();

    useEffect(() => {
        if (!isError) return;
        toast({
            title: 'Couldn\'t get the user data',
            status: 'error',
            isClosable: true,
        });
        // eslint-disable-next-line
    }, [isError]);

    useEffect(() => {
        if (!user.token) {
            navigate('/login');
            return;
        }
        // eslint-disable-next-line
    }, [user]);

    if (isLoading || !data) return <Loading />;
    return (
        <Container
            centerContent
            w={['90vw', '3xl']}
        >
            <Heading>Hello {capitalize(data.name.firstname)}</Heading>
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                align='stretch'
                p={5}
            >
                <Box>Name : {capitalize(data.name.firstname)}</Box>
                <Box>Last Name : {capitalize(data.name.lastname)}</Box>
                <Box>
                    e-mail : {data.email}</Box>
                <Box>
                    Phone: {data.phone}</Box>
                <Box>
                    Shipping Address(House Number): {data.address.number}</Box>
                <Box>
                    Shipping Address(Street): {capitalize(data.address.street)}</Box>
                <Box>
                    Shipping Address(City): {data.address.city}</Box>
            </VStack>
        </Container>
    )
}