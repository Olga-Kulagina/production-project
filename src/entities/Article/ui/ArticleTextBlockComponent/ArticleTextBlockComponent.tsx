import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleTextBlockProps {
  className?: string;
}

export const ArticleCodeBlock = (props: ArticleTextBlockProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames('', {}, [className])}>
            ArticleTextBlock
        </div>
    );
};
