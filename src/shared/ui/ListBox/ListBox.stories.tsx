import type { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
    decorators: [
        (Story) => <div style={{ padding: '100px' }}><Story /></div>,
    ],
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Normal: Story = {
    args: {
        value: '1',
        items: [
            { content: '123456789', value: '1' },
            { content: '123456789', value: '2' },
            { content: '123456789', value: '3' },
        ],
    },
};
export const TopLeft: Story = {
    args: {
        value: '1',
        direction: 'top left',
        items: [
            { content: '123456789', value: '1' },
            { content: '123456789', value: '2' },
            { content: '123456789', value: '3' },
        ],
    },
};
export const TopRight: Story = {
    args: {
        value: '1',
        direction: 'top right',
        items: [
            { content: '123456789', value: '1' },
            { content: '123456789', value: '2' },
            { content: '123456789', value: '3' },
        ],
    },
};

export const BottomLeft: Story = {
    args: {
        value: '1',
        direction: 'bottom left',
        items: [
            { content: '123456789', value: '1' },
            { content: '123456789', value: '2' },
            { content: '123456789', value: '3' },
        ],
    },
};
export const BottomRight: Story = {
    args: {
        value: '1',
        direction: 'bottom right',
        items: [
            { content: '123456789', value: '1' },
            { content: '123456789', value: '2' },
            { content: '123456789', value: '3' },
        ],
    },
};
