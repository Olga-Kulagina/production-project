import type { Meta, StoryObj } from '@storybook/react';

import AvatarImage from '@/shared/assets/tests/avatar.jpg';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comments/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {
    args: {
        comment: {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Oogway', avatar: AvatarImage },
        },
    },
};
export const IsLoading: Story = {
    args: {
        comment: {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Oogway', avatar: AvatarImage },
        },
        isLoading: true,
    },
};
