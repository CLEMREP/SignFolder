import { ButtonHTMLAttributes } from 'react';

export default function Button({ className = '', disabled, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `px-6 py-2 rounded-lg font-semibold drop-shadow-lg bg-primary-main text-text-dark-primary dark:text-text-dark-primary ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
