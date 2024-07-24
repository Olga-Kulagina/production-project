import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Light: Story = {
    args: {
        label: 'Укажите текст',
        options: [
            { value: '1', content: 'option 1' },
            { value: '2', content: 'option 2' },
            { value: '3', content: 'option 3' },
        ],
    },
};
