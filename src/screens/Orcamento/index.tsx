import React, { useEffect, useState } from 'react';
import { BackButton } from '../../components/BackButton';
import { HighlightCard } from '../../components/HighlightCard';
import { TransationCardProps } from '../../components/TransactionCard';
import { TransactionCardHistory } from '../../components/TransactionCardHistory';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    HighlightCards,
    Header,
    TitleAction,
    TextAction,
    History,
    TitleHisotry,
    CardsHistoriesContainer,
    HistoriesList,
} from './styles';

export interface DataListProps extends TransationCardProps {
    id: string;
}

interface HighlightProps {
    amount: string;
    lastTransaction: string;
}
interface HighlightDataInterface {
    entries: HighlightProps,
    expensives: HighlightProps,
    total: HighlightProps
}

export function Orcamento() {
    const navigation = useNavigation();
    const [transactions, setTransactions] = useState<DataListProps[]>([]);
    //começa sendo vazio do tipo HighlightDataInterface
    const [highlightData, setHighlightData] = useState<HighlightDataInterface>({} as HighlightDataInterface);

    function handleBack(){
        navigation.goBack();
      }

    useEffect(() => {
        //data mocked
        setTransactions([
            { 
                id: '1',
                type: 'negative',
                name: 'Comida',
                amount: 'R$ 1.200',
                category: 'food',
                date: '12/10/2021',
            },
            { 
                id: '2',
                type: 'negative',
                name: 'Roupa',
                amount: 'R$ 400',
                category: 'purchases',
                date: '12/10/2021',
            },
            { 
                id: '3',
                type: 'positive',
                name: 'Salário',
                amount: 'R$ 11.200',
                category: 'salary',
                date: '12/10/2021',
            },
        ])
    },[])

    return (
        <Container>
            <Header>
                <TitleAction>
                    <BackButton onPress={handleBack} />
                    <TextAction>Orçamento e gastos</TextAction>
                </TitleAction>
            </Header>
            <HighlightCards
            // ddeixar eles lado a lado
            // horizontal
            // para ocultar a barrinha horizontal que aparece
            // showsHorizontalScrollIndicator={false}
            // contentContainerStyle={{ paddingHorizontal: 24 }}
            >
                <HighlightCard
                    type="up"
                    title="Disponível"
                    amount="R$ 17.400,00"
                    lastTransaction="Dinheiro disponível para usar"
                />
                <HighlightCard
                    type="down"
                    title="Gastos"
                    amount="R$ 10.000,00"
                    lastTransaction="Total de gastos"
                />
                <HighlightCard
                    type="total"
                    title="Total previsto"
                    amount="R$ 10.000,00"
                    lastTransaction="Total geral"
                />

            </HighlightCards>

            <History>
                <TitleHisotry>Histórico de gastos</TitleHisotry>
                <CardsHistoriesContainer>
                    <HistoriesList
                        data={transactions}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <TransactionCardHistory data={item} />} 
                    />
                </CardsHistoriesContainer>
            </History>
        </Container>
    );
}