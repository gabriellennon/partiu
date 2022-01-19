import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Header,
    Title,
    Content,
    Label,
    ButtonContent,
    ContentBackButton,
    Titlebutton,
} from './styles';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import WorldSvg from '../../assets/icons/worldwide.svg';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';

export function DesViagem() {
    const navigation = useNavigation();

    function handleClickButton() {
        navigation.navigate("Home" as never, {} as never)
    }

    function handleBack() {
        navigation.goBack();
    }


    return (
        <Container>
            <StatusBar barStyle="light-content" />
            <ContentBackButton>
                <BackButton onPress={handleBack} />
                <Titlebutton>Voltar</Titlebutton>
            </ContentBackButton>
            <Header>
                <Title>Vamos começar?</Title>
                <WorldSvg
                    width={100}
                    height={100}
                />
            </Header>
            <Content>
                <Label>Digite o nome da viagem</Label>
                <Input
                    placeholder="Nome"
                />
                <Label>Quanto deseja gastar na viagem?</Label>
                <Input
                    placeholder="Valor"
                />
                <ButtonContent>
                    <Button title="Criar viagem" onPress={handleClickButton} />
                </ButtonContent>
            </Content>
        </Container>
    );
}