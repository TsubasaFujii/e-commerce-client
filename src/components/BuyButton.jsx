import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import PropTypes from 'prop-types';

/* recoil */
import { cartState } from '../recoil/cart/atom';
import { changeItemQuantitySelector, increaseItemQuantitySelector } from '../recoil/cart/selectors';


/* components */
import { Button, Center, Tooltip, useToast } from '@chakra-ui/react';
import Counter from './Counter';

export default function BuyButton(props) {
    const { id } = props;
    const cartData = useRecoilValue(cartState);
    // This product's status in cart
    // If it doesn't find matching ID return 'undefined'
    const cartStatus = cartData.find((item) => item.id === id);

    useEffect(() => {
        // condition is for when it's mounted because it's undefined
        setCount(cartStatus ? cartStatus.count : 0);
    }, [cartStatus]);

    ///// This is for Add Button
    const addItemToCart = useSetRecoilState(increaseItemQuantitySelector);
    const toast = useToast();
    function handleAddToCart() {
        addItemToCart(id);
        toast({
            description: 'Item Added',
            status: 'info',
            duration: 2000,
            isClosable: true,
        })
    }

    ///// This is for Counter
    //// Note to myself ////
    // This state is shared with buttons and the input field (and add item to cart button)
    // when the item is already in the cart it has value otherwise it's undefined
    // If cartStatus is undefined its count is 0
    const updateItemQuantity = useSetRecoilState(changeItemQuantitySelector);
    const [count, setCount] = useState(cartStatus ? cartStatus.count : 0);
    const [isValid, setIsValid] = useState(true);
    // Ref is required for tooltip : https://chakra-ui.com/docs/components/overlay/tooltip
    const counterElement = useRef(null);

    function handleCountChange(newCount) {
        // check if newCount contains a letter / decimal number
        // e.g. 'test123' => true / 'test' => true / ' ' => false / 2+ => true
        const reg = /[ ~`!#$%^&*+=\-[\]\\';,/{}|\\":<>?a-zA-Z/]/g;
        if (newCount.includes('.') || reg.test(newCount)) {
            setIsValid(false);
        } else {
            setIsValid(true);
            setCount(newCount);
        }
    }

    function handleOnBlur(event) {
        if (event.target.value === '') {
            handleCountChange(event.target.value);
            updateItemQuantity({
                count: 0,
                id: id,
            })
        }
        setIsValid(true);
    }

    return (
        <Center w='100%' h={10} py={5}>
            {
                cartStatus && cartStatus.count > 0 ?
                    <Tooltip label='Enter a number' isOpen={!isValid}>
                        <Counter
                            id={id}
                            count={count}
                            handleCountChange={handleCountChange}
                            ref={counterElement}
                            handleOnBlur={handleOnBlur}
                        />
                    </Tooltip> :
                    <Button
                        onClick={handleAddToCart}
                        fontWeight={400}
                    >
                        Add to Cart
                    </Button>
            }
        </Center>
    )
}

BuyButton.propTypes = {
    id: PropTypes.number,
}