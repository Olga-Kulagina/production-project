import { FC, lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton';
import { ArticleRatingProps } from './ArticleRating';

export const ArticleRatingLazy = lazy<FC<ArticleRatingProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleRating')), 1500);
}));

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={140} />}>
            <ArticleRatingLazy {...props} />
        </Suspense>
    );
};
