import React from 'react';
import PropTypes from 'prop-types';

/* components */
import { Grid, GridItem, } from '@chakra-ui/react';
import Panel from '../components/Panel';

export default function Hero(props) {
    const { contents } = props;

    return (
        <Grid
            maxW='100%'
            maxH={{ base: 'auto', md: 'calc(70vw * 0.5)' }}
            templateRows={{ base: 'auto', md: 'repeat(2, 48%)' }}
            templateColumns={{ base: '1fr', md: 'repeat(6, 1fr)' }}
            gap={5}
        >
            <GridItem
                gridRow={{ base: 'auto', md: '1/ span 2' }}
                gridColumn={{ base: 'auto', md: '1 / span 4' }}
            >
                <Panel
                    img={contents[0].image}
                    heading={contents[0].heading.text}
                    top='top'
                    featured={contents[0].featured}
                    headingPosition={contents[0].heading.position}
                    headingMarginY='1rem'
                    textColor={contents[0].heading.color}
                    textBg={contents[0].heading.bg ? contents[0].heading.bg : 'transparent'}
                    buttonPosition={
                        contents[0].heading.position ?
                            contents[0].heading.position :
                            ['low', 'center']
                    }
                    buttonLabel={contents[0].button.content}
                    buttonBg={contents[0].button.bg}
                    onClick={contents[0].button.onClick}
                />
            </GridItem>
            <GridItem
                gridRow={{ base: 'auto', md: '1/ span 1' }}
                gridColumn={{ base: 'auto', md: '5 / span 2' }}
            >
                <Panel
                    img={contents[1].image}
                    heading={contents[1].heading.text}
                    top='top'
                    featured={contents[1].featured}
                    headingPosition={contents[1].heading.position}
                    headingMarginY='1rem'
                    textColor={contents[1].heading.color}
                    textBg={contents[1].heading.bg ? contents[1].heading.bg : 'transparent'}
                    buttonPosition={
                        contents[1].heading.position ?
                            contents[1].heading.position :
                            ['low', 'center']
                    }
                    buttonLabel={contents[1].button.content}
                    buttonBg={contents[1].button.bg}
                    onClick={contents[1].button.onClick}
                />
            </GridItem>
            <GridItem
                gridRow={{ base: 'auto', md: '2/ span 1' }}
                gridColumn={{ base: 'auto', md: '5 / span 2' }}
            >
                <Panel
                    img={contents[2].image}
                    heading={contents[2].heading.text}
                    top='top'
                    featured={contents[2].featured}
                    headingPosition='top'
                    headingMarginY='1rem'
                    textColor={contents[2].heading.color}
                    textBg={contents[2].heading.bg ? contents[2].heading.bg : 'transparent'}
                    buttonPosition={
                        contents[2].button.position ?
                            contents[2].button.position :
                            ['low', 'center']
                    }
                    buttonLabel={contents[2].button.content}
                    buttonBg={contents[2].button.bg}
                    onClick={contents[2].button.onClick}
                />
            </GridItem>

        </Grid >

    )
}

Hero.propTypes = {
    heading: PropTypes.string,
}