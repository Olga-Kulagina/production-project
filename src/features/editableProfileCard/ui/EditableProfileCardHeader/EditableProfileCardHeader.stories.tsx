import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

const meta: Meta<typeof EditableProfileCardHeader> = {
    title: 'features/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCardHeader>;

export const Primary: Story = {
    decorators: [
        StoreDecorator({}),
    ],
};
