import React from 'react';

/* components */
import {
    Box,
    Container,
    Heading,
    List,
    ListItem,
    Stack,
} from '@chakra-ui/react';

export default function Footer() {

    return (
        <Box as='footer'>
            <Container>
                <Stack
                    py={5}
                    direction={['column', 'row',]}
                    alignItems='center'
                    gap={5}
                    textAlign='center'
                    justify='space-around'
                >
                    <List>
                        <ListItem><Heading>Shipment</Heading></ListItem>
                        <ListItem>Shipping Fee</ListItem>
                        <ListItem>Delivery Times</ListItem>
                        <ListItem>International Shipping</ListItem>
                    </List>
                    <List>
                        <ListItem><Heading>About us</Heading></ListItem>
                        <ListItem>About The Omise</ListItem>
                        <ListItem>Our Brand</ListItem>
                        <ListItem>Our Beliefs</ListItem>
                    </List>
                    <List>
                        <ListItem><Heading>Follow us</Heading></ListItem>
                        <ListItem>Instagram</ListItem>
                        <ListItem>Facebook</ListItem>
                        <ListItem>Twitter</ListItem>
                    </List>

                </Stack>
                <Box
                    color='white'
                    textAlign='center'
                    p={5}
                >
                    &copy; The Omiseya
                </Box>
            </Container>
        </Box >
    )
}
