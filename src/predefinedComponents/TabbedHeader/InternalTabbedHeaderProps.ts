import type { RefObject } from 'react';
import type { ScrollView, StyleProp, ViewStyle } from 'react-native';
import type { AnimatedStyle, SharedValue } from 'react-native-reanimated';

export interface InternalPagerProps {
  disableScrollToPosition?: boolean;
  initialPage?: number;
  minScrollHeight: number;
  onChangeTab?: (previousPage: number, newPage: number) => void;
  page: number;
  pageContainerStyle?: StyleProp<AnimatedStyle<ViewStyle>>;
  rememberTabScrollPosition?: boolean;
  scrollHeight: number;
  scrollRef: RefObject<ScrollView>;
  scrollValue: SharedValue<number>;
  swipedPage?: (index: number) => void;
}
