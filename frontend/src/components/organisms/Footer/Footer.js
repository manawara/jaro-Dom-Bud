import React from 'react';
import Container from '../../../helper/Container/Container';
import List from '../../molecules/List/List';
import { Wrapper, StyledContent } from './Footer.style';

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <StyledContent>
                    <List />
                </StyledContent>
            </Container>
        </Wrapper>
    );
};

export default Footer;
