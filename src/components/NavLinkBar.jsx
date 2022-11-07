import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* components */
import Icon from './Icon'
import { Container } from '@chakra-ui/react';

export default function NavLinkBar(props) {
    const { path } = props;

    return (
        <nav>
            <Container py={5} px={0} maxW='container.xl'>
                <Link to={path}>
                    <Icon name='arrowLeft' />Back
                </Link>
            </Container>
        </nav>
    )
}

NavLinkBar.propTypes = {
    path: PropTypes.string,
}