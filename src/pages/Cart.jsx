import React from 'react'
import { useRecoilValue } from 'recoil';

/* recoil */
import { cartState } from '../recoil/cart/atom';
import { cartStatus } from '../recoil/cart/selectors';

/* components */
import NavLinkBar from '../components/NavLinkBar';
import { Box, Button, Container, Divider, List, ListItem, Text, VStack } from '@chakra-ui/react';
import CartListItem from '../components/CartListItem';

export default function Cart() {
    const cartItems = useRecoilValue(cartState);
    const { itemCount, totalPrice } = useRecoilValue(cartStatus);

    const itemsInCart = cartItems.length === 0 ? <ListItem>No Items</ListItem> :
        cartItems.map((item, index) => (
            <CartListItem key={index} {...item} />
        ));
    return (
        <main>
            <Container>
                <NavLinkBar path='/products' />
                <VStack spacing={5}>
                    <List spacing={3}>
                        {itemsInCart}
                    </List>
                    <Divider orientation='horizontal' />
                    <Box
                        textAlign='right'
                        w='100%'
                    >
                        <Text as='span' fontSize='xl' fontWeight='semibold'>Total</Text>
                        <Text fontSize='lg'>£{
                            new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2 })
                                .format(totalPrice)
                        }</Text>
                        <Text fontSize='md'>({itemCount} items)</Text>
                    </Box>
                    <Button
                        onClick={() => alert('This is a mock button. Sorry!')}
                        disabled={cartItems.length === 0}
                    >
                        Purchase
                    </Button>
                </VStack>
            </Container>
        </main>
    )
}
