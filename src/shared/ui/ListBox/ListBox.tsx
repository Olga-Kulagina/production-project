import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

import cls from './ListBox.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

export function ListBox(props: ListBoxProps) {
    const {
        className, items, value, defaultValue, onChange, readonly, direction = 'bottom', label,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span>{label}</span>}
            <HListBox
                as="div"
                disabled={readonly}
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >

                <HListBox.Button
                    className={cls.trigger}
                >
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(cls.item, {
                                    [cls.active]: active,
                                    [cls.selected]: selected,
                                    [cls.disabled]: item.disabled,
                                })}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
