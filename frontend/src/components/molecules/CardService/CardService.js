import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './CardService.style';

const CardService = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};
CardService.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CardService;
