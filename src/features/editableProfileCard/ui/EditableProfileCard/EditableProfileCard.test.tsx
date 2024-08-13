import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { $api } from 'shared/api/api';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { componentRender } from 'shared/config/tests/componentRender/componentRender';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'Oogway',
    lastname: 'old sick turtle',
    age: 1000,
    currency: Currency.RUB,
    country: Country.China,
    city: 'Peking',
    username: 'admin',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: '1',
                username: 'Oogway',
            },
        },
    },
    asyncReducers: { profile: profileReducer },
};

describe('features/EditableProfileCard', () => {
    test('Режим readonly должен переключиться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });
    test('При отмене значения должны обнуляться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('Oogway');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('old sick turtle');
    });
    test('Должна появиться ошибка', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });
    test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
