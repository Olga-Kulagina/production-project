import type { Meta, StoryObj } from '@storybook/react';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatarImage from 'shared/assets/tests/avatar.jpg';

import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
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
};
export const WithError: Story = {
    args: {
        error: 'true',
    },
};
export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
