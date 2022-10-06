import styled from "styled-components/native";
import { MenuContentProps } from '../AnimatedMenuVertically';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Animated } from "react-native";


export const MenuContent = styled.TouchableOpacity((props: MenuContentProps) => ({
  width: props.width ? wp(props.width) : wp(15),
  height: props.height ? wp(props.height) : wp(15),
  borderRadius: props.borderRadius ? props.borderRadius : '9px',
  backgroundColor: props.backgroundColor ? props.backgroundColor : "#f5f5f5",
  activeOpacity: props.activeOpacity ? props.activeOpacity : 0.2,
  //Shadow
  shadowColor: props.disableBoxShadow ? "transparent" : '#878787',
  shadowOffset: props.disableBoxShadow ? {} : { width: 2, height: 5},
  elevation: props.disableBoxShadow ? "0" : "2",
  shadowOpacity: props.disableBoxShadow ? "0" : "0.25",
  shadowRadius: props.disableBoxShadow ? "0" : "8px",
}));

export const LinesBox = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: space-between;
  padding: 20% 15%;
`;

export const Line = styled(Animated.View)`
  width: 100%;
  height: 17%;
  background-color: ${(props: MenuContentProps) => props?.lineColor ? props?.lineColor : "#343947"};
  border-radius: 20px;
`;
