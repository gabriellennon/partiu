import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form'
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
import { InputForm } from '../../components/Form/InputForm';

interface FormData {
    name: string;
    value: string;
}

export function DesViagem() {
    const navigation = useNavigation();

    const {
        control,
        handleSubmit,

    } = useForm();

    function handleClickButton(form: FormData) {
        const data = {
            name: form.name,
            value: form.value
        }
        console.log(data)

        // navigation.navigate("Home" as never, {} as never)
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
                <InputForm
                    placeholder="Nome"
                    name="name"
                    control={control}
                />
                <Label>Quanto deseja gastar na viagem?</Label>
                <InputForm
                    name="value"
                    placeholder="Valor"
                    control={control}
                />
                <ButtonContent>
                    <Button title="Criar viagem" onPress={handleSubmit(handleClickButton)} />
                </ButtonContent>
            </Content>
        </Container>
    );
}