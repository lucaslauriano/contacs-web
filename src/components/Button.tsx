'use client';

import { classNames } from '@/utils/classNames';

// style = outlined | filled | text
// color = primary | secondary
// size = large | small
// icon left | right
// theme = light | dark

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
  color?: 'primary' | 'secondary' | 'tertiary';
  loading?: boolean;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  appearance?: 'outlined' | 'filled' | 'text';
  iconPosition?: 'left' | 'right';
};

const buttonSizes = {
  sm: 'h-10 px-4',
  md: 'h-[40px] px-4',
  lg: 'h-[60px] px-4',
};

const buttonColors = {
  filled: {
    primary: {
      dark: 'bg-white text-black',
      light: 'bg-black text-white',
    },
    secondary: {
      dark: 'bg-blue-900 text-black',
      light: 'bg-blue-900 text-white',
    },
    tertiary: {
      dark: 'bg-transparent text-red-900 border-red-900 border-[2px]',
      light: 'bg-transparent text-red-900 border-red-900 border-[2px]',
    },
  },

  outlined: {
    primary: {
      dark: 'bg-transparent text-white border-white border-[2px]',
      light: 'bg-transparent text-black border-black border-[2px]',
    },
    secondary: {
      dark: 'bg-transparent text-blue-900 border-blue-900 border-[2px]',
      light: 'bg-transparent text-blue-900 border-blue-900 border-[2px]',
    },
    tertiary: {
      dark: 'bg-transparent text-red-900 border-red-900 border-[2px]',
      light: 'bg-transparent text-red-900 border-red-900 border-[2px]',
    },
  },

  text: {
    primary: {
      dark: 'bg-transparent text-white',
      light: 'bg-transparent text-black',
    },
    secondary: {
      dark: 'bg-transparent text-blue-900',
      light: 'bg-transparent text-blue-900',
    },
    tertiary: {
      dark: 'bg-transparent text-red-900',
      light: 'bg-transparent text-red-900',
    },
  },
};

// TODO: Hovers, actives and disables states

export default function Button({
  type = 'button',
  size = 'lg',
  theme = 'light',
  color = 'primary',
  onClick,
  fullWidth = true,
  children,
  disabled,
  className = '',
  appearance = 'filled',
  iconPosition = 'left',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        'justify-center flex items-center font-extrabold rounded transition-all duration-200 gap-2',
        buttonSizes[size],
        fullWidth ? 'w-full' : '',
        buttonColors[appearance][color][theme],
        className
      )}
    >
      {children}
    </button>
  );
}
