import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SocialIcons from '../SocialIcons/SocialIcons';
import { Wrapper, NavList, ListItem } from './NavigationMobile.style';

const NavigationMobile = ({ isOpen }) => (
    <Wrapper isOpen={isOpen}>
        <NavList>
            <ListItem>
                <Link to="/">strona główna </Link>
            </ListItem>
            <ListItem>
                <Link to="/">oferta </Link>
            </ListItem>
            <ListItem>
                <Link to="/"> galeria zdjęć</Link>
            </ListItem>
            <ListItem>
                <Link to="/"> kontakt</Link>
            </ListItem>
        </NavList>
        <SocialIcons />
    </Wrapper>
);

NavigationMobile.defaultProps = {
    isOpen: false,
};
NavigationMobile.propTypes = {
    isOpen: PropTypes.bool,
};
export default NavigationMobile;
