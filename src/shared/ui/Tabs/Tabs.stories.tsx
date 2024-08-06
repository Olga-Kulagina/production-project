import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'shared/Tabs',
    component: Tabs,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
    args: {
        tabs: [
            {
                value: 'tab 1',
                content: 'content 1',
            },
            {
                value: 'tab 2',
                content: 'content 2',
            },
            {
                value: 'tab 3',
                content: 'content 3',
            },
        ],
        value: 'tab 2',
        onTabClick: action('onTabClick'),
    },
};
