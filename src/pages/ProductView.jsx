import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

/* recoil */
import { productsState } from '../recoil/products/atom';

/* components */
import NavLinkBar from '../components/NavLinkBar';
import {
    Box,
    Container,
    Heading,
    Image,
    Text,
    Stack,
    VStack,
    AccordionItem,
    Accordion,
    AccordionIcon,
    AccordionButton,
    AccordionPanel
} from '@chakra-ui/react';
import Loading from '../components/Loading';
import ReviewDisplay from '../components/ReviewDisplay';
import BuyButton from '../components/BuyButton';

export default function ProductView() {
    const products = useRecoilValue(productsState);
    const [currentProduct, setCurrentProduct] = useState(null);
    // Careful! it's a string
    const params = useParams();

    useEffect(() => {
        const currentProductId = parseInt(params.id);
        const currentProductData = products.find(
            product => product.id === currentProductId
        );
        setCurrentProduct(currentProductData);
    }, [params, products]);

    if (!currentProduct || !products) return <Loading />;

    return (
        <Container
            maxW={{ base: '90vw', lg: '50vw' }}
        >
            <NavLinkBar path='/products' />
            <Stack direction={{ base: 'column', lg: 'row' }} spacing={6}>
                <Box>
                    <Heading fontSize={{ base: '1.5rem', lg: '2rem' }}>
                        {currentProduct.title}
                    </Heading>
                    <Box
                        p={{ base: '0', lg: '0.5rem' }}
                        py={{ base: '1rem', lg: '0' }}
                    >
                        <Image
                            src={currentProduct.image}
                            alt='product'
                        />
                    </Box>
                </Box>

                <VStack maxW={{ base: '100%', lg: 'sm' }} align='start' spacing={3}>
                    <Text fontSize='2xl'>£{
                        new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2 })
                            .format(currentProduct.price)
                    }</Text>
                    <Box>
                        <Text>
                            In Stock.
                        </Text>
                        <BuyButton id={parseInt(params.id)} S />
                    </Box>

                    <Accordion w={{ base: '100%', lg: 'xs' }} allowToggle>
                        <AccordionItem>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Description
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                {currentProduct.description}
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Details
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                Category: {currentProduct.category}
                                <ReviewDisplay
                                    rate={currentProduct.rating.rate}
                                    count={currentProduct.rating.count}
                                />
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                </VStack>
            </Stack>
        </Container>

    )
}
