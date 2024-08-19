import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { EditableProfileCard } from './EditableProfileCard';

const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Primary: Story = {
    decorators: [
        StoreDecorator({}),
    ],
};
