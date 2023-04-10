import React from 'react';
import PropTypes from 'prop-types';
import { StyledButtonInline, StyledParagraph, StyledHeadingQuaternary, Wrapper } from './Card.style';

const Card = ({ url, title, description, isNext }) => {
    return (
        <Wrapper url={url} isNext={isNext}>
            <StyledHeadingQuaternary>{title}</StyledHeadingQuaternary>
            <StyledParagraph>{description}</StyledParagraph>
            <StyledButtonInline>Szczegóły</StyledButtonInline>
        </Wrapper>
    );
};
Card.defaultProps = {
    url: null,
    title: '',
    description: '',
    isNext: false,
};
Card.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    isNext: PropTypes.bool,
};
export default Card;
