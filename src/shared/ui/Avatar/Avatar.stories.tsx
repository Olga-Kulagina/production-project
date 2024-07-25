import type { Meta, StoryObj } from '@storybook/react';

import avatarImage from 'shared/assets/tests/avatar.jpg';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Light: Story = {
    args: {
        size: 150,
        src: avatarImage,
    },
};

export const Small: Story = {
    args: {
        size: 50,
        src: avatarImage,
    },
};
