import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'text text text',
    },
};
export const Error: Story = {
    args: {
        title: 'Title error',
        text: 'text text text error',
        theme: TextTheme.ERROR,
    },
};
export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
};
export const OnlyText: Story = {
    args: {
        text: 'text text text',
    },
};
export const PrimaryDark: Story = {
    args: {
        title: 'Title',
        text: 'text text text',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
export const OnlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
export const OnlyTextDark: Story = {
    args: {
        text: 'text text text',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
