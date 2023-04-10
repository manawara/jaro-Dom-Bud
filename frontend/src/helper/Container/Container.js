import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    max-width: 1440px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: ${({ isSpaceBetween }) => (isSpaceBetween ? 'space-between' : 'flex-start')};
    padding: 0 38px;
    width: 100%;
    overflow: hidden;
    position: relative;

    top: 0;
    left: 0;
`;
const Container = ({ children, isSpaceBetween }) => {
    return <Wrapper isSpaceBetween={isSpaceBetween}>{children}</Wrapper>;
};
Container.defaultProps = {
    isSpaceBetween: false,
};
Container.propTypes = {
    isSpaceBetween: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default Container;
