import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';

const MainTemplate = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};
MainTemplate.propTypes = {
    children: PropTypes.node,
};

MainTemplate.defaultProps = {
    children: [],
};

export default MainTemplate;
