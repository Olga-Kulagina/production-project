import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import { Button, ButtonTheme } from '@/shared/ui/Button';

import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCardHeaderProps {
  className?: string
}

export const EditableProfileCardHeader = (props: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const readonly = useSelector(getProfileReadonly);
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

    const canEdit = authData?.id === profileData?.id;

    const {
        className,
    } = props;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <div>
                    {readonly ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                            data-testid="EditableProfileCardHeader.EditButton"
                        >
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <HStack gap="8">
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onCancelEdit}
                                data-testid="EditableProfileCardHeader.CancelButton"
                            >
                                {t('Отменить')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSave}
                                data-testid="EditableProfileCardHeader.SaveButton"
                            >
                                {t('Сохранить')}
                            </Button>
                        </HStack>
                    )}
                </div>
            )}
        </HStack>
    );
};
