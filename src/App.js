import { useSetRecoilState } from 'recoil';
import useFetchData from './hooks/useFetchData';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

/* recoil */
import { productsState } from './recoil/products/atom';

/* hooks */
import useLocalStorage from './hooks/useLocalStorage';
import { useScrollToTop } from './hooks/useScrollToTop';

import { Box, useToast } from '@chakra-ui/react';

/* pages */
import Home from './pages/Home';
import GridProducts from './pages/GridProducts';
import Cart from './pages/Cart';
import ProductView from './pages/ProductView';
import NotFound from './pages/NotFound';
import MyPage from './pages/MyPage';
import CreateAccount from './pages/CreateAccount';

import Footer from './block/Footer';
import Header from './block/Header';
import Loading from './components/Loading';

export default function App() {
    const {isError, data, isLoading} = useFetchData('/products', []);
    const setProductsState = useSetRecoilState(productsState);
    const toast = useToast();
    useLocalStorage();
    useScrollToTop();

    useEffect(() => {
        if (isError) {
            toast({
                title: 'Something went wrong',
                description: 'Please refresh the page',
                status: 'error',
                isClosable: true,
            })
        } else if (!isError && !isLoading) {
            setProductsState(data);
        }
        // eslint-disable-next-line
    }, [data, isError, isLoading]);

    if(isLoading) return <Loading />;
    return (
        <>
            <Header />
            <Box as='main'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<GridProducts />} />
                    <Route path='/products/*' element={<GridProducts />} />
                    <Route path='/product/:id' element={<ProductView />} />
                    <Route path='/mypage' element={<MyPage />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/register' element={<CreateAccount />} />
                    <Route path='*' element={ <NotFound /> } />
                </Routes>
            </Box>
            <Footer />
        </>
    );
}