import styled from 'styled-components/native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    /* estamos trabalhando com proporcao, caso entre em outro app ele se ajusta */
    /* usando o pixel mas ja convertido na proporcao */
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
    margin-right: ${RFPercentage(17)}px;
`;

export const Form = styled.View`
    flex: 1;
    justify-content: space-between;
    width: 100%;
    padding: 24px;
`;

export const Fields = styled.View`

`;

export const TransactionTypes = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;
    margin-bottom: 16px;
`;