import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}

const Section = ({ 
  children, 
  id, 
  className = '', 
  containerClassName = '',
  fullWidth = false,
  ...props 
}: SectionProps) => {
  return (
    <section id={id} className={cn('section', className)} {...props}>
      <div className={cn(
        fullWidth ? 'w-full' : 'container mx-auto px-4 sm:px-6 lg:px-8',
        containerClassName
      )}>
        {children}
      </div>
    </section>
  );
};

export default Section;