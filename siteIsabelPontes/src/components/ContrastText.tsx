import { useRef } from 'react';
import { useContrastText } from '@/hooks/useContrastText';

interface ContrastTextProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  [key: string]: any;
}

/**
 * Component that automatically adjusts text color based on background color
 * Detects if background is dark or light and applies white or dark text accordingly
 *
 * Example:
 * <div className="bg-black p-4">
 *   <ContrastText className="text-2xl font-bold">
 *     This text will be white
 *   </ContrastText>
 * </div>
 */
export function ContrastText({
  children,
  className = '',
  as: Component = 'div',
  ...props
}: ContrastTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const textColor = useContrastText(ref as React.RefObject<HTMLElement>);

  return (
    <Component ref={ref} className={`${textColor} ${className}`} {...props}>
      {children}
    </Component>
  );
}

/**
 * Specialized version for sections/containers with background images or colors
 */
export function ContrastSection({
  children,
  className = '',
  ...props
}: Omit<ContrastTextProps, 'as'>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const textColor = useContrastText(ref as React.RefObject<HTMLElement>);

  return (
    <section ref={ref} className={`${textColor} ${className}`} {...props}>
      {children}
    </section>
  );
}

/**
 * Specialized version for headers
 */
export function ContrastHeading({
  children,
  level = 1,
  className = '',
  ...props
}: Omit<ContrastTextProps, 'as'> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}) {
  const Component = `h${level}` as React.ElementType;
  const ref = useRef<HTMLHeadingElement | null>(null);
  const textColor = useContrastText(ref as React.RefObject<HTMLElement>);

  return (
    <Component ref={ref} className={`${textColor} ${className}`} {...props}>
      {children}
    </Component>
  );
}
