import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo(props) {
    return (
        <Box px='4' py='2' {...props}>
            <Link to='/'>
                <Heading
                    size='xl'
                    fontFamily='Fredericka the Great, cursive'
                >
                    The Omiseya
                </Heading>
            </Link>
        </Box>
    )
}
