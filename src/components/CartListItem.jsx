import React from 'react';
import PropTypes from 'prop-types';

/* recoil */
import { useSetRecoilState } from 'recoil';
import { removeItemSelector } from '../recoil/cart/selectors';

/* components */
import { Box, Flex, HStack, IconButton, Image, ListItem, Spacer } from '@chakra-ui/react';
import Icon from './Icon';
import BuyButton from './BuyButton';
import { Link } from 'react-router-dom';

export default function CartListItem(props) {
    const { image, title, count, id } = props;
    const removeItem = useSetRecoilState(removeItemSelector);
    const path = `/product/${id}`;

    return (
        <ListItem>
            <Flex justify='flex-end' align='center'>
                <Image
                    src={image}
                    boxSize='4rem'
                    objectFit='contain'
                    p='2'
                />
                <Box w='40%' p={2}><Link to={path}>{title}</Link></Box>
                <Spacer />
                <HStack spacing={3}>
                    <BuyButton value={count} id={id} />
                    <IconButton
                        bg='green.100'
                        _hover={{
                            bg: 'green.200',
                        }}
                        onClick={() => {
                            removeItem(id);
                        }}
                        size='sm'
                        icon={<Icon name='delete' />}
                    />
                </HStack>
            </Flex>
        </ListItem>
    )
}

CartListItem.propTypes = {
    id: PropTypes.number,
    count: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
}
