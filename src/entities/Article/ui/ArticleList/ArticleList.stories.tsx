import type { Meta, StoryObj } from '@storybook/react';
import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleList } from './ArticleList';

const meta: Meta<typeof ArticleList> = {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const IsLoadingBig: Story = {
    args: {
        isLoading: true,
        articles: [],
        view: ArticleView.BIG,
    },
};

export const IsLoadingSmall: Story = {
    args: {
        isLoading: true,
        articles: [],
        view: ArticleView.SMALL,
    },
};
