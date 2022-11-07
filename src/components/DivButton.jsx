import { Box } from '@chakra-ui/react';
import React from 'react';

export default function DivButton(props) {
    const { onClick, label, p, bg, w, color, display } = props;

    return (
        <Box
            onClick={onClick}
            p={p ? p : 4}
            bg={bg ? bg : 'green.100'}
            w={w ? w : '100%'}
            color={color ? color : 'black'}
            textAlign='center'
            borderRadius='md'
            _hover={{ cursor: 'pointer' }}
            display={display ? display : 'block'}
            fontWeight='semibold'
        >
            {label}
        </Box>
    )
}
