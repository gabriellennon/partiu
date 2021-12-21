import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MaterialIcons} from '@expo/vector-icons';

export const Container = styled(RectButton)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #FFF;
    border-radius: 5px;
    padding: 15px;
    margin-top: 8px;
`;


export const Header = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;
    margin-left: 8px;
`;

export const Icon = styled(MaterialIcons)`
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(18)}px;

`;

export const ArrowIcon = styled(MaterialIcons)`
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(18)}px;

`;

