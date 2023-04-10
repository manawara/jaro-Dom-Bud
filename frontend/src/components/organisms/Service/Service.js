import React from 'react';
import CardService from '../../molecules/CardService/CardService';
import { HeadingTertiary } from '../../atoms/Heading/Heading';
import Container from '../../../helper/Container/Container';
import {
    Wrapper,
    ContentService,
    StyledIconTeam,
    StyledIconSecurity,
    StyledIconPiechart,
    StyledParagraph,
} from './Services.style';

const Service = (props) => (
    <Wrapper>
        <Container>
            <ContentService>
                <CardService>
                    <StyledIconPiechart />
                    <HeadingTertiary>Terminowość</HeadingTertiary>
                    <StyledParagraph>
                        Doskonale wiemy jak ważny jest czas, dlatego nasze realizacje zawsze są wykonywane w terminie.
                    </StyledParagraph>
                </CardService>
                <CardService>
                    <StyledIconSecurity />
                    <HeadingTertiary>Jakość</HeadingTertiary>
                    <StyledParagraph>
                        Od początku naszej działalności bardzo dużo uwagi przykładamy do jakości wykonywanych przez nas
                        prac.
                    </StyledParagraph>
                </CardService>
                <CardService>
                    <StyledIconTeam />
                    <HeadingTertiary>Darmowa wycena</HeadingTertiary>
                    <StyledParagraph>
                        Jesteś ciekaw ile bedzie cię kosztowało zrealizowanie twojego projektu? Skontaktuj się z nami
                        otrzymasz darmową wycene.{' '}
                    </StyledParagraph>
                </CardService>
            </ContentService>
        </Container>
    </Wrapper>
);

export default Service;
