import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(113)}px;

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
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold_RobotoSlab };
    color: ${({ theme }) => theme.colors.shape};
    margin-right: ${RFPercentage(11)}px;
`;

export const Cotentcards = styled.View`
    padding: 0 20px;
    margin-top: 40px;
`;

export const CardTravel = styled.View`
    background: #FFFFFF;
    border-radius: 5px;
    padding: 15px 25px;
    margin: 8px 0;
`;

export const TitleCards = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular };
    color: ${({ theme }) => theme.colors.title};
    margin-bottom: 10px;
`;

export const DescContent = styled.View``;

export const Description = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 4px 0;
`;

export const Text = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular };
    color: ${({ theme }) => theme.colors.title};
    margin-left: 3px;
`;

export const DescText = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular };
    color: #969CB3;
    margin-left: 4px;
`;

export const TitleContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;