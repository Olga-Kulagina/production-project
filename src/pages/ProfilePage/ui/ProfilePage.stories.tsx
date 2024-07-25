import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatarImage from 'shared/assets/tests/avatar.jpg';

import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    first: 'Oogway',
                    lastname: 'old sick turtle',
                    age: 1000,
                    currency: Currency.RUB,
                    country: Country.China,
                    city: 'Peking',
                    username: 'admin',
                    avatar: avatarImage,
                },
            },
        }),
    ],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK), StoreDecorator({
            profile: {
                form: {
                    first: 'Oogway',
                    lastname: 'old sick turtle',
                    age: 1000,
                    currency: Currency.RUB,
                    country: Country.China,
                    city: 'Peking',
                    username: 'admin',
                    avatar: avatarImage,
                },
            },
        }),
    ],
};
