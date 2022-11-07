import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { cartStatus } from '../../../recoil/cart/selectors';

import { Badge, Box, Flex, Show, } from '@chakra-ui/react';
import UserMenuPopover from './UserMenuPopover';
import Icon from '../../../components/Icon';

export default function Nav(props) {
    const { itemCount } = useRecoilValue(cartStatus);
    return (
        <Flex
            as='nav'
            direction='row'
            alignItems='center'
            px={4}
            {...props}
        >
            <Show above='sm'>
                <Box p='2'>
                    <UserMenuPopover />
                </Box>
                {/* paddingRight={2} is for budge component */}
                <Box p='2' paddingRight={2} position='relative'>
                    <Link to='/cart'>
                        <Icon name='cart' />
                    </Link>
                    <Badge
                        position='absolute'
                        top='-0.2rem'
                        right={0}
                        textAlign='center'
                        w={itemCount === 1 ? '0.9rem' : 'auto'}
                        variant={itemCount === 0 ? 'outline' : 'solid'}
                    >
                        {itemCount}
                    </Badge>
                </Box>
            </Show>
        </Flex>
    )
}





