import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-self: stretch;
`;

export const HeaderBack = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: ${RFValue(80)}px;
    /* margin-top: ${getStatusBarHeight() + 18}px; */
    padding-top: ${getStatusBarHeight() + 18}px;;
    flex-direction: row;
    align-items: center;
`;

export const TitleBack = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold_RobotoSlab};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.shape};
`;
