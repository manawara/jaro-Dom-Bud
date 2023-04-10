import React from 'react';
import LinkItem from '../../atoms/LinkItem/LinkItem';
import Logo from '../../atoms/Logo/Logo';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import { ListItem, Item, Label } from './List.style';

const List = (props) => (
    <ListItem>
        <Item>
            <Logo />
            <Paragraph>profesjonalna budowa domów od podstaw.</Paragraph>
        </Item>
        <Item>
            <Label>e-mail</Label>
            <LinkItem label="marcinnawara@int.pl" item="mailto:marcinnawara@int.pl" />
        </Item>
        <Item>
            <Label>telefon</Label>
            <LinkItem label="+48 531 770 282" item="tel:531770282" />
        </Item>
        <Item>
            <Label>adres</Label>
            <LinkItem label="Podobin 123" />
        </Item>
    </ListItem>
);

export default List;
