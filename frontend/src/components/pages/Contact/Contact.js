import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import ImageWithText from '../../organisms/ImageWithText/ImageWithText';
import { Input } from '../../atoms/Input/Input';
import FormContact from '../../organisms/FormContact/FormContact';

const Contact = () => (
    <MainTemplate>
        <ImageWithText />
        <FormContact />
    </MainTemplate>
);

export default Contact;
