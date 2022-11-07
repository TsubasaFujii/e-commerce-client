import React from 'react';
import PropTypes from 'prop-types';

/* components */
import { Box, SimpleGrid } from '@chakra-ui/react';
import GridItem from './GridItem';
import { useRecoilValue } from 'recoil';
import { productsSelector } from '../../recoil/products/selectors';

export default function ProductsDisplay() {
    const productsToShow = useRecoilValue(productsSelector);

    return (
        <SimpleGrid
            spacing={[4, 8]}
            maxWidth={['100%', '50rem']}
            marginX={'auto'}
            justifyItems='center'
            gridTemplateColumns={
                productsToShow.length === 0 ?
                    '1fr' :
                    'repeat(auto-fill, minmax(15rem, 1fr))'
            }
        >
            {
                productsToShow.length > 0 ?
                    productsToShow.map((product) => (
                        <GridItem
                            key={product.id}
                            {...product}
                        />
                    )) :
                    <Box
                        gridColumn='1'
                        py='2rem'
                        fontWeight='semibold'
                        fontSize='lg'
                    >
                        No Item Found
                    </Box>
            }
        </SimpleGrid>
    )
}

ProductsDisplay.propTypes = {
    productsToShow: PropTypes.array,
}