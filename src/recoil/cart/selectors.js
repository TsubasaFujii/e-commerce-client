import { selector } from "recoil";
import { cartState } from "./atom";
import { productsState } from "../products/atom";

// item : items in cart
// product : products from product list

export const cartStatus = selector({
    key: 'cartStatus',
    get: ({get}) => {
        const itemsInCart = get(cartState);

        const itemNum = itemsInCart.reduce((total, current) => (
            total += current.count
        ), 0);

        const sum = itemsInCart.reduce((total, current) => {
            return total + current.price * current.count;
        }, 0);
        // To avoid getting too many decimal numbers
        const totalPrice = Math.floor(sum * 100) / 100;

        return {itemCount: itemNum, totalPrice: totalPrice};
    }
});

// For counter comp & 'add Item' buttons
export const increaseItemQuantitySelector = selector({
    key: 'increaseItemQuantitySelector',
    get: () => {},
    set: ({get, set}, targetId) => {
        const itemsInCart = get(cartState);
        // returns undefined when obj with the targetID isn't found
        const isOnList = itemsInCart.find(item => item.id === targetId);
    
        if(isOnList) {
            const newCart = itemsInCart.map(item => {
                if(item.id === targetId) {
                    return {
                        ...item,
                        count: item.count + 1,
                    }
                }
                return item;
            });
            set(cartState, newCart);
        } else {
            const products = get(productsState);
            const newProduct = products.find(product => product.id === targetId);
            set(cartState, [...itemsInCart, {
                ...newProduct,
                count: 1,
            }]);
        }
    }
});

// For counter comp.
export const decreaseItemQuantitySelector = selector({
    key: 'decreaseItemQuantitySelector',
    get: () => {},
    set: ({get, set}, targetId) => {
        const itemsInCart = get(cartState);

         const updatedCart = itemsInCart.map(item => {
            if(item.id === targetId) {
                return {
                    ...item,
                    count: item.count - 1,
                }
            }
            return item;
        });
        // remove the item from cart if it's 0 
        const newCart = updatedCart.filter((item) => item.count !== 0);
        set(cartState, newCart);
    }
});

// For counter comp.
export const changeItemQuantitySelector = selector({
    key: 'changeItemQuantitySelector',
    get: () => {},
    set: ({get, set}, {count, id}) => {
        const itemsInCart = get(cartState);
        const products = get(productsState);
        
        // when it's changed to 0
        // remove the item from cart
        if(count === 0) {
            const newCart = itemsInCart.filter((item) => item.id !== id);
            set(cartState, newCart);
            return;
        }

        // If the target product is already in cart
        const targetIsInCart = itemsInCart.some(
            item => item.id === id
        );
        if(!targetIsInCart){
            const targetProductData = products.find(product => product.id === id);
            const newCart = [...itemsInCart, {
                ...targetProductData,
                count: parseInt(count),
            }];
            set(cartState, newCart);
        } else {
            const newCart = itemsInCart.map(item => {
                if(item.id === id) {
                    return {
                        ...item,
                        count: parseInt(count),
                    }
                }
                return item;
            });
            set(cartState, newCart);
        }
    }
});

export const removeItemSelector = selector({
    key: 'removeItemSelector',
    get: () => {},
    set: ({get, set}, targetId) => {
        const itemsInCart = get(cartState);

        const newCart = itemsInCart.filter((item) => item.id !== targetId);
        set(cartState, newCart);
    }
});