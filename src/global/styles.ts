import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  background-color: #dbd5e0;
  padding: 30px 10px;
`;

export const AnimatedComponentBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`;

export const Box = styled.View`
  align-items: center;
  justify-content: center;
`;

