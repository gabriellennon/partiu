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
    margin-right: ${RFPercentage(17)}px;
`;

export const ContentTask = styled.View`
    flex: 1;
`;