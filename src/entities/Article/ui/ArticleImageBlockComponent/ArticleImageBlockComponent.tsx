import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleImageBlockProps {
  className?: string;
}

export const ArticleCodeBlock = (props: ArticleImageBlockProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames('', {}, [className])}>
            ArticleImageBlock
        </div>
    );
};
