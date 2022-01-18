import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
    
`;

export const Header = styled.View`
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    margin-top: ${getStatusBarHeight() + RFValue(60)}px;
`;

export const TitleWrapper = styled.View`
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.shape};
    text-align: center;
    margin-bottom: ${RFValue(40)}px;
`;

export const Footer = styled.View``;

export const FooterWrapper = styled.View`
    padding: 0 32px;
    justify-content: space-between;
    margin-top: 110px;
`;
