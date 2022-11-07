import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* components */
import { Box, GridItem as ChakraGridItem, Image, Stack } from '@chakra-ui/react';

import ReviewDisplay from '../ReviewDisplay';
import BuyButton from '../BuyButton';


export default function GridItem(props) {
    const { image, title, price, rating, id } = props;
    const path = `/product/${id}`;

    return (
        <ChakraGridItem
            overflow='hidden'
            w='100%'
            bg='white'
        >
            <Stack
                direction={['row', 'column']}
                spacing={4}
                w='100%'
            >
                <Link to={path}>
                    <Image
                        src={image}
                        alt={title}
                        w={['40vw', '3xs']}
                        h='3xs'
                        m='auto'
                        fit='contain'
                        loading='lazy'
                    />
                </Link>

                <Stack
                    w='100%'
                    px={[0, 4]}
                    py={5}
                    justifyContent='space-around'
                    overflow='hidden'
                >
                    <Box
                        as='h3'
                        w='100%'
                        lineHeight='tight'
                        isTruncated
                    >
                        <Link to={path}>
                            {title}
                        </Link>
                    </Box>
                    <ReviewDisplay {...rating} />
                    <Box>
                        £{
                            new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2 })
                                .format(price)
                        }
                    </Box>
                    <BuyButton id={id} />
                </Stack>
            </Stack>
        </ChakraGridItem >
    )
}

GridItem.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.object,
    id: PropTypes.number,
}