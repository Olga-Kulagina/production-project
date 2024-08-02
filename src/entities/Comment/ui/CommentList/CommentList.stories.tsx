import type { Meta, StoryObj } from '@storybook/react';

import AvatarImage from 'shared/assets/tests/avatar.jpg';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comments/CommentList',
    component: CommentList,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'hello world',
                user: { id: '1', username: 'Oogway', avatar: AvatarImage },
            },
            {
                id: '2',
                text: 'hello',
                user: { id: '2', username: 'Po' },
            },
        ],
    },
};
export const IsLoading: Story = {
    args: {
        comments: [],
        isLoading: true,
    },
};
