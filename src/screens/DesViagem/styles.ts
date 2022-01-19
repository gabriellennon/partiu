import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.View`
    align-items: center;
    margin-top: ${getStatusBarHeight() + RFValue(30)}px;
    margin-bottom: ${RFValue(40)}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.shape};
    text-align: center;
    margin-bottom: ${RFValue(10)}px;
`;

export const Content = styled.View`
    padding: 0 14px;
`;

export const Label = styled.Text`
    text-align: center;
    margin-bottom: ${RFValue(7)}px;
    margin-top: ${RFValue(26)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.shape};
`;

export const ButtonContent = styled.View`
    margin-top: ${RFValue(60)}px;
`;

export const ContentBackButton = styled.View`
    align-items: center;
    flex-direction: row;
    margin-top: ${getStatusBarHeight() + RFValue(20)}px;
`;

export const Titlebutton = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold_RobotoSlab};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.shape};
`;