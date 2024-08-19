import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return form data', () => {
        const form = {
            first: 'Oogway',
            lastname: 'old sick turtle',
            age: 1000,
            currency: Currency.RUB,
            country: Country.China,
            city: 'Peking',
            username: 'admin',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
