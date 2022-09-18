import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CustomElasticButtonProps } from './index';

export const ContainerPressable = styled.TouchableOpacity((props: CustomElasticButtonProps) => ({
  width: props.width ? `${wp(props.width)}px` : `${wp(15)}px`,
  height: props.height ? `${wp(props.height)}px` : `${wp(15)}px`,
  backgroundColor: "transparent",
  activeOpacity: props.activeOpacity ? props.activeOpacity : 0.2,
  justifyContent: "center",
  alignItems: "center",
}));

export const IconBox = styled(Animated.View)`
  position: absolute;
`;