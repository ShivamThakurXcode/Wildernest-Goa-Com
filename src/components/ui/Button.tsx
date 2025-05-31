import { ReactNode, ElementType, ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-primary text-white hover:shadow-glow focus:ring-primary-500",
        secondary:
          "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 focus:ring-secondary-500 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700",
        accent:
          "bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500",
        outline:
          "bg-transparent border border-primary-500 text-primary-600 hover:bg-primary-50 focus:ring-primary-500 dark:text-primary-400 dark:hover:bg-gray-800",
        ghost:
          "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800",
        link: "bg-transparent text-primary-600 hover:underline focus:ring-primary-500 p-0 h-auto font-normal dark:text-primary-400",
      },
      size: {
        sm: "text-sm px-4 py-1.5",
        md: "text-base px-6 py-2",
        lg: "text-lg px-8 py-3",
        xl: "text-xl px-10 py-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonBaseProps = {
  children: ReactNode;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  className?: string;
};

export type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
} & ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonBaseProps | "as">;

const Button = <T extends ElementType = "button">({
  children,
  variant,
  size,
  className,
  as,
  ...props
}: ButtonProps<T>) => {
  const Component = as || "button";
  return (
    <Component
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
