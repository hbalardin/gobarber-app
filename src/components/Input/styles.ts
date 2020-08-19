import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  background: #232129;
  width: 100%;
  height: 60px;
  padding: 0 16px;
  margin-bottom: 8px;
  border-radius: 10px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  color: #fff;
  font-family: 'RoboSlab-Regular';
  font-size: 16px;

  flex: 1;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
