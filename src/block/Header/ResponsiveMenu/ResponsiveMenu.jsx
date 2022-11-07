import React from 'react';

/* components */
import { Button, Flex, Hide, IconButton, Show, useDisclosure, VStack, } from '@chakra-ui/react';
import Icon from '../../../components/Icon';
import DivButton from '../../../components/DivButton';
import DrawerMenu from './DrawerMenu';

export default function ResponsiveMenu(props) {
    const { contents, gap, bg, breakpoint, toggleIcon, position } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();

    function capitalizeString(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <>
            <Show below={breakpoint}>
                <Flex>
                    <IconButton
                        aria-label='Menu'
                        icon={<Icon name={toggleIcon} w='10' h='10' />}
                        variant='unstyled'
                        onClick={onOpen}
                        mr={position === 'right' ? 0 : 'auto'}
                        ml={position === 'left' ? 0 : 'auto'}
                    />
                    <DrawerMenu
                        onClose={onClose}
                        isOpen={isOpen}
                        contents={contents}
                        placement={position}
                    />
                </Flex>
            </Show>

            <Hide below={breakpoint}>
                <VStack gap={gap} bg={bg ? bg : 'white'}>
                    {
                        contents.map(content => (
                            content.type !== 'button' ?
                                <DivButton
                                    key={content.label}
                                    onClick={() => {
                                        content.onClick();
                                        onClose();
                                    }}
                                    label={capitalizeString(content.label)}
                                /> :
                                <Button
                                    key={content.label}
                                    fontWeight='semibold'
                                    onClick={() => {
                                        content.onClick();
                                        onClose();
                                    }}
                                    {...content.props}
                                >
                                    {capitalizeString(content.label)}
                                </Button>
                        ))
                    }
                </VStack>
            </Hide>
        </>
    )
}
