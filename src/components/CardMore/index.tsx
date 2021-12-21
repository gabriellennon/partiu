import React from 'react';

import {
  Container,
  Header,
  Icon,
  Title,
  ArrowIcon
} from './styles';

interface ButtoProps {
    IconHeader: string;
    TitleButton: string;
    onPress: () => void;
}

export function CardMore({
    IconHeader,
    TitleButton,
    ...rest 
}:ButtoProps){
  return (
    <Container>
        <Header>
            <Icon name={IconHeader} />
            <Title>{TitleButton}</Title>
        </Header>
        <ArrowIcon name="arrow-forward-ios" />
    </Container>
  );
}