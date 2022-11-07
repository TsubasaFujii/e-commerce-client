import { Center, Container, Spinner } from '@chakra-ui/react'
import React from 'react'

export default function Loading() {
    return (
        <Container as='main'>
            <Center flexDirection={'column'}>
                <div>Loading</div>
                <Spinner size='xl' />
            </Center>
        </Container>
    )
}
