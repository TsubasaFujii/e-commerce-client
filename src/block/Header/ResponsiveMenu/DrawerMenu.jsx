import React from 'react';

import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    IconButton,
} from '@chakra-ui/react';
import Icon from '../../../components/Icon';
import DivButton from '../../../components/DivButton';

export default function DrawerMenu(props) {
    const { onClose, isOpen, contents, placement } = props;

    return (
        <Drawer
            placement={placement ? placement : 'left'}
            onClose={onClose}
            isOpen={isOpen}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader
                    as='div'
                    display='flex'
                    justify='flex-end'
                    flexDirection='row'
                >
                    <IconButton
                        icon={<Icon name='cross' />}
                        shadow='none'
                        onClick={onClose}
                    />
                </DrawerHeader>
                <DrawerBody
                    as='div'
                    display='flex'
                    align='center'
                    flexDirection='column'
                    gap={5}
                >
                    {
                        contents.map(content => {
                            if (content.show) {
                                return (
                                    <DivButton
                                        key={content.label}
                                        label={content.label}
                                        onClick={() => {
                                            content.onClick();
                                            onClose();
                                        }}
                                    />
                                )
                            }
                            return null;
                        })
                    }
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}
