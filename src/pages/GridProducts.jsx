import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState, } from 'recoil';
import { useNavigate, useLocation } from 'react-router-dom';

/* recoil */
import { productsSelector, productsStatus } from '../recoil/products/selectors';
import { criterionState } from '../recoil/filter/atom';

/* components */
import { Button, Center, Container } from '@chakra-ui/react';
import Loading from '../components/Loading';
import ProductsDisplay from '../components/productGrid/ProductsDisplay';

export default function GridProducts() {
    const [isLoading, setIsLoading] = useState(true);
    const setSearchCriterion = useSetRecoilState(criterionState);
    const productsToShow = useRecoilValue(productsSelector);

    // For show more button
    const { totalProductNum } = useRecoilValue(productsStatus);

    const navigate = useNavigate();
    const { search } = useLocation();

    useEffect(() => {
        setIsLoading(true);
        let newFilterCondition = {};
        if (search) {
            const searchParams = new URLSearchParams(search);
            newFilterCondition = Object.fromEntries(searchParams.entries());
        }
        setSearchCriterion(newFilterCondition);
        setIsLoading(false);
    }, [search, setSearchCriterion]);

    function handleOnClick() {
        setSearchCriterion('');
        navigate('/products');
    }

    if (isLoading) return <Loading />;

    return (
        <Container
            maxW='100%'
        >
            <ProductsDisplay />
            {
                totalProductNum !== 0 && productsToShow.length < totalProductNum ?
                    <Center m={8}>
                        <Button onClick={handleOnClick}>
                            Show Other Products
                        </Button>
                    </Center> :
                    null
            }
        </Container>
    )
}
