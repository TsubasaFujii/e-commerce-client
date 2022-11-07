import React, { useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { createSearchParams } from 'react-router-dom';

import { Center, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import CategorySelector from './CategorySelector';
import Icon from '../../../components/Icon';

export default function SearchBar(props) {
    const [keywords, setKeyword] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();

    const location = useLocation();
    useLayoutEffect(() => {
        if (!location.pathname.includes('products')) {
            setKeyword('');
            setSelectedCategory('');
        }
    }, [location.pathname]);

    function handleClick() {
        let params = {};
        if (keywords) {
            params = {
                keywords: keywords
            }
        }
        if (selectedCategory) {
            params = {
                ...params,
                category: selectedCategory,
            }
        }
        navigate({
            pathname: '/products',
            search: `${keywords || selectedCategory ? `?${createSearchParams(params)}` : ''}`,
        });
    }

    function handleChangeSelected(selectedCategory) {
        setSelectedCategory(selectedCategory);
    }

    return (
        <Center {...props} maxW={{ base: '100%', lg: '587px' }}>
            <InputGroup gap={4} flexWrap={{ base: 'wrap-reverse', sm: 'nowrap' }}>
                <CategorySelector handleChange={handleChangeSelected} value={selectedCategory} />
                <Input
                    variant='filled'
                    placeholder='Search'
                    onChange={(event) => setKeyword(event.target.value)}
                    value={keywords}
                />
                <InputRightElement width='4rem'>
                    <IconButton
                        aria-label='Search'
                        isRound
                        icon={<Icon name='search' />}
                        size='sm'
                        variant='unstyled'
                        onClick={handleClick}
                    />
                </InputRightElement>
            </InputGroup>
        </Center >
    )
}
