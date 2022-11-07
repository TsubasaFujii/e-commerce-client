import React from 'react';
import PropTypes from 'prop-types';

/* components */
import Icon from './Icon';
import { Box } from '@chakra-ui/react';

export default function ReviewDisplay(props) {
    const { rate, count } = props;
    const roundedRate = Math.round(rate);

    return (
        <Box display='flex' mt='2' alignItems='center'>
            {
                Array(5)
                    .fill('')
                    .map((_, index) => (
                        <Icon
                            key={index}
                            name='star'
                            color={index < roundedRate ? 'green.400' : 'gray.300'}
                            w={3}
                            h={3}
                        />
                    ))
            }
            <Box as='span' ml='2' color='gray.600' fontSize='xs'>
                ({count})
            </Box>
        </Box>
    )
}

ReviewDisplay.propTypes = {
    rate: PropTypes.number,
    count: PropTypes.number,
}