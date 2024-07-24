import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import AvatarImage from './storybook.jpg';

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
        src: AvatarImage,
    },
};

export const Small: Story = {
    args: {
        size: 50,
        src: AvatarImage,
    },
};
