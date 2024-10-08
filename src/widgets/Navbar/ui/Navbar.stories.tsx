import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Theme } from '@/shared/const/theme';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    decorators: [
        StoreDecorator({}),
    ],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({}),
    ],
};

export const AuthNavbar: Story = {
    decorators: [
        StoreDecorator({
            user: { authData: {} },
        }),
    ],
};
