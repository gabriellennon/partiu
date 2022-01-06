import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { DataListProps } from '.';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    /* estamos trabalhando com proporcao, caso entre em outro app ele se ajusta */
    /* usando o pixel mas ja convertido na proporcao */
    height: ${RFPercentage(42)}px;

    background-color: ${({ theme }) => theme.colors.primary_light};
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`;

export const TitleAction = styled.View`
    width: 100%;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;
    padding: 0 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TextAction = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.bold_RobotoSlab };
    color: ${({ theme }) => theme.colors.shape};
    margin-right: ${RFPercentage(7)}px;
`;


export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {paddingHorizontal: 24}
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;

export const History = styled.View`
    flex: 1;
    padding: 0 24px;
    margin-top: ${RFPercentage(12)}px;
`;

export const TitleHisotry = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.medium };
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.dark_light};
`;

export const CardsHistoriesContainer = styled.View``;

export const HistoriesList = styled(
    //falando que a flatlist é um novo e tem um tipagem
    FlatList as new () => FlatList<DataListProps>
    ).attrs({
    showsVerticalScrollIndicator: false,
    //o card nao vai ficar por cima do detalhe de minimizar do iphone que tem a partir do X
    contentContainerStyle: {
        paddingBottom: getBottomSpace()
    }
})``;

export const ButtonNewTransaction = styled(RectButton)`
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: center;
    border-radius: 30px;

    position: absolute;
    bottom: 13px;
    right: 22px;
`;