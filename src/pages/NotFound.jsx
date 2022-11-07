import { Container, Image, Text } from '@chakra-ui/react';
import React from 'react';

import image from '../assets/404-img.svg'

export default function NotFound() {
    return (
        <main>
            <Container>
                <Text>Page Not Found</Text>
                <Image src={image} />
            </Container>
        </main>
    )
}
