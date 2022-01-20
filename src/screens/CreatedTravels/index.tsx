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
    TitleContainer,
} from './styles';
export function CreatedTravels() {
    const theme = useTheme();
    const navigation = useNavigation();

    function handleBack(){
        navigation.goBack();
    }

    function handleClickCard(){
        navigation.navigate("Home" as never, {} as never)
    }    

    return (
        <Container>
            <StatusBar barStyle="light-content" />
            <Header>
                <TitleAction>
                    <BackButton onPress={handleBack} />
                    <TextAction>Viagens criadas</TextAction>
                </TitleAction>
            </Header>
            <Cotentcards>
                <CardTravel>
                    <TitleContainer>
                        <TitleCards>Viagem de aniversário</TitleCards>
                        <MaterialIcons
                            name="play-circle-filled"
                            size={46}
                            color={theme.colors.pallete_logo_green}
                            onPress={handleClickCard}
                        />
                    </TitleContainer>
                    <DescContent>
                        <Description>
                            <MaterialIcons
                                name="event"
                                size={20}
                                color={theme.colors.primary}
                            />
                            <Text>Data:</Text>
                            <DescText>28/12/2021</DescText>
                        </Description>
                        <Description>
                            <MaterialIcons
                                name="place"
                                size={20}
                                color={theme.colors.primary}
                            />
                            <Text>Destino:</Text>
                            <DescText>Rio de Janeiro, RJ, Brasil</DescText>
                        </Description>
                        <Description>
                            <MaterialIcons
                                name="attach-money"
                                size={20}
                                color={theme.colors.primary}
                            />
                            <Text>Previsão de gasto:</Text>
                            <DescText>R$ 5.000,00</DescText>
                        </Description>
                    </DescContent>
                </CardTravel>
                <CardTravel>
                    <TitleContainer>
                        <TitleCards>Viagem a trabalho</TitleCards>
                        <MaterialIcons
                            name="done"
                            size={40}
                            color={theme.colors.primary}
                        />
                    </TitleContainer>
                    <DescContent>
                        <Description>
                            <MaterialIcons
                                name="event"
                                size={20}
                                color={theme.colors.primary}
                            />
                            <Text>Data:</Text>
                            <DescText>28/12/2021</DescText>
                        </Description>
                        <Description>
                            <MaterialIcons
                                name="place"
                                size={20}
                                color={theme.colors.primary}
                            />
                            <Text>Destino:</Text>
                            <DescText>Curitiba, PR, Brasil</DescText>
                        </Description>
                        <Description>
                            <MaterialIcons
                                name="attach-money"
                                size={20}
                                color={theme.colors.primary}
                            />
                            <Text>Previsão de gasto:</Text>
                            <DescText>R$ 3.000,00</DescText>
                        </Description>
                    </DescContent>
                </CardTravel>
            </Cotentcards>
        </Container>
    );
}