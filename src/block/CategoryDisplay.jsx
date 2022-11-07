import React from 'react';

import { Box, Center, Flex, VStack, } from '@chakra-ui/react';

export default function CategoryDisplay(props) {
    const { contents } = props;

    return (
        <Flex
            w='100%'
            flexWrap='wrap'
            justifyContent='space-evenly'
        >
            {
                contents.map(content => (
                    <VStack
                        key={content.category}
                        p='0.5rem'
                        onClick={content.onClick}
                        _hover={{
                            cursor: 'pointer'
                        }}
                    >
                        <Center
                            borderRadius='full'
                            bg='green.400'
                            w='4rem'
                            h='4rem'
                            _hover={{
                                bg: 'green.500'
                            }}
                        >
                            {content.icon}
                        </Center>
                        <Box textTransform='capitalize'>{content.category}</Box>
                    </VStack>
                ))
            }
        </Flex>
    )
}
