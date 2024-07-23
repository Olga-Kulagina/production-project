import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'user' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('username'),
        )).toEqual({ username: 'username' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123456'),
        )).toEqual({ password: '123456' });
    });
});
