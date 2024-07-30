import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
    args: {
        height: 200,
        width: '100%',
    },
};
export const Circle: Story = {
    args: {
        border: '50%',
        height: 100,
        width: 100,
    },
};
export const PrimaryDark: Story = {
    args: {
        height: 200,
        width: '100%',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
export const CircleDark: Story = {
    args: {
        border: '50%',
        height: 100,
        width: 100,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
