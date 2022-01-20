import styled from 'styled-components/native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather} from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`;

export const UserWrapper = styled.View`
    width: 100%;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;
    padding: 0 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const  Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`;

export const User = styled.View`
    margin-left: 17px;
`;


export const UserGreeting = styled.Text`
    color: ${({ theme }) => theme.colors.blue };
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular };
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.blue };
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold };
`;


export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.orange};
    font-size: ${RFValue(24)}px;

`;

export const LogoutButton = styled(BorderlessButton)``;

export const Content = styled.View``;

export const Description = styled.Text`
    text-align: center;
    color: ${({ theme }) => theme.colors.text_dark };
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.medium };
    margin-top: 24px;
`;
export const Placetrip = styled.Text`
    text-align: center;
    color: ${({ theme }) => theme.colors.dark_light };
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.medium };
    margin: 10px 0;
`;

export const ContainerCards = styled.View`
    padding: 0 22px;
    margin-top: 50px;
`;