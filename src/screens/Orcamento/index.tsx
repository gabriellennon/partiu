import React, { useEffect, useState } from 'react';
import { BackButton } from '../../components/BackButton';
import { HighlightCard } from '../../components/HighlightCard';
import { TransationCardProps } from '../../components/TransactionCard';
import { TransactionCardHistory } from '../../components/TransactionCardHistory';
import { useNavigation, useTheme } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    ButtonNewTransaction,
} from './styles';
import { StatusBar } from 'react-native';

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

interface AsyncData {
    name: string;
    value: string;
}

export function Orcamento() {
    const navigation = useNavigation();
    const theme = useTheme();
    const [transactions, setTransactions] = useState<DataListProps[]>([]);
    const dataKey = '@partiu:newTravel';
    const [dataObject, setDataObject] = useState<AsyncData>();
    //começa sendo vazio do tipo HighlightDataInterface
    const [highlightData, setHighlightData] = useState<HighlightDataInterface>({} as HighlightDataInterface);

    const dataKeyTransaction = `@partiu:transactions_user`;

    function handleBack(){
        navigation.goBack();
    }

    function handleGoClickButton(route: string){
        navigation.navigate(route as never, {} as never)
    }

    async function loadTransactions() {
        const response = await AsyncStorage.getItem(dataKeyTransaction);
        const transactions = response ? JSON.parse(response) : [];

        const transactionsFormatted: DataListProps[] = transactions.map((item: DataListProps) => {
            const amount = Number(item.amount).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })

            const date = Intl.DateTimeFormat('pt-BR', {
                day:'2-digit',
                month:'2-digit',
                year:'2-digit',
            }).format(new Date(item.date));

            return {
                id: item.id,
                name: item.name,
                amount,
                type: item.type,
                category: item.category,
                date
            }
        });

        setTransactions(transactionsFormatted);
    }

    useEffect(() => {
        async function loadData(){
          const dataResponse = await AsyncStorage.getItem(dataKey);
          //Coloco que o ! pra dizer que sempre vai ter alguma coisa
          setDataObject(JSON.parse(dataResponse!))
        }
    
        loadData();
    }, []);

    useEffect(() => {
        loadTransactions();

        //data mocked
        // setTransactions([
        //     { 
        //         id: '1',
        //         type: 'negative',
        //         name: 'Comida',
        //         amount: 'R$ 1.200',
        //         category: 'food',
        //         date: '12/10/2021',
        //     },
        // ])
    },[])

    return (
        <Container>
            <StatusBar barStyle="light-content" />
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
                    amount={`R$ ${dataObject?.value}`}
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

            <ButtonNewTransaction onPress={() => handleGoClickButton('AddTransaction')}>
                <MaterialIcons 
                    name="add" 
                    size={32} 
                    color='#FFF'
                />
            </ButtonNewTransaction>
        </Container>
    );
}