import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'full';
}

const Container = ({ 
  children, 
  size = 'default', 
  className, 
  ...props 
}: ContainerProps) => {
  const sizeClasses = {
    default: 'max-w-7xl',
    sm: 'max-w-5xl',
    lg: 'max-w-8xl',
    xl: 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  return (
    <div 
      className={cn(
        'px-4 sm:px-6 lg:px-8 mx-auto', 
        sizeClasses[size], 
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;