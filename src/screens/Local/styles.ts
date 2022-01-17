import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
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
    color: ${({ theme }) => theme.colors.dark_light};
    margin-right: ${RFPercentage(10)}px;
`;

export const ContentDescription = styled.View`
    margin-top: ${RFPercentage(10)}px;
`;

export const DescriptionText = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.bold_RobotoSlab };
    color: ${({ theme }) => theme.colors.dark_light};
    padding: 0 24px;
`;

export const TextAreaDescription = styled.TextInput`
    width: 90%;
    height: 95px;
    background-color: ${({ theme }) => theme.colors.shape};
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.10);
    border-radius: 6px;
    padding: 10px 16px;
    margin: 16px 24px;
`;

export const ButtonNewLocaly = styled(RectButton)`
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    position: absolute;
    bottom: 50px;
    right: 22px;
`;

export const ViewModal = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: 'rgba(0,0,0,0.2)';
`;

export const ModalView = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 6px;
    padding: 28px;
    width: ${RFValue(295)}px;
    align-items: center;
`;

export const TitleModal = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.bold_RobotoSlab };
    color: ${({ theme }) => theme.colors.dark_light};
    margin-bottom: 30px;
`;

export const DescriptionModal = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.medium };
    color: ${({ theme }) => theme.colors.dark_light};
    text-align: center;
    margin: 25px 0;
`;

export const ButtonModal = styled(RectButton)`
    background: ${({ theme }) => theme.colors.primary_light};
    opacity: 0.86;
    border-radius: 4px;
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.bold };
    color: ${({ theme }) => theme.colors.shape};
`;

export const ActionButton = styled.Text`
    background: ${({ theme }) => theme.colors.primary_light};
    opacity: 0.86;
    border-radius: 4px;
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.bold };
    color: ${({ theme }) => theme.colors.shape};
    padding: 9px 44px;
`;
