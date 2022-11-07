import React, { forwardRef } from 'react'
import { useSetRecoilState } from 'recoil';
import PropTypes from 'prop-types';

/* recoil */
import { decreaseItemQuantitySelector } from '../recoil/cart/selectors';
import { increaseItemQuantitySelector } from '../recoil/cart/selectors';
import { changeItemQuantitySelector } from '../recoil/cart/selectors';

/* components */
import Icon from './Icon'
import { HStack, IconButton, Input } from '@chakra-ui/react';

function Counter(props, ref) {
    const { id, count, handleCountChange, handleOnBlur } = props;

    const decreaseItem = useSetRecoilState(decreaseItemQuantitySelector);
    const increaseItem = useSetRecoilState(increaseItemQuantitySelector);
    const updateItemQuantity = useSetRecoilState(changeItemQuantitySelector);

    function handleIncrement() {
        increaseItem(id);
    }

    function handleDecrement() {
        decreaseItem(id);
    }



    function handleChange(event) {
        // Do not parse the value here because parseInt returns NaN when input value= is ''
        handleCountChange(event.target.value);
        // Do not update when input value is...
        // empty
        // not a numeric value 
        // a decimal number
        if (event.target.value !== '' && !isNaN(event.target.value) && !event.target.value.includes('.')) {
            updateItemQuantity({
                // In order to let user delete the entire input I use input type='text'
                // so I need to parse it otherwise it will be like "111111"
                count: parseInt(event.target.value),
                id: id,
            })
        }
    }

    return (
        <HStack>
            <IconButton
                size='sm'
                bg='green.400'
                color='white'
                boxShadow='md'
                _hover={{
                    bg: 'green.500',
                }}
                onClick={handleIncrement}
                icon={<Icon name='plus' />}
            />

            <Input
                onChange={handleChange}
                onBlur={handleOnBlur}
                w='3rem'
                size='sm'
                value={count}
                type='text'
                textAlign='center'
                ref={ref}
            />

            <IconButton
                size='sm'
                bg='green.400'
                color='white'
                _hover={{
                    bg: 'green.500',
                }}
                boxShadow='md'
                onClick={handleDecrement}
                icon={<Icon name='minus' />}
            />
        </HStack>
    )
}

export default forwardRef(Counter);

Counter.propTypes = {
    id: PropTypes.number,
    // string is only for when user delete entire value in the input field
    // otherwise I get warning for it
    count: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    handleCountChange: PropTypes.func,
}
