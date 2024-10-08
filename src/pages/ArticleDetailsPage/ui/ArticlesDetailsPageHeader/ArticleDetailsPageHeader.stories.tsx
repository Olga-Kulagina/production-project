import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const Primary: Story = {
    decorators: [
        StoreDecorator({}),
    ],
};
