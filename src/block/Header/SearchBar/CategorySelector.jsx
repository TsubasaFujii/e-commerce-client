import { Box, Select, useToast } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import useFetchData from '../../../hooks/useFetchData';

export default function CategorySelector({ handleChange, value }) {
    const { isError, data: categories, isLoading } = useFetchData('/products/categories', []);
    const toast = useToast();

    useEffect(() => {
        // When fetch didn't go through
        if (!isError) return;
        toast({
            title: 'Couldn\'t get the category list',
            status: 'error',
            isClosable: true,
        });
        // eslint-disable-next-line
    }, [isError]);

    if (isLoading) return null;
    return (
        <Box>
            <Select
                placeholder='Category'
                size='md'
                fontSize='sm'
                id="categories"
                colorScheme='green'
                textTransform='capitalize'
                onChange={(event) => handleChange(event.target.value)}
                value={value}
            >
                {

                    categories ? categories.map(
                        category => (
                            <option
                                key={category}
                                value={category}
                            >
                                {category}
                            </option>
                        )
                    ) :
                        <option> No Category</option>
                }
            </Select>
        </Box>
    )
}
