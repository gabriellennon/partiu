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

export function AddTransaction(){
    const navigation = useNavigation();
    const [transactionType, setTransactionType] = useState('');
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    });
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

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
                        <Input 
                            placeholder="Nome"
                        />
                        <Input 
                            placeholder="Preço"
                        />


                        <TransactionTypes>
                            <TransactionTypeButton 
                                type="up" 
                                title="Entrada" 
                                onPress={() => handleTransactionTypes('positive')} 
                                //passando o estado que tem qual o tipo selecionado
                                isActive={transactionType === 'positive'}
                            />

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
                    <Button title="Enviar" onPress={() => {}} />
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