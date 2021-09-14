import { ViewStyle, LayoutAnimationConfig, StyleProp, Insets } from "react-native";
import { ReactNode } from "react";

export type KeyboardAccessoryViewRenderProp = ({
  isKeyboardVisible,
}: {
  isKeyboardVisible: boolean;
}) => ReactNode;

interface KeyboardAccessoryProps {
  style?: StyleProp<ViewStyle>;
  animateOn?: "ios" | "android" | "all" | "none";
  animationConfig?: (() => LayoutAnimationConfig) | LayoutAnimationConfig;
  alwaysVisible?: boolean;
  bumperHeight?: number;
  visibleOpacity?: number;
  onKeyboardShowDelay?: boolean | number;
  heightProperty?: 'height' | 'minHeight';
  hiddenOpacity?: number;
  hideBorder?: boolean;
  inSafeAreaView?: boolean;
  androidAdjustResize?: boolean;
  avoidKeyboard?: boolean;
}

export interface KeyboardAccessoryViewProps 
  extends KeyboardAccessoryProps {
  children: KeyboardAccessoryViewRenderProp | ReactNode;
}

export declare const KeyboardAccessoryView: React.ComponentType<KeyboardAccessoryViewProps>;

export type KeyboardAccessoryNavigationArrowDirection =
  | "down"
  | "up"
  | "right"
  | "left";

export interface KeyboardAccessoryNavigationProps
  extends KeyboardAccessoryProps {
  doneButtonTitle?: string;
  tintColor?: string;
  doneButton?: ReactNode;
  nextButton?: ReactNode;
  previousButton?: ReactNode;
  infoContainer?: ReactNode;
  doneDisabled?: boolean;
  nextDisabled?: boolean;
  previousDisabled?: boolean;
  doneHidden?: boolean;
  nextHidden?: boolean;
  previousHidden?: boolean;
  accessoryStyle?: StyleProp<ViewStyle>;
  doneButtonStyle?: StyleProp<ViewStyle>;
  doneButtonTitleStyle?: StyleProp<ViewStyle>;
  infoMessageStyle?: StyleProp<ViewStyle>;
  doneButtonHitslop?: number | Insets;
  previousButtonStyle?: StyleProp<ViewStyle>;
  nextButtonStyle?: StyleProp<ViewStyle>;
  nextButtonDirection?: KeyboardAccessoryNavigationArrowDirection;
  nextButtonHitslop?: number | Insets;
  previousButtonDirection?: KeyboardAccessoryNavigationArrowDirection;
  previousButtonHitslop?: number | Insets;
  onDone?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

export declare const KeyboardAccessoryNavigation: React.ComponentType<KeyboardAccessoryNavigationProps>;

export interface KeyboardAwareTabBarComponentProps {
  TabBarComponent: React.ComponentType<any>;
  [x: string]: any;
}

export declare const KeyboardAwareTabBarComponent: React.ComponentType<KeyboardAwareTabBarComponentProps>;
