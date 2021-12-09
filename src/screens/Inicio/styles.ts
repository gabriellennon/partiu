import styled from 'styled-components/native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    align-self: stretch;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold_RobotoSlab};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(35)}px;
`;

export const SubTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium_Inter};
    color: ${({ theme }) => theme.colors.dark_light};
    font-size: ${RFValue(16)}px;
    margin-top: 5px;
`;

export const ImageContainer = styled.View`
    align-items: center;
`;

export const ContentHome = styled.View`
    background: #F0F2F5;
    border-top-right-radius: 45px;
    border-top-left-radius: 45px;
    align-items: center;
    padding: 19px 24px;
    margin-top: -30px;
`;

export const ButtonsContainer = styled.View`

`;

export const InitialButton = styled(RectButton)`
    background: rgba(72, 41, 194, 0.89);
    opacity: 0.97;
    border-radius: 10px;
    padding: 8px 19px;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 0px;
    width: 100%;
`;

export const ContentBox = styled.View`
    width: 100%;
`;

export const TitleButton = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold_Inter};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(15)}px;
    text-transform: uppercase;
`;

export const DescriptionButton = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular_Inter};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(12)}px;
    margin-top: 5px;
`;
