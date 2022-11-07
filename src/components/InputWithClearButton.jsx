import React from 'react';
import {
    Button,
    Input,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';

export default function InputWithClearButton(props) {
    const {
        isDisabled,
        handleClear,
        id,
        handleOnChange,
        value,
        placeholder,
        leftElement,
        type
    } = props;

    return (
        <InputGroup maxW={['100%', '25rem']}>
            {leftElement ? leftElement : ''}
            <Input
                value={value}
                onChange={handleOnChange}
                id={id}
                bg='white'
                placeholder={placeholder}
                type={type ? type : 'text'}
            />
            <InputRightElement width='4.5rem'>
                <Button
                    h='1.75rem'
                    size='sm'
                    isDisabled={isDisabled}
                    onClick={() => {
                        handleClear(id);
                    }}>
                    Clear
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}
