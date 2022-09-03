import styled from "styled-components/native";
import { MenuContentProps } from './index';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Animated } from "react-native";


export const MenuContent = styled.TouchableOpacity((props: MenuContentProps) => ({
  width: props.width ? wp(props.width) : wp(15),
  height: props.height ? wp(props.height) : wp(15),
  borderRadius: props.borderRadius ? props.borderRadius : '9px',
  backgroundColor: props.backgroundColor ? props.backgroundColor : "#bec6ed",
  activeOpacity: props.activeOpacity ? props.activeOpacity : 0.2,
  shadowColor: '#52006A',
  shadowOffset: { width: 5, height: 2 },
  elevation: "2",
  shadowOpacity: "0.25",
  shadowRadius: "8px",
}));

export const LinesBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 20% 10px;
`;

export const Line = styled(Animated.View)`
  width: 80%;
  height: 17%;
  background-color: ${(props: MenuContentProps) => props?.lineColor ? props?.lineColor : "#343947"};
  border-radius: 20px;
`;
