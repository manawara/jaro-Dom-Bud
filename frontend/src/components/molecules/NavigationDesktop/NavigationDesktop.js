import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, NavList, Wrapper } from './NavigationDesktop.style';
import SocialIcons from '../SocialIcons/SocialIcons';

const NavigationDesktop = () => (
    <Wrapper>
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
                <Link to="/kontakt"> kontakt</Link>
            </ListItem>
        </NavList>
        <SocialIcons />
    </Wrapper>
);

export default NavigationDesktop;
