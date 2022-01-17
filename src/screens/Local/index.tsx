import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StatusBar , Modal, Alert} from 'react-native';
import { BackButton } from '../../components/BackButton';
import { Search } from '../../components/Search';
import { MaterialIcons } from '@expo/vector-icons';
import Check from '../../assets/icons/check.svg';

import {
    Container,
    Header,
    TitleAction,
    TextAction,
    ContentDescription,
    DescriptionText,
    TextAreaDescription,
    ButtonNewLocaly,
    ViewModal,
    ModalView,
    TitleModal,
    DescriptionModal,
    ButtonModal,
    ActionButton,
} from './styles';

export function Local() {
    const navigation = useNavigation();
    const [description, setDescription] = useState('');
    const [modalActive, setModalActive] = useState(false);
    
    function handleBack(){
        navigation.goBack();
    }

    function registerLocal(){
        console.log(description);
        if(description !== ''){
            setModalActive(true);
        } else {
            Alert.alert('Atenção!', 'Preencha todos os campos.')
        }
    }

    function navigationHome(){
        navigation.navigate("Home" as never, {} as never)
    }

    return (
        <Container>
            <StatusBar barStyle="dark-content" />
            <Header>
                <TitleAction>
                    <BackButton color="#50555A" onPress={handleBack} />
                    <TextAction>Selecione o local</TextAction>
                </TitleAction>
            </Header>
            <Search placeholder="Insira o nome do local" />
            <ContentDescription>
                <DescriptionText>Fale um pouco mais sobre o lugar</DescriptionText>
                <TextAreaDescription
                    multiline
                    numberOfLines={5}
                    autoCorrect={false}
                    placeholder='Descreva aqui sobre o local'
                    placeholderTextColor="#9BA5AE"
                    onChangeText={setDescription}
                />
            </ContentDescription>

            <Modal
                visible={modalActive}
                animationType='fade'
                transparent={true}
                onRequestClose={() => setModalActive(false)}
            >
                <ViewModal>
                    <ModalView>
                        {/* <MaterialIcons 
                            name="close" 
                            size={26} 
                            color='#50555A'
                            onPress={() => setModalActive(false)}
                        /> */}
                        <TitleModal>Ótimo trabalho!</TitleModal>
                        <Check />
                        <DescriptionModal>Obrigado por compartilhar sua experiencia conosco!</DescriptionModal>
                        <ActionButton onPress={navigationHome}>Voltar ao início</ActionButton>
                        {/* <ButtonModal onPress={() =>{}}>Voltar ao início</ButtonModal> */}
                    </ModalView>
                </ViewModal>
            </Modal>

            <ButtonNewLocaly onPress={registerLocal}>
                <MaterialIcons 
                    name="check" 
                    size={32} 
                    color='#FFF'
                />
            </ButtonNewLocaly>
        </Container>
    );
}