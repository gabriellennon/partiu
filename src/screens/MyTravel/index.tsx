import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
    Container,
    Header,
    TitleAction,
    TextAction,
    Cotentcards,
    TitleCards,
    DescContent,
    Description,
    Text,
    DescText,
    CardTravel,
} from './styles';

export function MyTravel(){
    const theme = useTheme();
    const navigation = useNavigation();

    function handleBack(){
        navigation.goBack();
    }
    
  return (
    <Container>
        <StatusBar barStyle="light-content" />
            <Header>
                <TitleAction>
                    <BackButton onPress={handleBack} />
                    <TextAction>Viagens realizadas</TextAction>
                </TitleAction>
            </Header>
            <Cotentcards>
                <CardTravel>
                    <TitleCards>Viagem de aniversário</TitleCards>
                    <DescContent>
                        <Description>
                            <MaterialIcons 
                                name="event"
                                size={20}
                                color={theme.colors.primary }
                            />
                            <Text>Data:</Text>
                            <DescText>28/12/2021</DescText>
                        </Description>
                        <Description>
                            <MaterialIcons 
                                name="place"
                                size={20}
                                color={theme.colors.primary }
                            />
                            <Text>Destino:</Text>
                            <DescText>Rio de Janeiro, RJ, Brasil</DescText>
                        </Description>
                        <Description>
                            <MaterialIcons 
                                name="attach-money"
                                size={20}
                                color={theme.colors.primary }
                            />
                            <Text>Total gasto::</Text>
                            <DescText>R$ 5.000,00</DescText>
                        </Description>
                    </DescContent>
                </CardTravel>
                <CardTravel>
                    <TitleCards>Viagem formatura</TitleCards>
                    <DescContent>
                        <Description>
                            <MaterialIcons 
                                name="event"
                                size={20}
                                color={theme.colors.primary }
                            />
                            <Text>Data:</Text>
                            <DescText>01/06/2021</DescText>
                        </Description>
                        <Description>
                            <MaterialIcons 
                                name="place"
                                size={20}
                                color={theme.colors.primary }
                            />
                            <Text>Destino:</Text>
                            <DescText>Arraial do Cabo, RJ, Brasil</DescText>
                        </Description>
                        <Description>
                            <MaterialIcons 
                                name="attach-money"
                                size={20}
                                color={theme.colors.primary }
                            />
                            <Text>Total gasto::</Text>
                            <DescText>R$ 8.000,00</DescText>
                        </Description>
                    </DescContent>
                </CardTravel>
            </Cotentcards>
    </Container>
  );
}