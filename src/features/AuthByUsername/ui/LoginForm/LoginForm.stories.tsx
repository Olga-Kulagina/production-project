import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    decorators: [
        StoreDecorator({
            loginForm: { username: 'user', password: '321' },
        }),
    ],
};
export const WithError: Story = {
    decorators: [
        StoreDecorator({
            loginForm: { username: 'user', password: '321', error: 'error' },
        }),
    ],
};
export const Loading: Story = {
    decorators: [
        StoreDecorator({
            loginForm: { isLoading: true },
        }),
    ],
};
