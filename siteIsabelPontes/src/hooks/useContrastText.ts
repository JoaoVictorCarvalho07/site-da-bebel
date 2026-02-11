import { useEffect, useState } from 'react';
import { getContrastTextColor } from '@/lib/contrast';

/**
 * Hook to get adaptive text color based on element's background color
 * @param elementRef - Reference to the element to analyze
 * @param defaultColor - Default color class if background can't be determined
 */
export function useContrastText(
  elementRef: React.RefObject<HTMLElement>,
  defaultColor: 'text-white' | 'text-black' = 'text-black',
): 'text-white' | 'text-black' {
  const [textColor, setTextColor] = useState<'text-white' | 'text-black'>(
    defaultColor,
  );

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const bgColor = window.getComputedStyle(element).backgroundColor;

    if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)') {
      setTextColor(getContrastTextColor(bgColor));
    }
  }, [elementRef]);

  return textColor;
}
