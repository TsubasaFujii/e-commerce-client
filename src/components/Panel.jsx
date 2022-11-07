import React from 'react';
import { Button, Grid, GridItem, Heading, } from '@chakra-ui/react';

export default function Panel(props) {
    const {
        heading,
        img,
        headingPosition,
        buttonPosition,
        headingMarginY,
        textColor,
        textBg,
        featured,
        buttonLabel,
        buttonBg,
        onClick
    } = props;
    const headingRow = parsePosition(headingPosition);
    const buttonRow = parsePosition(buttonPosition[0]);
    const buttonCol = parsePosition(buttonPosition[1]);
    function parsePosition(position) {

        switch (position) {
            case 'top' || 'left':
                return 1;
            case 'center':
                return 2;
            case 'middle' || 'right':
                return 3;
            case 'low':
                return 5;
            case undefined:
                return 1;
            default:
                break;
        }

    }

    return (
        <Grid
            w='100%'
            h='100%'
            bgImage={img}
            bgSize='cover'
            bgPosition='center'
            borderRadius='md'
            templateRows='repeat(5, 1fr)'
            templateColumns='repeat(3, 1fr)'
            justify='center'
            alignItems='center'
            px={{
                base: '0.7rem',
                md: '1rem'
            }}
        >
            <GridItem
                gridRow={`${headingRow} / span 1`}
                gridColumn='1 / span 5'
                my={headingMarginY}
            >
                <Heading
                    as='h2'
                    display='inline'
                    p={2}
                    textAlign='left'
                    lineHeight={2}
                    fontSize={featured ? { base: '2xl', lg: '4xl' } : { base: 'lg', md: 'xl', lg: '2xl' }}
                    m='auto'
                    color={textColor}
                    bgColor={textBg}
                    textTransform='capitalize'
                >
                    {heading}
                </Heading>
            </GridItem>

            <GridItem
                gridRow={`${buttonRow} / span 1`}
                gridColumn={`${buttonCol} / span 1`}
                m='auto'
                py={{ base: 4, lg: 5 }}
            >
                <Button
                    rounded={'full'}
                    px={typeof buttonLabel === 'string' ? 6 : 2}
                    bg={buttonBg ? buttonBg : 'green.400'}
                    _hover={{
                        filter: 'brightness(85 %)',
                    }}
                    color={'white'}
                    boxShadow='md'
                    onClick={onClick}
                >
                    {buttonLabel}
                </Button>
            </GridItem>
        </Grid >
    )
}
