import React, { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import Logo from '../../atoms/Logo/Logo';
import Container from '../../../helper/Container/Container';
import NavigationDesktop from '../../molecules/NavigationDesktop/NavigationDesktop';
import { Wrapper } from './Header.style';
import NavigationMobile from '../../molecules/NavigationMobile/NavigationMobile';

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <Wrapper>
            <Container>
                <Logo />
                <NavigationDesktop />
                <Hamburger toggled={isOpen} toggle={setOpen} />
                <NavigationMobile isOpen={isOpen} />
            </Container>
        </Wrapper>
    );
};

export default Header;
