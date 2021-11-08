import styled from 'styled-components/native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    margin: 0 20px;
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.dark_light};
    opacity: 0.85;
    border-radius: 10px;
    padding: 15px 30px;
    margin-top: ${getStatusBarHeight() + 22}px;
    margin-bottom: 53px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold_Inter};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(12)}px;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular_Inter};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(14)}px;
`;

export const TitlePage = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold_RobotoSlab};
    color: ${({ theme }) => theme.colors.dark_light};
    font-size: ${RFValue(18)}px;
`;

export const ContentBox = styled.View``;

export const TitleCard = styled.Text`
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.bold_Inter};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(14)}px;
    margin-bottom: 5px;
`;

export const DescriptionCard = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular_Inter};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(12)}px;
    line-height: 16px;
    margin-right: 12px;
`;

export const CardButton = styled(RectButton)`
    background: #7057D1;
    opacity: 0.95;
    border-radius: 10px;
    padding: 21px 10px;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 0px;
`;