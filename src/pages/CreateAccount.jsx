import {
    Container,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    Center,
    useDisclosure,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Modal,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import useCreateAccount from '../hooks/useCreateAccount';

export default function CreateAccount() {
    const [show, setShow] = useState(false);
    const { createAccount, isError: isServerError, isLoading } = useCreateAccount();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const [isError, setIsError] = useState({
        password: false,
        zipcode: false,
        phone: false,
    });
    const [userInput, setUserInput] = useState({
        email: '',
        username: '',
        password: '',
        name: {
            firstname: '',
            lastname: ''
        },
        address: {
            city: '',
            street: '',
            number: '',
            zipcode: ''
        },
        phone: '',
    });

    async function handleSubmit() {
        createAccount(userInput);
        setUserInput({
            email: '',
            username: '',
            password: '',
            name: {
                firstname: '',
                lastname: ''
            },
            address: {
                city: '',
                street: '',
                number: '',
                zipcode: ''
            },
            phone: '',
        });
        onOpen();
    }

    function handleClick() {
        setShow(!show)
    };

    function handleOnChange({ target }) {
        const address = ['city', 'street', 'number', 'zipcode'];
        const name = ['lastname', 'firstname'];
        if (address.includes(target.id)) {
            setUserInput({
                ...userInput,
                address: {
                    ...userInput.address,
                    [target.id]: target.value,
                }
            });
        } else if (name.includes(target.id)) {
            setUserInput({
                ...userInput,
                name: {
                    ...userInput.name,
                    [target.id]: target.value,
                }
            });
        } else {
            setUserInput({
                ...userInput,
                [target.id]: target.value,

            });
        }
    }

    return (
        <Container maxW={['80vw', '25rem']} py={5}>
            <FormLabel htmlFor='username'>Username</FormLabel>
            <Input
                id='username'
                type='text'
                placeholder='Username'
                mb={5}
                variant='flushed'
                value={userInput.username}
                onChange={handleOnChange}
            />

            <FormLabel htmlFor='name'>Name</FormLabel>
            <Input
                id='firstname'
                type='text'
                placeholder='Name'
                mb={5}
                variant='flushed'
                value={userInput.name.firstname}
                onChange={handleOnChange}
            />

            <FormLabel htmlFor='lastname'>Last Name</FormLabel>
            <Input
                id='lastname'
                type='text'
                placeholder='Last Name'
                mb={5}
                variant='flushed'
                value={userInput.name.lastname}
                onChange={handleOnChange}
            />

            <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input
                id='email'
                type='email'
                placeholder='Email'
                mb={5}
                variant='flushed'
                value={userInput.email}
                onChange={handleOnChange}
            />

            <FormControl isInvalid={isError.password}>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <InputGroup size='md'>
                    <Input
                        id='password'
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        variant='flushed'
                        value={userInput.password}
                        onChange={(event) => {
                            if (event.target.value.length <= 8) {
                                setIsError({
                                    ...isError,
                                    password: true,
                                })
                            } else {
                                setIsError({
                                    ...isError,
                                    password: false,
                                })
                            }
                            handleOnChange(event);
                        }}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <FormHelperText mb={isError.password ? 0 : 5}>Use at least 8 characters</FormHelperText>
                <FormErrorMessage mb={5} mt={0}>Password is too short</FormErrorMessage>
            </FormControl>

            <FormLabel htmlFor='city'>Address: City</FormLabel>
            <Input
                id='city'
                type='text'
                placeholder='City'
                mb={5}
                variant='flushed'
                value={userInput.address.city}
                onChange={handleOnChange}
            />

            <FormLabel htmlFor='street'>Address: street</FormLabel>
            <Input
                id='street'
                type='text'
                placeholder='Street'
                mb={5}
                variant='flushed'
                value={userInput.address.street}
                onChange={handleOnChange}
            />

            <FormLabel htmlFor='number'>Address: House Number</FormLabel>
            <Input
                id='number'
                type='text'
                placeholder='House Number'
                mb={5}
                variant='flushed'
                value={userInput.address.number}
                onChange={handleOnChange}
            />

            <FormControl isInvalid={isError.zipcode}>
                <FormLabel htmlFor='zipcode'>ZipCode</FormLabel>
                <Input
                    id='zipcode'
                    type='text'
                    placeholder='Zip Code'
                    variant='flushed'
                    value={userInput.address.zipcode}
                    onChange={(event) => {
                        if (!/^\d+$/.test(event.target.value) && event.target.value !== '') {
                            setIsError({
                                ...isError,
                                zipcode: true,
                            })
                        } else {
                            setIsError({
                                ...isError,
                                zipcode: false,
                            })
                        }
                        handleOnChange(event);
                    }}
                />
                <FormHelperText mb={isError.zipcode ? 0 : 5}>Enter only numbers</FormHelperText>
                <FormErrorMessage mb={5} mt={0}>Invalid Input</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={isError.phone}>
                <FormLabel htmlFor='phone'>Phone</FormLabel>
                <Input
                    id='phone'
                    type='tel'
                    placeholder='Phone'
                    variant='flushed'
                    value={userInput.phone}
                    onChange={(event) => {
                        if (!/^\d+$/.test(event.target.value) && event.target.value !== '') {
                            setIsError({
                                ...isError,
                                phone: true,
                            })
                        } else {
                            setIsError({
                                ...isError,
                                phone: false,
                            })
                        }
                        handleOnChange(event);
                    }}
                />
                <FormHelperText mb={isError.phone ? 0 : 5}>Enter without hyphen</FormHelperText>
                <FormErrorMessage mb={5} mt={0}>Only numbers</FormErrorMessage>
            </FormControl>

            <Center>
                <Button
                    onClick={handleSubmit}
                    isLoading={isLoading}
                    loadingText='Submitting'
                    variant={isLoading ? 'outline' : 'solid'}
                >Create Account</Button>
            </Center>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    {
                        isServerError !== 'error' ?
                            <>
                                <ModalHeader as='div'>Welcome to The Omiseya</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    Thank you for sign up with our online service.
                                    We're so happy that you're here.
                                </ModalBody>
                                <ModalFooter as='div'>
                                    <Button onClick={() => {
                                        navigate('/login');
                                        onClose();
                                    }}>
                                        Login
                                    </Button>
                                </ModalFooter>
                            </> :
                            <>
                                <ModalHeader as='div'>Oops!</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    Something went wrong.
                                    Please try again.
                                </ModalBody>
                            </>
                    }
                </ModalContent>
            </Modal>
        </Container >
    )
}