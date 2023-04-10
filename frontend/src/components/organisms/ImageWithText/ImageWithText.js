import React from 'react';
import Container from '../../../helper/Container/Container';
import { HeadingPrimary } from '../../atoms/Heading/Heading';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import ImageHouse from '../../../assets/images/house.jpg';
import { Wrapper, ContentImage, Column, Image } from './ImageWithText.style';

const ImageWithText = () => {
    return (
        <Wrapper>
            <Container>
                <ContentImage>
                    <Column>
                        <HeadingPrimary>Usługi budowlane</HeadingPrimary>
                        <Paragraph>
                            Dlaczego warto nas wybrać. Naszymi atutami są: solidność, terminowość, szeroki wachlarz
                            usług, konkurencyjne ceny i najważniejsze w tej branży – bogate doświadczenie.
                        </Paragraph>
                        <Paragraph>
                            Oferujemy kompleksowe wykonanie wszelkich obiektów budowlanych, począwszy od budownictwa
                            mieszkalnego, a skończywszy na obiektach przemysłowych.
                        </Paragraph>
                    </Column>
                    <Column>
                        <Image src={ImageHouse} />
                    </Column>
                </ContentImage>
            </Container>
        </Wrapper>
    );
};

export default ImageWithText;
