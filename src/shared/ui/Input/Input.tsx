import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
  fullWidth?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className, value, onChange, type = 'text', placeholder, autofocus, readonly, fullWidth, ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.fullWidth]: fullWidth,
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    return (
        <div
            className={classNames(cls.InputWrapper, { [cls.fullWidth]: fullWidth }, [className])}
        >
            {placeholder && (
                <div className={cls.placeholder}>
                    {placeholder}
                </div>
            )}
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={classNames(cls.input, mods)}
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    );
});
