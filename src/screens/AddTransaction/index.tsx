import React, { useState } from 'react';

import {
  Container,
  Header,
  TitleAction,
  TextAction,
  Form,
  Fields,
  TransactionTypes,
} from './styles';
import { 
    Keyboard, 
    Modal, 
    TouchableWithoutFeedback,
    Alert,
    StatusBar
} from 'react-native';
import { BackButton } from '../../components/BackButton';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { CategorySelect } from '../CategorySelect';

import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { InputForm } from '../../components/Form/InputForm';

interface FormData {
    name: string;
    amount: string
}

//dizendo o que meu formulario vai ter e suas validações 
const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    amount: Yup
    .number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('O valor é obrigatório')
});

export function AddTransaction(){
    const navigation = useNavigation();
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    
    const dataKey = `@partiu:transactions_user`;

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    });
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function handleBack(){
        navigation.goBack();
    }

    function handleTransactionTypes(type: 'positive' | 'negative' ){
        setTransactionType(type);
    }

    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true);
    }

    function handleCloseSelectCategoryModal(){
        setCategoryModalOpen(false);
    }

    async function handleRegister(form: FormData){
        if(!transactionType){
            return Alert.alert('Selecione o tipo da transação 🤓')
        }

        if(category.key === 'category'){
            return Alert.alert('Selecione a categoria 😬')
        }

        const newTransaction = {
            id: String(uuid.v4()),
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key,
            date: new Date()
        }

        //armazenando no dispositivo do usuario
        try {
            const data = await AsyncStorage.getItem(dataKey);
            const currentData = data ?  JSON.parse(data) : [];

            const dataFormatted = [
                //recuperando os dados e ai na hora de salvar eu passo os daos que já estavam salvos e passoo novo
                ...currentData, 
                newTransaction
            ];
            await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

            //zerando os campos apos ele cadastrar nova transacao
            reset();
            setTransactionType('');
            setCategory({
                key: 'category',
                name: 'Categoria'
            })
            //e após zerar eu encaminhoele pra tela de listagem 
            navigation.navigate('Budget' as never, {} as never);


        } catch (error) {
            console.log(error)
            Alert.alert("Não foi possível salvar");
        }
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <StatusBar barStyle="light-content" />
                <Header>
                    <TitleAction>
                        <BackButton onPress={handleBack} />
                        <TextAction>Cadastro</TextAction>
                    </TitleAction>
                </Header>
                <Form>
                    <Fields>
                        <InputForm
                            name="name"
                            control={control}
                            placeholder="Nome" 
                            //Colocando para o input formatar cada palavra (word), sentença (sentences), letra (characters) 
                            autoCapitalize="sentences"
                            //Tirando o por padrão do corretor de corrigir 
                            autoCorrect={false}
                            error={errors.name && errors.name.message}
                        />

                        <InputForm 
                            name="amount"
                            control={control}
                            placeholder="Preço" 
                            keyboardType="numeric"
                            error={errors.amount && errors.amount.message}
                        />


                        <TransactionTypes>
                            {/* <TransactionTypeButton 
                                type="up" 
                                title="Entrada" 
                                onPress={() => handleTransactionTypes('positive')} 
                                //passando o estado que tem qual o tipo selecionado
                                isActive={transactionType === 'positive'}
                            /> */}

                            <TransactionTypeButton 
                                type="down" 
                                title="Saída" 
                                onPress={() => handleTransactionTypes('negative')} 
                                isActive={transactionType === 'negative'}
                            />
                        </TransactionTypes>

                        <CategorySelectButton 
                            title={category.name}
                            onPress={handleOpenSelectCategoryModal}
                        />
                    </Fields>
                    <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
                </Form>

                <Modal visible={categoryModalOpen}>
                    <CategorySelect 
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseSelectCategoryModal}
                    />
                </Modal>
            </Container>
        </TouchableWithoutFeedback>
  );
}