import React from 'react';
import { useNavigate } from 'react-router';
import { createSearchParams } from 'react-router-dom';

/* images */
import featuredImage from '../assets/hero-img.jpg';
import rightTopImage from '../assets/hero-sub1.jpg';
import rightBottomImage from '../assets/test.jpg';

/* components */
import { Box, Container, } from '@chakra-ui/react';
import Icon from '../components/Icon';
import Hero from '../block/Hero';
import CategoryDisplay from '../block/CategoryDisplay';

export default function Home() {
    const navigate = useNavigate();

    const heroContents = [{
        featured: true,
        image: featuredImage,
        heading: {
            text: 'A style for every story.',
            color: 'black',
            bg: 'rgb(222, 176, 101)',
        },
        button: {
            content: 'Shop now',
            onClick: () => {
                navigate('/products')
            },
        }
    }, {
        image: rightTopImage,
        heading: {
            text: 'Top rated items',
            color: 'black',
            bg: 'rgba(103, 198, 230, 0.8)',
            position: 'top',
        },
        button: {
            content: <Icon name='arrowRight' />,
            position: ['low', 'right'],
            bg: 'rgba(192, 16, 36, 255)',
            onClick: () => {
                navigate({
                    pathname: '/products',
                    search: `${createSearchParams({ rating: 4, })}`,
                })
            }
        }
    }, {
        image: rightBottomImage,
        heading: {
            text: 'Electronics',
            color: 'black',
            bg: 'rgba(201, 89, 80, 255)'
        },
        button: {
            content: <Icon name='arrowRight' />,
            position: ['low', 'right'],
            bg: 'rgba(121, 111, 205, 255)',
            onClick: () => {
                navigate({
                    pathname: '/products',
                    search: `${createSearchParams({ category: 'electronics' })}`,
                });
            }
        }
    }];

    const categoryList = [{
        category: 'electronics',
        icon: <Icon name='lightning' color='white' />,
        onClick: () => {
            navigate({
                pathname: '/products',
                search: `${createSearchParams({ category: 'electronics', })}`,
            })
        }
    }, {
        category: 'jewelery',
        icon: <Icon name='sparkles' color='white' />,
        onClick: () => {
            navigate({
                pathname: '/products',
                search: `${createSearchParams({ category: 'jewelery', })}`,
            })
        }
    }, {
        category: 'men',
        icon: <Icon name='star' color='white' />,
        onClick: () => {
            navigate({
                pathname: '/products',
                search: `${createSearchParams({ category: 'men\'s clothing', })}`,
            })
        }
    }, {
        category: 'women',
        icon: <Icon name='heart' color='white' />,
        onClick: () => {
            navigate({
                pathname: '/products',
                search: `${createSearchParams({ category: 'women\'s clothing', })}`,
            })
        }
    }];

    return (

        <Container
            centerContent
            maxW={{ base: '90vw', lg: '70vw' }}
            gap={20}
        >
            <Box as='section'>
                <Hero contents={heroContents} />
            </Box>

            <Box as='section' w='100%'>
                <CategoryDisplay contents={categoryList} />
            </Box>
        </Container>

    )
}
