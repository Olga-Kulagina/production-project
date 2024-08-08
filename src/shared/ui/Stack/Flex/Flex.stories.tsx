import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
    args: {
        children: (
            <>
                <div>11111</div>
                <div>22222</div>
                <div>3333333</div>
                <div>444</div>
                <div>55</div>
            </>
        ),
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                <div>11111</div>
                <div>22222</div>
                <div>3333333</div>
                <div>444</div>
                <div>55</div>
            </>
        ),
    },
};

export const RowGap4: Story = {
    args: {
        gap: '4',
        children: (
            <>
                <div>11111</div>
                <div>22222</div>
                <div>3333333</div>
                <div>444</div>
                <div>55</div>
            </>
        ),
    },
};
export const RowGap8: Story = {
    args: {
        gap: '8',
        children: (
            <>
                <div>11111</div>
                <div>22222</div>
                <div>3333333</div>
                <div>444</div>
                <div>55</div>
            </>
        ),
    },
};
export const RowGap16: Story = {
    args: {
        gap: '16',
        children: (
            <>
                <div>11111</div>
                <div>22222</div>
                <div>3333333</div>
                <div>444</div>
                <div>55</div>
            </>
        ),
    },
};
export const RowGap32: Story = {
    args: {
        gap: '32',
        children: (
            <>
                <div>11111</div>
                <div>22222</div>
                <div>3333333</div>
                <div>444</div>
                <div>55</div>
            </>
        ),
    },
};

export const ColumnGap16: Story = {
    args: {
        gap: '16',
        direction: 'column',
        children: (
            <>
                <div>11111</div>
                <div>22222</div>
                <div>3333333</div>
                <div>444</div>
                <div>55</div>
            </>
        ),
    },
};

export const ColumnAlignEnd: Story = {
    args: {
        align: 'end',
        direction: 'column',
        children: (
            <>
                <div>11111</div>
                <div>22222</div>
                <div>3333333</div>
                <div>444</div>
                <div>55</div>
            </>
        ),
    },
};
