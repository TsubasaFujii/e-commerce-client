import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";

/* recoil */
import { cartState } from '../recoil/cart/atom';

export default function useLocalStorage() {
    const [cartData, setCartData] = useRecoilState(cartState);

    const saveData = useCallback(() => {
        const parsedData = JSON.stringify(cartData);
        window.localStorage.setItem('myCartData', parsedData);
    }, [cartData]);

    const getData = useCallback(() => {
        // If there is not data on local storage
        if(localStorage.getItem('myCartData') === null) return;

        const rawData = window.localStorage.getItem('myCartData');
        const savedData = JSON.parse(rawData);
        // This step is important.
        // When the component is mounted cartData is [] (empty array)
        // if you continue using that data to 'retrieve' data of course it will []
        // To avoid this you need this blocker.
        if(savedData) {
            setCartData(savedData);
        }
    }, [setCartData]);

    // https://stackoverflow.com/questions/67141669/why-my-localstorage-gets-empty-each-time-i-reload-the-page
    useEffect(() => {
        getData();
    }, [getData]);

    useEffect(()=> {
        saveData();
    }, [cartData, saveData]);
    
}

