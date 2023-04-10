import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import ImageWithText from '../../organisms/ImageWithText/ImageWithText';
import ReviewClient from '../../organisms/ReviewClient/ReviewClient';
import Gallery from '../../organisms/Gallery/Gallery';
import Service from '../../organisms/Service/Service';

const Home = () => (
    <MainTemplate>
        <ImageWithText />
        <ReviewClient />
        <Gallery />
        <Service />
    </MainTemplate>
);

export default Home;
