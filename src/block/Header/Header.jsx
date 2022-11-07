import React, { useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';

import { authState } from '../../recoil/auth/atom';

/* components */
import {
    Flex,
    Hide,
    IconButton,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Show,
    useDisclosure,
} from '@chakra-ui/react';
import Nav from './Nav';
import Logo from './Logo';
import SearchBar from './SearchBar';
import ResponsiveMenu from './ResponsiveMenu';
import Icon from '../../components/Icon';

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const [auth, setAuth] = useRecoilState(authState);

    const location = useLocation();
    useLayoutEffect(() => onClose(), [location.pathname, onClose]);

    const MENUCONTENTS = [{
        label: 'My Page',
        onClick: () => {
            navigate('/mypage');
        },
        show: true,
    }, {
        label: 'Cart',
        onClick: () => {
            navigate('/cart');
        },
        show: true,
    }, {
        label: 'Login',
        onClick: () => {
            navigate('/login');
        },
        show: !auth.user.token,
    }, {
        label: 'Create Account',
        onClick: () => {
            navigate('/register');
        },
        show: !auth.user.token,
    }, {
        label: 'Logout',
        onClick: () => {
            if (auth.user.token) {
                setAuth({
                    ...auth,
                    user: {
                        token: null,
                        userId: null,
                    }
                })
            }
        },
        show: auth.user.token ? true : false,
    }];

    return (
        <>
            <Show below='sm'>
                <Flex
                    as='header'
                    alignItems='center'
                    justifyContent='space-between'
                    direction='row'
                    zIndex={10}
                    flexWrap='wrap'
                >

                    <ResponsiveMenu
                        contents={MENUCONTENTS}
                        gap={2}
                        bg='white'
                        breakpoint='sm'
                        toggleIcon='hamburger'
                        position='left'
                    />
                    <Logo flexShrink='1' m='0 auto' justifySelf={['center', 'start']} />
                    <IconButton
                        aria-label='Search'
                        isRound
                        icon={<Icon name='search' />}
                        size='sm'
                        variant='unstyled'
                        onClick={onOpen}
                    />
                </Flex>

                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent mx='0.5rem'>
                        <ModalBody>
                            <SearchBar />
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Show>

            <Hide below='sm'>
                <Flex
                    as='header'
                    alignItems='center'
                    justifyContent='space-between'
                    direction='row'
                    zIndex={10}
                    flexWrap='wrap'
                >
                    <Logo flexShrink='1' m='0 auto' justifySelf={['center', 'start']} />
                    <SearchBar
                        flex={['0 0 70%', '0 0 70%', '0 0 70%', '1', '1']}
                        order={['2', '2', '2', '0', '0']}
                        m={['0', '0 auto']}
                    />
                    <Nav flexShrink='1' m='0 auto' />
                </Flex>
            </Hide>
        </>
    )
}