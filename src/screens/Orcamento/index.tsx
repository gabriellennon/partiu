import React, { useCallback, useEffect, useState } from 'react';
import { BackButton } from '../../components/BackButton';
import { HighlightCard } from '../../components/HighlightCard';
import { TransationCardProps } from '../../components/TransactionCard';
import { TransactionCardHistory } from '../../components/TransactionCardHistory';
import { useFocusEffect, useNavigation, useTheme } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

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
    total: string;
    // lastTransaction: string;
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
interface ParamsValue {
    valor: number;
}

export function Orcamento() {
    const navigation = useNavigation();
    const theme = useTheme();
    const [transactions, setTransactions] = useState<DataListProps[]>([]);
    const dataKey = '@partiu:newTravel';
    const [dataObject, setDataObject] = useState<AsyncData>();
    //começa sendo vazio do tipo HighlightDataInterface
    const [highlightData, setHighlightData] = useState<HighlightDataInterface>({} as HighlightDataInterface);
    const [totalPrevisto, setTotalPrevisto] = useState('0');
    const [paramsValue, setParamsValue] = useState(0);
    const [paramsValueFinal, setParamsValueFinal] = useState('');
    const [refresh, setRefresh] = useState(1);
    const [loading, setLoading] = useState(true);

    const dataKeyTransaction = `@partiu:transactions_user`;

    // console.log(teste)

    let entriesTotal = 0;
    let expensiveTotal = 0;

    async function loadTransactions() {
        const response = await AsyncStorage.getItem(dataKeyTransaction);
        const transactions = response ? JSON.parse(response) : [];

        const transactionsFormatted: DataListProps[] = transactions.map((item: DataListProps) => {
            if(item.type === 'positive'){
                //Pegando o valor em entriesSum e somando mais o valor de item.amount , que é igual a entriesTotal = entriesTotal +  Number(item.amount)
                entriesTotal += Number(item.amount);
            }else {
                expensiveTotal += Number(item.amount);
            }
            
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

        setHighlightData({
            entries: {
                total: entriesTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })
            },
            expensives: {
                total: expensiveTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })
            },
            total: {
                total: paramsValue.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })
            }
        })

        console.log('high',highlightData)

        // let totalFormatted = Number(dataObject?.value).toLocaleString('pt-BR', {
        //     style: 'currency',
        //     currency: 'BRL'
        // })
        // setTotalPrevisto(totalFormatted);
        // console.log(highlightData)

        const paramsFormatted = paramsValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })

        // setTransactions(transactionsFormatted);
        setParamsValueFinal(paramsFormatted);
        const totalValue = Number(dataObject?.value ? dataObject?.value : 0) - expensiveTotal;
    }


    function handleBack(){
        navigation.goBack();
    }

    function handleGoClickButton(route: string){
        navigation.navigate(route as never, {} as never)
    }

    function getData(){
        const test = navigation.getState();
        const dataParams = test.routes.filter(e => e.name === 'Budget')
        // console.log('nav',test.routes)

        const finishparams = dataParams[0].params.valor;
        setParamsValue(finishparams);
        // console.log('PARAMS', finishparams)
        if(paramsValue !== 0){
            console.log('TESTE', paramsValue);
            loadTransactions();
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
        setRefresh(2);

        
        // async function loadData(){
        //   const dataResponse = await AsyncStorage.getItem(dataKey);
        //   //Coloco que o ! pra dizer que sempre vai ter alguma coisa
        //   setDataObject(JSON.parse(dataResponse!))
          
        //     // Limpar a lista caso precise
        //     // AsyncStorage.removeItem(dataKeyTransaction);
        //     console.log('high', JSON.parse(dataResponse!))
        //     console.log('objeto async', dataObject)
        // }
        
        // loadData();
        loadTransactions();
        
    }, [refresh]);

    useFocusEffect(useCallback(() => {
        loadTransactions();
    },[]));

    if(loading){
        return <AppLoading />
    }

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
                    // amount={highlightData.total.total}
                    amount="12"
                    lastTransaction="Dinheiro disponível para usar"
                />
                <HighlightCard
                    type="down"
                    title="Gastos"
                    // amount={highlightData.expensives.total}
                    amount="R$ 25,00"
                    lastTransaction="Total de gastos"
                />
                <HighlightCard
                    type="total"
                    title="Total previsto"
                    // amount={totalPrevisto}
                    amount={paramsValueFinal}
                    lastTransaction="Total previsto para gastar na viagem"
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