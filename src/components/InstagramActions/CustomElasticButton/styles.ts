import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { MenuContentProps } from 'src/components/AnimatedMenus/AnimatedMenuVertically';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const ContainerPressable = styled.TouchableOpacity((props: MenuContentProps) => ({
  width: props.width ? `${wp(props.width)}px` : `${wp(15)}px`,
  height: props.height ? `${wp(props.height)}px` : `${wp(15)}px`,
  borderRadius: props.borderRadius ? `${props.borderRadius}px` : '9px',
  backgroundColor: props.backgroundColor ? props.backgroundColor : "transparent",
  activeOpacity: props.activeOpacity ? props.activeOpacity : 0.2,
  justifyContent: "center",
  alignItems: "center",
}));

export const IconBox = styled(Animated.View)`
  position: absolute;
`;