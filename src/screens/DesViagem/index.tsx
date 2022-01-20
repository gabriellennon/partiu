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
import { StatusBar, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { BackButton } from '../../components/BackButton';
import WorldSvg from '../../assets/icons/worldwide.svg';
import { Button } from '../../components/Form/Button';
import { InputForm } from '../../components/Form/InputForm';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FormData {
    name: string;
    value: string;
}

//dizendo o que meu formulario vai ter e suas validações 
const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    value: Yup
    .number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('O valor é obrigatório')
});

export function DesViagem() {
    const navigation = useNavigation();

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    async function handleClickButton(form: FormData) {
        const data = {
            name: form.name,
            value: form.value
        }

        try {
            //ASYNC STORAGE
            const dataKey = '@partiu:newTravel';
            await AsyncStorage.setItem(dataKey, JSON.stringify(data));
            navigation.navigate("Home" as never, {} as never)
            
        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possível criar viagem');
        }

    }

    function handleBack() {
        navigation.goBack();
    }


    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
        >
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
                        autoCapitalize='sentences'
                        autoCorrect={false}
                        error={errors.name && errors.name.message}
                    />
                    <Label>Quanto deseja gastar na viagem?</Label>
                    <InputForm
                        name="value"
                        placeholder="Valor"
                        control={control}
                        keyboardType='numeric'
                        error={errors.value && errors.value.message}
                    />
                    <ButtonContent>
                        <Button title="Criar viagem" onPress={handleSubmit(handleClickButton)} />
                    </ButtonContent>
                </Content>
            </Container>
        </TouchableWithoutFeedback>
    );
}