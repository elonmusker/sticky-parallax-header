import type { ColorValue } from 'react-native';

import type { AnimatedColorProp } from '../SharedProps';

export function parseAnimatedColorProp(
  animatedColorProp?: AnimatedColorProp
): ColorValue | undefined {
  'worklet';

  const result =
    typeof animatedColorProp === 'undefined' ||
    typeof animatedColorProp === 'string' ||
    typeof animatedColorProp === 'number' ||
    typeof animatedColorProp === 'symbol'
      ? animatedColorProp
      : animatedColorProp?.value;

  return result as ColorValue | undefined;
}
