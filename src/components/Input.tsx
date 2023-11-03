import React, { forwardRef } from 'react';

import { classNames } from '@/utils/classNames';

type InputProps = {
  id?: string;
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  error?: boolean;
  label?: string | React.ReactNode;
  value?: string | number | readonly string[] | undefined;
  maxLength?: number;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onPaste?: React.ClipboardEventHandler<HTMLInputElement>;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  placeholder?: string;
  supportingText?: string | React.ReactNode;
  trailingContent?: React.ReactNode;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      type,
      error,
      label,
      value,
      onClick,
      onChange,
      maxLength,
      onKeyUp,
      onPaste,
      disabled,
      required,
      className = '',
      placeholder,
      supportingText,
      trailingContent,
    },
    ref,
    ...rest
  ) => (
    <div className='relative flex w-full flex-col'>
      {label && (
        <label
          htmlFor={id}
          className={classNames(
            'text-xs font-semibold pb-2',
            error ? 'text-red-900' : '',
            disabled ? 'text-gray-200' : ''
          )}
        >
          {label}
        </label>
      )}

      <div className='relative'>
        <input
          id={id}
          ref={ref}
          name={name}
          type={type}
          value={value}
          maxLength={maxLength}
          onClick={onClick}
          onChange={onChange}
          onKeyUp={onKeyUp}
          onPaste={onPaste}
          disabled={disabled}
          required={required}
          className={classNames(
            'bg-white w-full h-[60px] text-sm px-4 rounded outline-none border',
            'hover:ring-2 focus:ring-2',
            'transition-all duration-200',
            'disabled:border-gray-200 disabled:hover:ring-0 disabled:placeholder-gray-200',
            trailingContent ? 'pr-8' : '',
            error
              ? 'border-red-200 text-red-900 placeholder-red-900 placeholder-opacity-50'
              : 'border-gray-50 text-black',
            error
              ? 'hover:ring-red-900 focus:ring-red-900'
              : 'hover:ring-black focus:ring-blue-500',
            className
          )}
          placeholder={placeholder}
          {...rest}
        />

        {trailingContent && (
          <div className='flex absolute right-1.5 bottom-4 items-center justify-center'>
            {trailingContent}
          </div>
        )}
      </div>

      {supportingText && (
        <p
          className={classNames(
            'text-xs pt-1 font-semibold',
            error ? 'text-red-900' : '',
            disabled ? 'text-gray-200' : 'text-black'
          )}
        >
          {supportingText}
        </p>
      )}
    </div>
  )
);

Input.displayName = 'Input';

export default Input;
