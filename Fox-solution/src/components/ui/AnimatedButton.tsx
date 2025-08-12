
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const AnimatedButton = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  href,
  type = 'button',
}: AnimatedButtonProps) => {
  const baseClasses = "relative overflow-hidden rounded-md font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md";

  const variantClasses = {
    primary: "bg-vofox-blue text-white hover:bg-vofox-darkBlue",
    secondary: "bg-white text-vofox-darkBlue border border-vofox-blue hover:bg-vofox-gray",
    outline: "bg-transparent text-vofox-blue border border-vofox-blue hover:bg-vofox-blue hover:text-white",
  };

  const sizeClasses = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5",
    lg: "px-8 py-3 text-lg",
  };

  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const renderButton = () => (
    <button onClick={onClick} className={buttonClasses} type={type}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={buttonClasses}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default AnimatedButton;
